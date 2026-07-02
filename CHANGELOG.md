# Changelog

## Unreleased

- Added CI (GitHub Actions) and `npm test` via `scripts/check-all.mjs`, which lints every example, validates the structured profile, and lints the README's embedded example so docs and tooling can't drift apart.
- Fixed the README example to use the canonical `Escalation triggers:` label (it previously failed the repo's own linter); same fix in the spec's organizational examples.
- Defined rule precedence within a file (Escalation triggers > Conflict Zones > Domain Rules > Autonomy Rules > Meta-Rules) in the spec and the template's agent instructions.
- Consolidated the numeric confidence threshold to a single location (Meta-Rules); Autonomy Rules and Trust Calibration Rules now reference it instead of restating it.
- Added Gap Protocol maintenance and safety guidance: Decision Log rotation, gap-rule consolidation, and prompt-injection cautions for agent-writable profiles.
- Added a semver versioning policy to the specification.
- Linter improvements: unfilled templates now produce one clear message instead of eight cryptic errors, and the cost-threshold check now actually requires a monetary amount.
- Listed `examples/developer.md` in the README, labeled the README's calibration trajectory as illustrative, and trimmed sections that duplicate docs/.
- Added a pull request template and corrected the Claude Code skills documentation link.

## v0.2.0 - 2026-06-09

- Added research-backed Preference Evidence and Trust Calibration guidance based on recent LLM personalization and human-AI trust-calibration work.
- Added a machine-readable DECISION.md structured profile schema.
- Added validation guidance, a Markdown linter, and a dependency-free structured profile validator for implementers.
- Added a concrete before/after behavior demo and minimal eval cases.
- Clarified that this repository defines the open DECISION.md format and DecisionOS is one implementation.
- Fixed the elicitation question count to consistently describe 35 questions: 30 core questions plus 5 cross-dimension tradeoff questions.
- Added metadata fields to the template and primary README example for reproducibility.
- Added contributor guidance, issue templates, a code of conduct, and privacy rules for public examples.
