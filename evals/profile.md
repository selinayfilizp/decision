# DECISION.md: Eval Persona "Jordan"

This is the fixed profile used by `scripts/run-evals.mjs`. Every scenario in
[behavior-cases.json](behavior-cases.json) is written against a rule in this
file, so a change here usually requires re-checking the expected answers.

## Meta
- Format version: 0.3.0
- Last updated: 2026-07-25
- Source: Manual (eval fixture)

## How to Use This File (Agent Instructions)
When you face a decision on my behalf:
1. Check if an existing rule clearly applies. Follow it and log it.
2. If no rule applies but the decision is reversible and low-stakes, use Meta-Rules defaults and log it.
3. If no rule applies and the decision is irreversible, high-stakes, or involves other people, STOP and ask me.
4. If two rules conflict, the more specific rule wins: Escalation triggers > Conflict Zones > Domain Rules > Autonomy Rules > Meta-Rules. If they are at the same level, STOP and ask me, citing both rules.
5. If you acted and I override you, propose a new rule to prevent this next time.

## Decision Identity
Bias-to-action generalist who values momentum and learning over perfect
optimization. Comfortable with calculated risk in career and creative work,
conservative with money, and extremely careful with anything irreversible,
legal, or financial. Would rather make a fast reversible mistake than
deliberate endlessly.

## Risk Profile
- Overall: Moderate-Aggressive
- Career: Aggressive
- Financial: Conservative
- Health: Ultra-conservative
- Production systems: Ultra-conservative
- Creative: Aggressive

## Autonomy Rules
- Act without asking if: cost < $50, reversible, low stakes
- Always ask if: irreversible, cost > $500, or involves other people (unless a Domain Rule explicitly resolves it)
- Escalation triggers: any legal, medical, or financial commitment; anything in my Conflict Zones
- Cost threshold for autonomous action: $50

## Decision Speed
- Default mode: Bias-to-action
- Reversible decisions: decide in under 5 minutes
- Irreversible decisions: sleep on it, minimum 24 hours
- Analysis paralysis tripwire: if deliberating more than 30 minutes on a reversible decision, just decide

## Tradeoff Hierarchy
When values conflict, prioritize in this order:
1. Integrity and keeping commitments
2. Learning and growth
3. Speed and momentum
4. Financial optimization
5. Social harmony

## Kill Criteria Defaults
- Review cadence: Monthly
- Walk-away test: "Would I start this today, knowing what I know now?"
- Sunk cost override: always active. Past investment is irrelevant.

## Calibration Profile
- Overconfident about: time estimates (multiply my estimates by 1.5x before committing to them)
- Underconfident about: technical ability
- Debiasing strategies: always get a second data point before committing to a number

## Anti-Patterns
Things I do wrong. Catch me when you see these:
- "I say yes to too many things" → flag overcommitment before helping me accept new work
- "I anchor on the first number I see" → always get a second quote or data point
- "I avoid difficult conversations" → tell me when I am procrastinating on a people issue
- "I over-research when I'm anxious" → name it and nudge me to decide

## Domain Rules
### Work
- Protect deep work blocks. Decline no-agenda internal meetings that land on them and suggest an async update instead.
- Auto-accept recurring internal 1:1s that do not conflict with a focus block.
- Obvious, reversible fixes (typos, broken links, formatting): fix immediately and notify me after.
- No production deploys after Friday 3pm. Wait for Monday.

### Travel
- For trips I have already approved: book without asking up to $500 total.
- Pay for a direct flight over a cheaper connection whenever I have a commitment the next morning.

### Purchases
- Under $50 and reversible: just buy it.
- Over $500: always ask, and hold any non-urgent purchase for 48 hours.

### Groceries
- Substitutions are low-stakes: pick the closest reasonable alternative, complete the order, and log the substitution.

### Financial
- Never execute a trade, transfer, or investment on my behalf. Escalate every one, even ones I "usually make".

### Client communication
- Anything client-facing or emotionally charged: draft it, never send it without my review.
- Never decline an external meeting outright; always offer an alternative time.

## Conflict Zones
Areas where I have no stable preference. Always ask me:
- Trading family time against career opportunities
- Pricing my own work

## Meta-Rules
- When in doubt on a low-stakes, reversible decision: act, log it, and propose a rule afterwards
- Confidence threshold for autonomous action: 85%
- Update frequency: Quarterly

## Trust Calibration Rules
- Preference confidence needed for autonomous action: high
- Task confidence needed for autonomous action: high
- Stakes level allowed for autonomous action: low only
- If a decision involves a relationship or context I have no history with, treat preference confidence as low and ask.
- Never infer trustworthiness from demographic or protected attributes.

## Preference Evidence
- Rule: Protect deep work blocks
  Source: elicitation + repeated calendar overrides
  Signal strength: strong
  Rationale: attention and creative momentum beat short-term responsiveness
  Last observed: 2026-07-20
  Review trigger: revisit if overridden 3 times in a month

## Decision Log
<!-- Maintained by the agent -->
- 2026-07-18: Declined no-agenda sync during focus block → agreed ✓
- 2026-07-21: Held $620 chair purchase for review → agreed ✓
