#!/usr/bin/env node
import fs from "node:fs";

const file = process.argv[2];

if (!file) {
  console.error("Usage: node scripts/validate-structured-profile.mjs <profile.json>");
  process.exit(2);
}

const riskLevels = new Set([
  "Ultra-conservative",
  "Conservative",
  "Moderate",
  "Moderate-Aggressive",
  "Aggressive",
  "Very Aggressive"
]);

const profile = JSON.parse(fs.readFileSync(file, "utf8"));
const errors = [];

function requirePath(path) {
  const value = path.split(".").reduce((current, part) => current?.[part], profile);
  if (value === undefined || value === null || value === "") {
    errors.push(`Missing required field: ${path}`);
  }
  return value;
}

function requireArray(path, minItems = 1) {
  const value = requirePath(path);
  if (!Array.isArray(value)) {
    errors.push(`${path} must be an array`);
    return;
  }
  if (value.length < minItems) {
    errors.push(`${path} must contain at least ${minItems} item(s)`);
  }
}

requirePath("meta.formatVersion");
requirePath("meta.lastUpdated");
requirePath("decisionIdentity");
requirePath("riskProfile.overall");
requirePath("decisionSpeed.defaultMode");
requirePath("killCriteriaDefaults.reviewCadence");
requirePath("killCriteriaDefaults.walkAwayTest");
requirePath("killCriteriaDefaults.sunkCostOverride");
requirePath("metaRules.whenInDoubt");
requirePath("metaRules.updateFrequency");

requireArray("autonomyRules.actWithoutAskingIf");
requireArray("autonomyRules.alwaysAskIf");
requireArray("autonomyRules.escalationTriggers");
requireArray("tradeoffHierarchy", 3);
requireArray("calibrationProfile.debiasingStrategies");
requireArray("antiPatterns");

if (!riskLevels.has(profile.riskProfile?.overall)) {
  errors.push(`riskProfile.overall must be one of: ${Array.from(riskLevels).join(", ")}`);
}

for (const [domain, level] of Object.entries(profile.riskProfile ?? {})) {
  if (!riskLevels.has(level)) {
    errors.push(`riskProfile.${domain} has invalid risk level: ${level}`);
  }
}

for (const path of ["autonomyRules.confidenceThreshold", "metaRules.confidenceThreshold"]) {
  const value = path.split(".").reduce((current, part) => current?.[part], profile);
  if (value !== undefined && (typeof value !== "number" || value < 0 || value > 1)) {
    errors.push(`${path} must be a number between 0 and 1`);
  }
}

if (!profile.domainRules || Object.keys(profile.domainRules).length < 2) {
  errors.push("domainRules must contain at least two domains");
}

if (errors.length) {
  console.error(`Invalid structured profile: ${file}`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Valid structured profile: ${file}`);
