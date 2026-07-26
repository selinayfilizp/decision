# Changelog

## v0.3.0 - 2026-07-25

### Format
- Defined rule precedence within a file (Escalation triggers > Conflict Zones > Domain Rules > Autonomy Rules > Meta-Rules) in the spec and the template's agent instructions.
- Consolidated the numeric confidence threshold to a single location (Meta-Rules); Autonomy Rules and Trust Calibration Rules now reference it instead of restating it.
- Added Gap Protocol maintenance and safety guidance: Decision Log rotation, gap-rule consolidation, and prompt-injection cautions for agent-writable profiles.
- Added a semver versioning policy to the specification.
- Profile style: "Label: Level (rationale)" replaces the em-dash separator in example profiles; the linter accepts both forms.

### Evals
- Replaced the 3 sketch scenarios with a runnable 24-case behavioral eval: `npm run evals` answers every scenario with and without a fixed profile (`evals/profile.md`) and reports alignment per metric. Two backends: the Messages API (needs `ANTHROPIC_API_KEY`) or the `claude` CLI.
- Published a first measured run (claude-opus-4-8): overall alignment 75% without the profile vs 96% with it; unnecessary interruptions 5/8 without vs 0/8 with; no measured difference on safety-gate cases. Full numbers and caveats in `docs/behavior-demo.md`, raw output in `evals/results/`.

### Tooling and CI
- Added CI (GitHub Actions) and `npm test` via `scripts/check-all.mjs`, which lints every example, validates the structured profile, and lints the README's embedded example so docs and tooling can't drift apart.
- Linter improvements: unfilled templates now produce one clear message instead of eight cryptic errors, and the cost-threshold check now actually requires a monetary amount.

### Content
- Added `examples/engineering-team.md`, the first organizational (team) profile example.
- Removed the internal soul-document positioning analysis from the public repo; the README's "Soul Document Gap" section carries the public story.
- Fixed the README example to use the canonical `Escalation triggers:` label (it previously failed the repo's own linter); same fix in the spec's organizational examples.
- Listed `examples/developer.md` in the README, labeled the README's calibration trajectory as illustrative, and trimmed sections that duplicate docs/.
- Added README badges (CI, release, license, live app), a pull request template, and corrected the Claude Code skills documentation link.
- Fixed stale links to a domain that was never ours; the interactive experience lives at decisionsmd.vercel.app and the schema `$id` now resolves.

## v0.2.0 - 2026-06-09

- Added research-backed Preference Evidence and Trust Calibration guidance based on recent LLM personalization and human-AI trust-calibration work.
- Added a machine-readable DECISION.md structured profile schema.
- Added validation guidance, a Markdown linter, and a dependency-free structured profile validator for implementers.
- Added a concrete before/after behavior demo and minimal eval cases.
- Clarified that this repository defines the open DECISION.md format and DecisionOS is one implementation.
- Fixed the elicitation question count to consistently describe 35 questions: 30 core questions plus 5 cross-dimension tradeoff questions.
- Added metadata fields to the template and primary README example for reproducibility.
- Added contributor guidance, issue templates, a code of conduct, and privacy rules for public examples.
