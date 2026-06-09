# Validation Guide

DECISION.md is intentionally human-readable markdown. Implementations that need deterministic validation should map the markdown sections into the structured profile defined by [schemas/decision.schema.json](../schemas/decision.schema.json).

## Validation Checklist

A profile is ready for agent use when it has:

- `meta.formatVersion`
- `meta.lastUpdated`
- `decisionIdentity`
- At least one `riskProfile` entry, including `overall`
- `autonomyRules.actWithoutAskingIf`
- `autonomyRules.alwaysAskIf`
- `autonomyRules.escalationTriggers`
- `autonomyRules.confidenceThreshold`
- `decisionSpeed.defaultMode`
- At least three `tradeoffHierarchy` entries
- `killCriteriaDefaults.reviewCadence`
- `calibrationProfile.debiasingStrategies`
- At least one `antiPatterns` entry with both a pattern and countermeasure
- At least two `domainRules`
- `metaRules.whenInDoubt`
- `metaRules.updateFrequency`

## Markdown to Structured Fields

| Markdown section | Structured field |
|---|---|
| `## Meta` | `meta` |
| `## Decision Identity` | `decisionIdentity` |
| `## Risk Profile` | `riskProfile` |
| `## Autonomy Rules` | `autonomyRules` |
| `## Decision Speed` | `decisionSpeed` |
| `## Tradeoff Hierarchy` | `tradeoffHierarchy` |
| `## Kill Criteria Defaults` | `killCriteriaDefaults` |
| `## Calibration Profile` | `calibrationProfile` |
| `## Anti-Patterns` | `antiPatterns` |
| `## Domain Rules` | `domainRules` |
| `## Conflict Zones` | `conflictZones` |
| `## Meta-Rules` | `metaRules` |
| `## Decision Log` | `decisionLog` |

## Recommended Failure Modes

- Missing required field: block autonomous use and ask the user to complete the section.
- Invalid risk level: keep the text as a note, but do not treat it as a calibrated risk level.
- Missing confidence threshold: default to asking before autonomous action.
- Empty conflict zones: valid, but agents should rely more heavily on escalation triggers.
- Missing decision log: valid for a new profile, but implementations should create one before the first autonomous action.

## Privacy Review

Before publishing a DECISION.md example, remove or anonymize:

- Real names, workplaces, customers, investors, or family members
- Financial balances, compensation, portfolio details, and exact account data
- Medical conditions or care decisions
- Legal matters, contracts, disputes, and regulated decisions
- Internal URLs, API keys, credentials, or private project names

Public examples should preserve the decision logic while changing identifying details.

## Validate the Example Profile

This repository includes a dependency-free validator for structured profiles:

```bash
node scripts/validate-structured-profile.mjs examples/structured-profile.json
```

The script checks the required fields, risk levels, confidence thresholds, and core list lengths from the schema. It is intentionally lightweight so contributors can run it without installing dependencies.
