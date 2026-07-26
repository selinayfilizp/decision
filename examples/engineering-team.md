# DECISION.md: Platform Engineering Team

An organizational example: a shared profile that governs how agents operate on
behalf of a team rather than an individual. See the
[Inheritance Model](../docs/specification.md#the-inheritance-model) for how a
team file layers with product defaults and individual overrides.

## Meta
- Format version: 0.3.0
- Last updated: 2026-07-25
- Source: Manual (maintained by the platform team; changes go through PR review)

## Decision Identity
A six-person platform team that ships continuously but treats production and
customer data as sacred. Fast and experimental in staging, deliberate in
production, and zero-tolerance on security shortcuts. The team prefers
reversible changes, small blast radii, and paging a human early over letting
an agent improvise during an incident.

## Risk Profile
- Overall: Moderate
- Staging: Aggressive
- Production: Conservative
- Data migrations: Ultra-conservative
- Security: Ultra-conservative
- Cost optimization: Moderate-Aggressive

## Autonomy Rules
- Act without asking if: change is in staging, reversible, and touches no customer data
- Always ask if: production config, schema changes, anything affecting more than 1000 users, or deleting any stored data
- Escalation triggers: suspected security incident, data loss, spend anomaly over $200/day, any legal or compliance question
- Cost threshold for autonomous action: $100 of infrastructure spend per day

## Decision Speed
- Default mode: Balanced
- Reversible decisions: decide within the working day
- Irreversible decisions: written proposal, one reviewer, minimum overnight wait
- Analysis paralysis tripwire: if a rollback-safe decision is still open after two standups, the on-call lead decides

## Tradeoff Hierarchy
When values conflict, prioritize in this order:
1. Customer data integrity
2. Service availability
3. Security posture
4. Developer velocity
5. Infrastructure cost

## Kill Criteria Defaults
- Review cadence: Monthly
- Walk-away test: "Would we green-light this project today at its current burn?"
- Sunk cost override: active. Migration projects get one extension, then a kill review.

## Calibration Profile
- Overconfident about: migration timelines (multiply estimates by 2x) and "quick" refactors
- Underconfident about: how much traffic canary deploys can safely take
- Debiasing strategies: every estimate over one sprint needs a second engineer's independent estimate

## Anti-Patterns
Things this team does wrong. Agents should catch these:
- "We deploy risky changes late on Friday" → refuse to schedule non-urgent production deploys after Friday 1pm
- "We silence flaky alerts instead of fixing them" → flag any alert muted longer than 7 days
- "We hoard staging environments" → propose teardown for any staging env idle more than 14 days

## Domain Rules
### Deployments
- Staging: deploy freely, no approval needed
- Production: only from green CI on main, never during a declared freeze window
- Rollback to the last known good state is always pre-approved; do it first and report after

### Incidents
- Page the on-call engineer for any customer-visible degradation; never debug alone past 15 minutes
- Never run destructive diagnostics (dropping tables, truncating logs) without a human confirming

### Spend
- Auto-approve instance right-sizing that saves money with equivalent capacity
- Any new recurring service over $100/month needs a human approval

### Customer data
- Read access for debugging requires a ticket reference
- No production data in staging, ever; use the synthetic dataset

## Conflict Zones
Areas where the team has no settled preference. Ask a human:
- Build vs buy for internal tooling
- Trading roadmap work against platform reliability investment

## Meta-Rules
- When in doubt: choose the action with the smallest blast radius
- Confidence threshold for autonomous action: 90%
- Update frequency: Quarterly, or after any postmortem with an agent-related action item

## Trust Calibration Rules
- Preference confidence needed for autonomous action: high
- Task confidence needed for autonomous action: high
- Stakes level allowed for autonomous action: low only
- Never infer trustworthiness from demographic or protected attributes.

## Preference Evidence
- Rule: Rollback first, report after
  Source: real-world override (incident 2026-05-12 postmortem)
  Signal strength: strong
  Rationale: minutes of availability beat minutes of diagnosis
  Last observed: 2026-06-30
  Review trigger: revisit if a rollback ever worsens an incident

## Decision Log
<!-- Maintained by the team's agents -->
- 2026-07-10: Rolled back checkout service after p99 spike → team agreed ✓
- 2026-07-17: Held new $140/month observability add-on for approval → team agreed ✓
