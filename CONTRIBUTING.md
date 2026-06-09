# Contributing

Thanks for helping improve DECISION.md as an open standard. Contributions should make the format more useful, portable, measurable, or easier to adopt.

## Good Contributions

- Anonymized example DECISION.md files
- Domain-specific decision modules
- Integration guides for agent frameworks and AI tools
- Validation improvements and schema updates
- Research citations that strengthen or correct the methodology
- Translations and culturally specific decision-making notes

## Example Privacy Rules

Do not contribute real personal or company-sensitive decision profiles unless you deliberately want them public. Before opening a PR, remove:

- Real names, employers, customers, investors, and family details
- Exact financial balances, compensation, holdings, or account data
- Medical, legal, or regulated decision details
- API keys, internal URLs, private repository names, or credentials

Keep the decision logic, but anonymize the identifying context.

## Format Expectations

- Follow [docs/specification.md](docs/specification.md) for required sections.
- Use [DECISION.md.template](DECISION.md.template) for new examples.
- Keep examples concrete: thresholds beat adjectives.
- If you add Markdown examples, lint them with `node scripts/lint-decision-md.mjs <file>`.
- If you add structured data, validate it with `node scripts/validate-structured-profile.mjs <file>` and keep it aligned with [schemas/decision.schema.json](schemas/decision.schema.json).
- If you change the elicitation question count, update README, specification, research docs, and system prompts together.

## Pull Request Checklist

- [ ] The README still matches the repository structure.
- [ ] The question count is consistent everywhere.
- [ ] New examples are anonymized.
- [ ] Markdown examples pass `node scripts/lint-decision-md.mjs <file>`.
- [ ] Structured JSON examples pass `node scripts/validate-structured-profile.mjs <file>`.
- [ ] New claims are sourced or clearly framed as design rationale.
- [ ] Structured JSON examples parse successfully.
