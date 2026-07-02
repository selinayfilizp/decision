#!/usr/bin/env node
// Runs every repo check: lints example profiles, validates the structured
// profile, and lints the example embedded in the README so docs and tooling
// can't drift apart. Used by `npm test` and CI.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let failures = 0;

function run(label, script, target) {
  try {
    execFileSync(process.execPath, [path.join(root, "scripts", script), target], {
      stdio: "inherit"
    });
    console.log(`PASS: ${label}`);
  } catch {
    failures += 1;
    console.error(`FAIL: ${label}`);
  }
}

for (const file of fs.readdirSync(path.join(root, "examples")).sort()) {
  const target = path.join(root, "examples", file);
  if (file.endsWith(".md")) {
    run(`lint examples/${file}`, "lint-decision-md.mjs", target);
  } else if (file.endsWith(".json")) {
    run(`validate examples/${file}`, "validate-structured-profile.mjs", target);
  }
}

const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const embedded = readme.match(/^```markdown\n([\s\S]*?)^```$/m);
if (!embedded) {
  failures += 1;
  console.error("FAIL: no ```markdown example found in README.md");
} else {
  const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "decision-")), "readme-example.md");
  fs.writeFileSync(tmp, embedded[1]);
  run("lint README.md embedded example", "lint-decision-md.mjs", tmp);
}

if (failures) {
  console.error(`\n${failures} check(s) failed`);
  process.exit(1);
}
console.log("\nAll checks passed");
