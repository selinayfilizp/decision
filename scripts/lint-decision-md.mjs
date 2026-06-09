#!/usr/bin/env node
import fs from "node:fs";

const file = process.argv[2];

if (!file) {
  console.error("Usage: node scripts/lint-decision-md.mjs <DECISION.md>");
  process.exit(2);
}

const text = fs.readFileSync(file, "utf8");
const errors = [];
const warnings = [];

const requiredSections = [
  "Meta",
  "Decision Identity",
  "Risk Profile",
  "Autonomy Rules",
  "Decision Speed",
  "Tradeoff Hierarchy",
  "Kill Criteria Defaults",
  "Calibration Profile",
  "Anti-Patterns",
  "Domain Rules",
  "Meta-Rules"
];

const riskLevels = new Set([
  "Ultra-conservative",
  "Conservative",
  "Moderate",
  "Moderate-Aggressive",
  "Aggressive",
  "Very Aggressive"
]);

function hasSection(name) {
  return new RegExp(`^## ${escapeRegExp(name)}\\s*$`, "m").test(text);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function sectionBody(name) {
  const match = text.match(new RegExp(`^## ${escapeRegExp(name)}\\s*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, "m"));
  return match?.[1] ?? "";
}

for (const section of requiredSections) {
  if (!hasSection(section)) {
    errors.push(`Missing required section: ## ${section}`);
  }
}

const recommendedSections = [
  "Preference Evidence",
  "Trust Calibration Rules",
  "Conflict Zones",
  "Decision Log"
];

const meta = sectionBody("Meta");
for (const field of ["Format version", "Last updated", "Source"]) {
  if (meta && !new RegExp(`^- ${escapeRegExp(field)}: .+`, "m").test(meta)) {
    errors.push(`Meta must include "- ${field}: ..."`);
  }
}

const riskProfile = sectionBody("Risk Profile");
const riskLines = riskProfile.split("\n").filter((line) => /^- [^:]+:/.test(line));
if (!riskLines.some((line) => /^- Overall:/.test(line))) {
  errors.push("Risk Profile must include an Overall risk level");
}

for (const line of riskLines) {
  const [, label, rawLevel = ""] = line.match(/^- ([^:]+):\s*(.+?)(?:\s+—|$)/) ?? [];
  const level = rawLevel.trim();
  if (level && !riskLevels.has(level)) {
    errors.push(`Risk Profile "${label}" uses non-canonical risk level "${level}"`);
  }
}

const autonomyRules = sectionBody("Autonomy Rules");
for (const label of ["Act without asking if", "Always ask if", "Escalation triggers"]) {
  if (autonomyRules && !new RegExp(`^- ${escapeRegExp(label)}: .+`, "mi").test(autonomyRules)) {
    errors.push(`Autonomy Rules must include "${label}"`);
  }
}

const allThresholdLines = text
  .split("\n")
  .filter((line) => /threshold/i.test(line) && /^- /.test(line));

for (const line of allThresholdLines) {
  if (/confidence threshold/i.test(line) && !/\d+(\.\d+)?\s*%/.test(line)) {
    errors.push(`Confidence threshold must be a numeric percentage: ${line}`);
  }
  if (/cost threshold/i.test(line) && !/(\$|USD|dollars?)?\s*\d+([,.]\d+)?\s*(k|K)?/.test(line)) {
    errors.push(`Cost threshold must include a numeric amount: ${line}`);
  }
}

const tradeoffs = sectionBody("Tradeoff Hierarchy")
  .split("\n")
  .filter((line) => /^\d+\.\s+/.test(line));
if (tradeoffs.length < 3) {
  errors.push("Tradeoff Hierarchy must include at least 3 ranked values");
}

const domainHeadings = sectionBody("Domain Rules")
  .split("\n")
  .filter((line) => /^### /.test(line));
if (domainHeadings.length < 2) {
  errors.push("Domain Rules must include at least two domain subsections");
}

for (const section of recommendedSections) {
  if (!hasSection(section)) {
    warnings.push(`Recommended section missing: ## ${section}`);
  }
}

if (errors.length || warnings.length) {
  console.error(`Lint results for ${file}`);
  for (const error of errors) {
    console.error(`ERROR: ${error}`);
  }
  for (const warning of warnings) {
    console.error(`WARN: ${warning}`);
  }
}

if (errors.length) {
  process.exit(1);
}

console.log(`Valid DECISION.md profile: ${file}`);
