# DECISION.md Format Specification

Version: 0.2.0

## Overview
DECISION.md is a portable, human-readable markdown file that codifies a person or organization's decision-making philosophy for use by AI agents. It is designed as a living document — seeded through structured elicitation and refined continuously through real-world decision gaps.

This repository treats the Markdown file as the canonical human-readable artifact. Tools that need deterministic validation should parse the same information into the structured profile described in [schemas/decision.schema.json](../schemas/decision.schema.json).

## Measuring Alignment

The core success metric for a DECISION.md is **alignment rate**: the percentage of autonomous agent decisions that the user would have made themselves, measured by whether the user agrees or overrides the agent's choice.

- **Agreement**: Agent made a decision → user confirms it was correct (or doesn't override)
- **Override**: Agent made a decision → user reverses or corrects it
- **Unnecessary interruption**: Agent asked when it could have decided autonomously
- **Under-asking**: Agent acted autonomously when it should have asked

A mature DECISION.md should increase agreements and reduce both overrides and unnecessary interruptions. The Decision Log section tracks these events over time.

## Required Sections

### Meta
Metadata for reproducibility and update hygiene. Generated files should include:
- Format version
- Last updated date
- Source or generator
- Model name and generation settings, if an LLM was used
- Seed question set version, if structured elicitation was used

### Decision Identity
A single paragraph summarizing the person's decision-making style. Should capture their overall orientation: bias-to-action vs. deliberate, risk-seeking vs. risk-averse, optimizer vs. satisficer.

### Risk Profile
Domain-specific risk tolerance levels. Minimum: an overall rating. Recommended: career, financial, health, creative, and relationships.
Valid levels: Ultra-conservative, Conservative, Moderate, Moderate-Aggressive, Aggressive, Very Aggressive.

### Autonomy Rules
Three categories of agent behavior:
- **Act without asking if**: Conditions under which the agent should proceed autonomously
- **Always ask if**: Conditions requiring human approval
- **Escalation triggers**: Scenarios that require immediate human attention

### Decision Speed
- Default mode: Deliberate, Balanced, or Bias-to-action
- Reversible decision speed
- Irreversible decision speed
- Analysis paralysis tripwire

### Tradeoff Hierarchy
Ordered list of values, ranked by priority when they conflict. Minimum 3, recommended 5.

### Kill Criteria Defaults
- Review cadence
- Walk-away test (a question to ask yourself)
- Sunk cost override status

### Calibration Profile
- Known overconfidence areas
- Known underconfidence areas
- Debiasing strategies

### Anti-Patterns
Documented failure modes with specific countermeasures. Format: "I tend to [behavior]" → [countermeasure for agent].

### Domain Rules
Domain-specific decision frameworks. Minimum: work and personal. Recommended: also financial, health, and social.

### Meta-Rules
Fallback heuristics when no specific rule applies. Must include:
- Default action under uncertainty
- Confidence threshold for autonomous action (0-100%)
- Update frequency

---

## Recommended Sections

### Conflict Zones

Areas where the user has no stable preference or where multiple values reliably conflict. Agents should ask before acting in these zones unless a more specific rule resolves the situation.

### Decision Log

A running log of decisions the agent made using this profile and whether the user agreed. This section grows over time and informs calibration updates.

```markdown
## Decision Log
<!-- Automatically appended by the agent -->
- 2026-03-21: Booked $180 flight with layover → User agreed ✓
- 2026-03-22: Sent client email without review → User overrode ✗ (added rule: always draft sensitive emails)
- 2026-03-25: Skipped vendor because 3/5 reviews were negative → User agreed ✓
```

---

## The Decision Gap Protocol

### The Problem It Solves

No DECISION.md can anticipate every decision an agent will face. A profile built from 35 elicitation questions covers the major dimensions and cross-dimension tradeoffs, but real life generates edge cases constantly: the cucumbers aren't fresh — buy them anyway? A meeting got canceled — use the free hour for deep work or clear the email backlog? A vendor is 10% over budget but significantly better — approve the overage?

When an agent hits a decision that isn't covered by the existing DECISION.md, it currently has two bad options: guess (and risk getting it wrong) or interrupt the user with no structure (and waste their time). The Decision Gap Protocol gives it a third, better option.

### How It Works

When the agent encounters a tradeoff with no applicable rule in the DECISION.md:

**Step 1 — Detect the gap.** The agent recognizes that none of its existing rules clearly apply to this decision. It identifies which dimension(s) are relevant and what the core tradeoff is.

**Step 2 — Flag it with structure.** Instead of a vague "what should I do?", the agent presents:
- The specific tradeoff it's facing
- Which DECISION.md dimension it falls under
- Why the existing rules don't cover it
- Two or more concrete options

**Step 3 — Capture the decision as a rule.** After the user decides, the agent doesn't just act — it proposes a generalizable rule: "Based on your choice, should I add this rule to your DECISION.md?"

**Step 4 — Suggest the update.** The agent drafts a specific addition to the appropriate section of the DECISION.md, ready for the user to approve or edit.

### Example

```
Agent: I found organic cucumbers at $4.50 but they're not very fresh.
       The regular cucumbers are fresh at $2.80.

       DECISION GAP DETECTED
       Dimension: cost + domain (groceries)
       Existing rules: cost < $50 → act autonomously
       Gap: No rule for quality vs. cost tradeoffs in perishable goods

       Options:
       [A] Buy the organic (your profile says you value quality for health)
       [B] Buy the regular (fresh > organic based on your "health: conservative" rule)
       [C] Skip cucumbers entirely (you could substitute)

User: B — freshness matters more than organic for produce.

Agent: Got it. Suggested DECISION.md update:

       ## Domain Rules
       ### Groceries
       - Fresh > organic for perishable produce
       - For non-perishables, prefer organic if < 2x price difference

       Add this to your DECISION.md? [yes / edit / skip]
```

### Why This Matters

This protocol transforms DECISION.md from a static document into a feedback loop:

1. **Initial elicitation** seeds the profile with 10 dimensions from 35 structured questions
2. **Real-world usage** surfaces the gaps — decisions the initial elicitation couldn't anticipate
3. **Gap detection** turns each gap into a structured learning opportunity
4. **Rule capture** ensures the same type of decision is never a gap again
5. **Calibration** tracks agreement rates — if the agent keeps getting overridden, the profile needs refinement

Over time, the DECISION.md converges on a comprehensive model of how you actually decide — not just how you think you decide (stated preferences), but how you respond under real-world constraints (revealed preferences). The gap protocol is what makes this a living system rather than a one-time quiz.

### Implementation Guidance for Agent Developers

Any agent framework can implement the Decision Gap Protocol. The core logic is:

```
Before executing a decision:
1. Parse the user's DECISION.md
2. Identify the relevant dimension(s) for this decision
3. Check if an applicable rule exists
4. If yes → apply the rule, log the decision
5. If no → trigger the gap protocol:
   a. Present the tradeoff with structure
   b. Capture the user's choice
   c. Propose a generalizable rule
   d. On approval, append to DECISION.md
```

The gap detection can be as simple as a prompt to the LLM:

```
Given this DECISION.md and this decision I need to make,
do any existing rules clearly apply? If not, what dimension
does this fall under and what is the core tradeoff?
```

### Adding Gaps to the DECISION.md

When a decision gap is resolved, the new rule should be appended to the most relevant section. If no section fits, it goes under Domain Rules with a new sub-heading. The format should match the existing style:

```markdown
- **RULE:** [specific, threshold-based rule] — added via gap protocol [date]
```

Rules added via the gap protocol should be tagged so the user can review them during their regular update cadence (quarterly or after major changes).

---

## Signals and Confidence

### Response Time as a Heuristic Signal
During elicitation, response time is used as a practical heuristic for decision difficulty — not as a formal cognitive measurement. It correlates with preference strength in practice, though individual variation (reading speed, device, distraction) means it should be weighted as one signal among many, not treated as ground truth.

Approximate thresholds:
- **< 3 seconds**: Likely a strong, instinctive preference → high-confidence rule
- **3-10 seconds**: Considered response → moderate-confidence rule
- **> 10 seconds**: Possible genuine deliberation or distraction → flag as potential conflict zone, consider escalation trigger
- **"I'm torn"**: Explicit conflict → must be an escalation trigger, no default rule

This approach is inspired by the Drift-Diffusion Model (Ratcliff, 1978), which demonstrates that response time and choice are jointly informative about decision difficulty. We apply this insight as a design heuristic rather than claiming formal DDM parameter recovery.

### Coverage States
Each of the 10 dimensions can be in one of these states:
- **Strong**: Consistent responses across multiple scenarios (same direction 75%+)
- **Mixed**: Responses varied by context — agent should check context before applying
- **Torn**: User explicitly flagged conflict — always escalate to human
- **Partial**: Only free-text data — custom rules exist but may not cover all cases
- **Skipped**: User declined to answer — no data, use meta-rules as fallback
- **Unexplored**: No questions answered for this dimension yet

### Context Sensitivity Detection
When a user answers multiple questions in the same dimension differently, this is a signal of context sensitivity, not inconsistency. The DECISION.md should capture this:

```markdown
## Cost Sensitivity
- **DEFAULT RULE:** Optimize for cost when difference > $100
- **CONTEXT SHIFT:** Personal/emotional contexts override cost optimization
  (detected: chose cheap flight for work, expensive flight for date)
- **ESCALATE:** When cost and quality conflict for health-related decisions
```

---

## Known Limitations and Mitigations

### Social Desirability Bias
People may answer elicitation questions based on how they *want* to be seen rather than how they actually decide. Someone might choose "defer to advisors" because it sounds humble, even though they consistently override advisors in practice.

Mitigations built into the design:
- **Pairwise tradeoffs** (not self-report scales) force revealed preferences rather than stated ones
- **3-layer questioning** tests whether answers hold across contexts — inconsistency signals the real preference
- **"My Own Take" free-text** lets users reject both options without social pressure to pick one
- **Response time** helps flag fast "socially correct" answers vs. slower genuine deliberation
- **The Decision Gap Protocol** captures *actual* decisions in real situations, which gradually corrects any self-report bias in the initial elicitation

### Algorithm Aversion Risk
Research shows that when an automated system makes a mistake, people may trust it *less* than if there was no system at all — even if the system is right 90% of the time (Burton et al., 2020). A DECISION.md that leads to a clearly wrong agent decision could reduce the user's willingness to use it.

Mitigation: the specification requires escalation triggers and "always ask" rules specifically to ensure the agent fails safely in high-stakes domains. The Decision Log tracks overrides so users can see the accuracy rate and calibrate their trust appropriately.

### Reproducibility
If the elicitation uses an LLM for adaptive question generation, the instrument can change as the model updates. For consistency:
- Seed questions are fixed and versioned (currently v0.2.0, 35 questions)
- System prompts for adaptive questioning should be versioned and logged
- The model name and version used should be recorded in the DECISION.md metadata
- Temperature and generation settings should be documented

```markdown
## Meta
- Generated with: DecisionOS v0.2.0
- Model: claude-sonnet-4-20250514 (adaptive questions only)
- Seed questions: v0.2.0 (35 questions, 10 dimensions)
- Last updated: 2026-03-21
```

### Machine-Readable Schema

The JSON schema in [schemas/decision.schema.json](../schemas/decision.schema.json) defines a structured representation of the same profile. It is intended for import/export pipelines, validators, and agent frameworks that want stable field names instead of parsing Markdown headings directly.

The schema does not replace the Markdown standard. A valid implementation may store only Markdown, only structured JSON, or both, as long as the fields map cleanly to the sections in this specification.

---

## Beyond Personal: Organizational DECISION.md

While DECISION.md was designed for individuals, the format applies equally to organizations, teams, and products.

### Team DECISION.md
A team can share a DECISION.md that defines how their agents operate in shared contexts: engineering team risk tolerance for deployments, customer support escalation thresholds, marketing spend approval limits.

```markdown
# DECISION.md — Engineering Team

## Autonomy Rules
- Act without asking if: rollback to last known good state
- Always ask if: deploying to production during freeze window
- Escalation: Any change affecting >1000 users

## Risk Profile
- Staging: Aggressive — try things, break things
- Production: Conservative — zero tolerance for data loss
- Security: Ultra-conservative — escalate everything
```

### Product DECISION.md
A B2B application can ship with a default DECISION.md that defines how its AI features make decisions on behalf of users — and allow customers to customize it.

```markdown
# DECISION.md — [Product Name] Default

## Autonomy Rules
- Act without asking if: formatting, autocorrect, auto-save
- Always ask if: sending messages, deleting data, making purchases
- Escalation: Any action involving payments or personal data

## Domain Rules
### Customer Support Agent
- Offer refund automatically if order < $50 and complaint is valid
- Escalate to human if customer mentions legal action
- Never promise specific timelines without checking availability
```

This creates a new layer: the product defines sensible defaults, but each customer can override with their own organizational DECISION.md. The agent inherits rules in order: product defaults → organization overrides → individual user overrides.

### The Inheritance Model

```
Layer 1: Product DECISION.md (shipped by the vendor)
  → Default behavior for all users of this product
  → Controlled by: Product team

Layer 2: Organization DECISION.md (configured by the company)
  → Company-specific overrides: compliance rules, risk tolerance, approval thresholds
  → Controlled by: IT/Operations team

Layer 3: Individual DECISION.md (created by the user)
  → Personal preferences that override org defaults where permitted
  → Controlled by: Individual user
```

When rules conflict, the higher layer wins — unless the lower layer explicitly allows overrides. This mirrors how permission systems work: the org can set a floor ("never auto-approve spend > $500") while individuals customize within that boundary.

---

## Implementation as a Claude Code Skill

DECISION.md maps directly to the [Claude Code Skills](https://docs.claude.com/en/skills) format. Instead of a passive file that sits in a folder, it becomes an active skill that Claude loads automatically whenever it faces a judgment call.

### Basic Setup

Create the skill directory:

```bash
mkdir -p ~/.claude/skills/decision
```

Your DECISION.md becomes the `SKILL.md` with frontmatter added at the top:

```yaml
---
name: decision
description: >
  My personal decision-making framework. Load automatically when facing
  tradeoffs, making purchases, scheduling, delegating, managing tasks,
  or any situation involving judgment under uncertainty. Also load when
  the user asks about preferences, priorities, or "how should I handle this."
user-invocable: false
---

# DECISION.md — [Your Name]

## How to Use This File (Agent Instructions)
When you face a decision on my behalf:
1. Check if an existing rule clearly applies → follow it, log it
2. If no rule applies but reversible + low-stakes → use Meta-Rules defaults
3. If no rule applies and irreversible/high-stakes → STOP and ask me
4. If two rules conflict → STOP and ask me, cite both rules
5. If you acted and I override → propose a new rule for this file

...rest of your DECISION.md content...
```

Key frontmatter choices:

- **`user-invocable: false`** — You never type `/decision`. Claude loads it automatically when it detects a decision situation based on the description. This is background knowledge, not an action.
- **`description`** — This is how Claude decides when to load the skill. Be specific about the situations where your framework applies. The description is always in Claude's context; the full content only loads when triggered.

### With Supporting Files

As your DECISION.md evolves, companion files keep the main skill focused:

```
~/.claude/skills/decision/
├── SKILL.md              ← Main framework with frontmatter (required)
├── decision-log.md       ← Running log of decisions + outcomes
├── calibration.md        ← Calibration history and accuracy tracking
└── gap-rules.md          ← Rules added via the Decision Gap Protocol
```

Reference them from your SKILL.md so Claude knows when to load each one:

```markdown
## Supporting Files
- For my decision history and accuracy stats, see [decision-log.md](decision-log.md)
- For rules added from real-world gaps, see [gap-rules.md](gap-rules.md)
- For my calibration profile over time, see [calibration.md](calibration.md)
```

Claude loads the main SKILL.md when triggered and pulls in supporting files only when they're relevant — keeping context efficient.

### With Dynamic Context Injection

Claude Code skills support `` !`command` `` syntax that runs shell commands before the content reaches Claude. Use this to inject live data:

```markdown
## Recent Decisions (last 10)
!`tail -10 ~/.claude/skills/decision/decision-log.md`

## Unresolved Decision Gaps
!`grep "PENDING" ~/.claude/skills/decision/gap-rules.md`

## Current Accuracy Rate
!`grep "accuracy" ~/.claude/skills/decision/calibration.md | tail -1`
```

Every time the skill loads, Claude sees your latest decision log, any pending gaps, and your current accuracy rate — not stale data from when you first wrote the file.

### Where to Place It

Claude Code skills follow a priority hierarchy. DECISION.md maps naturally to each level:

| Scope | Path | Use case |
|-------|------|----------|
| Personal | `~/.claude/skills/decision/SKILL.md` | Your decision framework, applied to all projects |
| Project | `.claude/skills/decision/SKILL.md` | Project-specific decision rules (e.g., deployment risk tolerance) |
| Enterprise | Managed settings | Organization-wide decision policies |

Personal skills apply everywhere. Project skills add or override rules for specific contexts. Enterprise skills set floors that individual users can't override — like "never auto-approve spend > $500" or "always escalate security decisions."

This maps directly to the [Inheritance Model](#the-inheritance-model): Enterprise > Personal > Project mirrors Product > Organization > Individual.

### Mapping DECISION.md Concepts to Skill Features

| DECISION.md Concept | Claude Code Skill Feature |
|---------------------|--------------------------|
| Autonomy Rules ("act without asking") | Skill triggers automatically via description matching |
| Autonomy Rules ("always ask") | The skill content instructs Claude to STOP and ask |
| Escalation Triggers | The skill content defines when to escalate |
| Domain Rules | Supporting files per domain, loaded when relevant |
| Decision Log | Supporting file updated after each decision |
| Decision Gap Protocol | The skill's agent instructions tell Claude how to detect and handle gaps |
| Anti-Patterns | Loaded as background context Claude checks against |
| Calibration Profile | Supporting file with accuracy tracking |
| Kill Criteria / Review Cadence | Could trigger a periodic review via Claude Code's `/loop` command |

### Generating Skill-Ready Output

The DecisionOS web app generates a standard DECISION.md file. To convert it to a Claude Code skill:

1. Create `~/.claude/skills/decision/`
2. Copy your generated DECISION.md into the directory as `SKILL.md`
3. Add the frontmatter block at the top (the three lines between `---` markers)
4. Optionally create empty companion files: `decision-log.md`, `gap-rules.md`, `calibration.md`

Or use this one-liner after downloading your DECISION.md:

```bash
mkdir -p ~/.claude/skills/decision && \
echo '---
name: decision
description: "My decision-making framework. Load when facing tradeoffs, purchases, scheduling, delegation, or judgment under uncertainty."
user-invocable: false
---
' | cat - ~/Downloads/DECISION.md > ~/.claude/skills/decision/SKILL.md
```

### Example: Decision Gap Protocol as a Live Skill

When Claude encounters a decision not covered by your rules, the Agent Instructions section tells it to follow the Gap Protocol. In practice, this looks like:

```
Claude: I need to decide whether to accept a meeting invite during your
        focus block. Your DECISION.md says:

        DECISION GAP DETECTED
        Dimension: autonomy + domain
        Existing rules:
          - "Protect deep work blocks" (Domain Rules → Work)
          - "Accept recurring 1-on-1s" (not in your rules — inferred)
        Gap: No rule for meetings with your manager during focus time

        Options:
        [A] Accept — manager meetings may be higher priority than focus blocks
        [B] Decline with suggested alternative time
        [C] Accept but ask to reschedule to end of focus block

You:    B — always suggest an alternative, never just decline

Claude: Got it. Suggested addition to your DECISION.md:

        ## Domain Rules → Work → Calendar
        - Manager 1-on-1s during focus blocks: suggest alternative time, don't decline outright
        - Never auto-decline without offering a reschedule option

        Add this to your decision skill? [yes / edit / skip]
```

When you confirm, Claude appends the new rule to `gap-rules.md` and logs the decision in `decision-log.md`. Over time, your skill becomes more comprehensive without you manually editing the file.

### Combining with Other Skills

DECISION.md works alongside other Claude Code skills without conflict. When Claude loads multiple skills, DECISION.md provides the judgment layer while other skills provide capabilities:

```
~/.claude/skills/
├── decision/SKILL.md       ← HOW to choose (judgment)
├── deploy/SKILL.md         ← WHAT to do (deploy procedure)
├── code-review/SKILL.md    ← WHAT to check (review checklist)
└── api-patterns/SKILL.md   ← HOW to build (coding conventions)
```

When Claude runs a deploy skill, it also has your DECISION.md loaded — so it knows whether to proceed with a risky deployment or ask you first. The judgment layer enriches every other skill.
