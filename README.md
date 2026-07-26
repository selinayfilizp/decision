# DECISION.md

[![CI](https://github.com/selinayfilizp/decision/actions/workflows/ci.yml/badge.svg)](https://github.com/selinayfilizp/decision/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/selinayfilizp/decision)](https://github.com/selinayfilizp/decision/releases)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Try it](https://img.shields.io/badge/try_it-decisionsmd.vercel.app-blue)](https://decisionsmd.vercel.app)

**The missing layer in the AI agent stack.**

SOUL.md tells your agent who it is. SKILL.md tells it what it can do. **DECISION.md tells it how to choose.**

```
your-agent/
├── SOUL.md        ← Who your agent is (personality, voice, boundaries)
├── STYLE.md       ← How your agent communicates
├── SKILL.md       ← What your agent can do (procedures, capabilities)
├── MEMORY.md      ← What your agent remembers
├── AGENTS.md      ← Project-specific rules and constraints
└── DECISION.md    ← How your agent chooses under uncertainty ✨ NEW
```

---

## The Problem

AI agents are getting incredibly capable. But when your agent faces a tradeoff (speed vs. thoroughness, cost vs. quality, risk vs. reward, ask you vs. just act), it has no framework for choosing.

It either defaults to generic behavior, or it interrupts you for every decision.

| Layer | What it defines | Exists? |
|-------|----------------|---------|
| Identity | Who the agent is | ✅ SOUL.md |
| Rules | Project constraints | ✅ AGENTS.md |
| Skills | What it can do | ✅ SKILL.md |
| **Judgment** | **How it chooses** | **❌ No shared format** |

This isn't a future problem. Right now, today, your agent doesn't know whether to book the cheap flight or the direct one. Whether to send that email immediately or save it as a draft for your review. Whether 70% confidence is enough to act, or it should ask you first. A clear threshold like "act without asking if cost < $50 and reversible" would change how it operates in every session.

**As agents become more autonomous, the judgment gap becomes the bottleneck.**

---

## The Soul Document Gap

| Scenario | Soul Document | SOUL.md | DECISION.md |
|----------|:---:|:---:|:---:|
| "Should my agent be honest?" | ✅ | n/a | n/a |
| "Should it sound casual or formal?" | n/a | ✅ | n/a |
| "Book the cheap flight or the direct one?" | ❌ | ❌ | ✅ |
| "Accept this meeting or protect my focus time?" | ❌ | ❌ | ✅ |
| "Push back when I'm overcommitting?" | ❌ | ❌ | ✅ |
| "70% confident: act or ask me?" | ❌ | ❌ | ✅ |

Anthropic's model specification defines Claude's universal values, safety principles, and honesty norms. It's comprehensive about *who Claude is*. But it repeatedly says "use good judgment" without defining what good judgment looks like *for you*. A risk-tolerant startup founder and a risk-averse accountant receive the same generic judgment defaults.

The soul document gave agents a conscience. SOUL.md gave them personality. **DECISION.md gives them judgment.**

---

## What is DECISION.md?

A portable, human-readable markdown file that codifies your personal decision-making philosophy. It teaches your AI agent how *you* think: your risk tolerance, your tradeoff priorities, when to act autonomously vs. when to ask, what biases to watch out for, and how to handle decisions across different domains.

This repository defines the open DECISION.md format: the template, examples, elicitation questions, validation guidance, and integration notes. DecisionOS is one implementation of that format.

The most important section is the one most people wouldn't think to write: **Anti-Patterns**: documenting the things you do *wrong*. Your agent doesn't need to know your strengths. It needs to catch your weaknesses: the anchoring, the sunk cost reasoning, the overcommitting, the anxiety-driven over-research. Document your bugs, not just your features.

## Quick Start

1. Copy [DECISION.md.template](DECISION.md.template) into your agent or project as `DECISION.md`.
2. Fill in concrete thresholds for cost, confidence, reversibility, escalation, and update cadence.
3. Paste or upload the file into your AI tool, or place it beside your agent configuration.
4. Stress-test it with three real decisions: one low-stakes, one high-stakes, and one where two rules conflict.
5. When the agent gets a decision wrong, add the new rule to the most relevant section and log the override.

### Example DECISION.md

```markdown
# DECISION.md: Sarah's Decision Framework

## Meta
- Format version: 0.3.0
- Last updated: 2026-03-21
- Source: Manual

## Decision Identity
Bias-to-action generalist who values learning over optimization.
Comfortable with calculated risk in career and creative domains,
conservative with financial and health decisions. Would rather
make a fast reversible mistake than deliberate endlessly.

## Risk Profile
- Overall: Moderate-Aggressive
- Career: Aggressive (willing to take asymmetric bets)
- Financial: Conservative (never risk >5% on a single position)
- Health: Ultra-conservative (always consult a professional)
- Creative: Aggressive (try weird things, fail fast)

## Autonomy Rules
- Act without asking if: cost < $50, reversible, low stakes
- Always ask if: involves other people, irreversible, cost > $500
- Escalation triggers: Any legal, medical, or financial commitment

## Decision Speed
- Default: Bias-to-action
- Reversible decisions: Decide in <5 minutes
- Irreversible decisions: Sleep on it, minimum 24 hours
- Tripwire: If deliberating >30 min on a reversible decision, just decide

## Tradeoff Hierarchy
When values conflict, prioritize in this order:
1. Integrity / keeping commitments
2. Learning and growth
3. Speed and momentum
4. Financial optimization
5. Social harmony

## Kill Criteria Defaults
- Review cadence: Monthly
- Default walk-away test: "Would I start this today, knowing what I know now?"
- Sunk cost override: Always active (past investment is irrelevant)

## Calibration Profile
- Overconfident about: Time estimates (multiply by 1.5x), social predictions
- Underconfident about: Technical ability, creative work
- Debiasing: Always get a second data point before committing to a number

## Anti-Patterns
Things I do wrong (catch me when you see these):
- "I say yes to too many things" → Push back on new commitments
- "I anchor on the first number I see" → Always seek a second reference
- "I avoid difficult conversations" → Flag when I'm procrastinating on people issues
- "I over-research when I'm anxious" → Name it and nudge me to decide

## Domain Rules
### Work
- Default to async communication
- Protect deep work blocks: decline meetings during focus time
- When in doubt, ship and iterate

### Personal
- Prioritize relationships over productivity
- Don't optimize leisure: spontaneity matters

### Financial
- Never make investment decisions after 10pm
- Always wait 48 hours on purchases over $500

## Meta-Rules
- When in doubt: Bias toward action
- Confidence threshold for autonomous action: 85%
- Update frequency: Re-evaluate quarterly or after major life changes
```

---

## What Makes a Good DECISION.md

| Good | Bad |
|------|-----|
| "Act without asking if cost < $50 and reversible" | "Use your best judgment" |
| "I anchor on first numbers: always seek a second data point" | "I try to be rational" |
| "Financial: Conservative. Never risk >5% on a single position" | "I'm moderate with money" |
| "If deliberating >30 min on a reversible decision, just decide" | "I like to think things through" |
| "Career: Aggressive (willing to take asymmetric bets on learning)" | "I'm open to opportunities" |
| "I say yes to too many things: push back on new commitments" | "I value helping others" |
| "Multiply my time estimates by 1.5x" | "I'm sometimes overconfident" |
| "When in doubt, ship and iterate" | "I prefer action" |

The test: **your agent should be able to make a decision you'd agree with, without asking you.** If it can't predict which way you'd lean on a new tradeoff, the DECISION.md is too vague.

Key principles:

- **Be specific**: "cost < $50" beats "low cost." Thresholds beat adjectives.
- **Include domain overrides**: Your risk tolerance for health decisions is probably different from career decisions. Say so.
- **Document your bugs, not just your features**: The Anti-Patterns section is the most useful part. What do you do *wrong*? That's what your agent needs to catch.
- **Include the "I'm torn" zones**: Areas where you genuinely don't have a stable preference should be documented as escalation triggers: "always ask me when X vs Y."
- **Update it**: A DECISION.md from six months ago might not reflect who you are now. Revisit quarterly, or after major life changes.

---

## It Gets Better Over Time

A DECISION.md isn't a one-time personality quiz. It's a living calibration system. Each time your agent makes a decision using your profile, you can verify whether it got it right. An illustrative trajectory (not measured data, track your own with the [alignment rate metric](docs/specification.md#measuring-alignment)):

- **Week 1**: Your agent agrees with you maybe 6/10 times. The profile is rough, mostly broad strokes.
- **Month 1**: Better, after you've refined conflict zones and added domain-specific rules.
- **Month 3**: It knows your anti-patterns, your thresholds shift by context, and it's learned which "I'm torn" areas to always escalate.

The calibration profile tracks where you're overconfident and underconfident, and updates as you do. This is the compounding advantage: every decision your agent makes becomes training data for better future decisions. The profile doesn't just describe how you decide today. It evolves into the most accurate model of your judgment that exists.

This is what separates a structured elicitation from a conversation with a chatbot. A chat generates a snapshot. DECISION.md generates a trajectory.

For actual measured numbers rather than a promise, see the [behavior demo](docs/behavior-demo.md): the repo ships a 24-scenario eval you can run yourself (`npm run evals`) that answers every scenario with and without a profile loaded and reports the difference.

### The Decision Gap Protocol

No profile can anticipate every decision. When your agent hits a tradeoff that isn't covered (the cucumbers aren't fresh, should it buy them anyway?), instead of guessing or interrupting you blindly, the agent:

1. **Detects** the gap: "I'm facing a tradeoff with no rule for this"
2. **Flags** it with structure: the specific tradeoff, which dimension it falls under, concrete options
3. **Captures** your answer as a new rule: "When produce isn't fresh → prefer freshness over organic"
4. **Suggests an update** to your DECISION.md so it never has to ask the same type of question again

Every gap becomes a learning opportunity. Every resolved gap makes the profile more complete. Over months, the gaps get rarer and the agent gets closer to deciding exactly how you would.

Full protocol specification: [docs/specification.md](docs/specification.md)

---

## How to Generate Your DECISION.md

### Option 1: Interactive Experience (Recommended)

Visit **[decisionsmd.vercel.app](https://decisionsmd.vercel.app)**: 35 research-backed tradeoff scenarios across 10 decision dimensions: 30 core questions plus 5 cross-dimension tradeoff questions. No account, no API key, nothing to install.

What makes the interactive experience different from just chatting with an LLM:

- **Pairwise comparison methodology**: forces real tradeoffs, not self-reported preferences. What you choose under pressure reveals more than what you say you value.
- **3-layer questioning**: each dimension is probed three times: basic threshold → context shift → identity-level. This detects whether a preference is stable or context-dependent.
- **Response time tracking**: measures how long each decision takes, locally in your browser. Fast = strong preference. Slow = genuine conflict zone. This data shapes your profile.
- **Five response types**: Choose A, Choose B, "I'm torn" (escalation zone), Skip, or "My own take" (free-text custom rule)
- **Live DECISION.md generation**: your profile updates in real-time as you answer, not at the end

### Option 2: Write Your Own

Copy the [DECISION.md.template](DECISION.md.template) and fill it in manually. The sections:

1. **Decision Identity**: One paragraph summary of how you decide
2. **Risk Profile**: Domain-specific risk tolerance
3. **Autonomy Rules**: When should the agent act vs. ask?
4. **Decision Speed**: Your default pace and tripwires
5. **Tradeoff Hierarchy**: Ordered values for when things conflict
6. **Kill Criteria**: When to walk away and review cadence
7. **Calibration Profile**: Known biases and debiasing strategies
8. **Anti-Patterns**: Things you do wrong that the agent should catch
9. **Domain Rules**: Different frameworks for work/personal/financial
10. **Meta-Rules**: Fallback heuristics and update frequency

---

## Using Your DECISION.md

### With Claude (Projects or System Prompt)
Drop your DECISION.md into a Claude Project, or paste it into custom instructions.

### With OpenClaw
Place it in your soul folder alongside SOUL.md:
```
.soul/
├── SOUL.md
├── STYLE.md
├── SKILL.md
└── DECISION.md
```

### With Cursor / Claude Code / OpenCode
Place it in your project root alongside AGENTS.md:
```
your-project/
├── AGENTS.md
├── DECISION.md
└── ...
```

### With Any LLM
Paste it into the system prompt or custom instructions of any AI tool.

### With Agent Frameworks (LangChain, CrewAI, AutoGen)
Include it as context in your agent's initialization prompt.

---

## Why This Works: The Research

DECISION.md isn't a personality quiz. Every component is grounded in decision science research that has been validated across decades of study: pairwise tradeoffs force revealed preferences instead of self-reports, response time flags genuine conflict zones, and kill criteria pre-commit you before you're emotionally invested.

| Component | Research Foundation |
|-----------|-------------------|
| Binary tradeoffs | Conjoint analysis / pairwise comparison (Luce & Tukey, 1964) |
| 3-layer questioning | PAPRIKA method (Hansen & Ombler, 2008) |
| Response time tracking | Drift-Diffusion Model (Ratcliff, 1978) |
| Risk profiling | Prospect Theory (Kahneman & Tversky, 1979) |
| Kill criteria | Pre-commitment research (Duke, 2022; Milkman, 2021) |
| Calibration profile | Superforecasting (Tetlock, 2015) |
| Anti-patterns | Cognitive bias literature (Kahneman, 2011) |
| Process vs. outcome | "Resulting" framework (Duke, 2018) |
| Revealed preferences | Samuelson (1938); behavioral economics |
| Mental time travel | Hershfield (2023) |

Full research framework with all citations: [docs/research.md](docs/research.md)

---

## Project Structure

```
decision/
├── README.md                    ← You're here
├── DECISION.md.template         ← Blank template to fill in
├── examples/
│   ├── startup-founder.md       ← Example: risk-tolerant founder
│   ├── conservative-exec.md     ← Example: careful executive
│   ├── creative-freelancer.md   ← Example: creative professional
│   ├── developer.md             ← Example: software developer
│   ├── new-grad.md              ← Example: early career
│   ├── engineering-team.md      ← Example: shared team profile
│   └── structured-profile.json  ← Example structured profile
├── docs/
│   ├── research.md              ← Full research framework with citations
│   ├── specification.md         ← The DECISION.md format specification
│   ├── integration-guide.md     ← How to use with different platforms
│   ├── behavior-demo.md         ← Before/after agent behavior demo
│   └── validation.md            ← Validation guidance for implementers
├── elicitation/
│   ├── seed-questions.md        ← 35 questions across 10 dimensions
│   ├── system-prompts/          ← Claude API prompts for adaptive questioning
│   └── dimensions.md            ← The 10 decision dimensions we elicit
├── evals/
│   ├── behavior-cases.json      ← 24 forced-choice scenarios across the dimensions
│   ├── profile.md               ← The fixed profile the scenarios test against
│   └── results/                 ← Measured runs (see docs/behavior-demo.md)
├── schemas/
│   └── decision.schema.json      ← Machine-readable structured profile schema
├── scripts/
│   ├── lint-decision-md.mjs      ← Dependency-free Markdown profile linter
│   ├── validate-structured-profile.mjs  ← Dependency-free structured profile validator
│   ├── run-evals.mjs             ← Runs the with/without behavioral eval (`npm run evals`)
│   └── check-all.mjs             ← Runs every check (used by `npm test` and CI)
├── .github/
│   ├── ISSUE_TEMPLATE/          ← Issue templates for examples, integrations, and spec fixes
│   └── workflows/ci.yml         ← CI: lints examples and the README example on every PR
├── CODE_OF_CONDUCT.md           ← Community participation guidelines
├── CONTRIBUTING.md              ← How to contribute examples, docs, and integrations
└── CHANGELOG.md                 ← Version history
```

---

## Beyond Personal: Teams, Products, and Organizations

DECISION.md isn't just for individuals. Teams can share one (deployment risk tolerance, refund thresholds, spend limits), products can ship one as the default behavior for their AI features, and organizations can layer them: rules inherit downward, and the higher layer wins on conflicts:

```
Product DECISION.md  → Default behavior for all users
  ↓ overridden by
Org DECISION.md      → Company compliance, risk tolerance, approval limits
  ↓ overridden by
User DECISION.md     → Individual preferences (where org permits)
```

Full specification for organizational DECISION.md: [docs/specification.md](docs/specification.md)

---

## Contributing

We're building an open standard. Contributions welcome:

- **Example DECISION.md files**: Share yours (anonymized) to help others
- **Domain-specific modules**: Elicitation questions for specific roles (founder, parent, investor, etc.)
- **Integration guides**: How to use DECISION.md with your favorite agent platform
- **Research**: Papers and frameworks that should inform the elicitation
- **Translations**: Decision-making varies across cultures; help us be inclusive

---

## FAQ

**Is this different from SOUL.md?**
Yes. SOUL.md defines personality: voice, tone, expertise, boundaries. DECISION.md defines judgment: how to choose when facing tradeoffs, uncertainty, and competing priorities. They're complementary, not competing.

**How many questions do I need to answer?**
The interactive experience has 35 curated questions: 30 core questions covering 10 dimensions, plus 5 cross-dimension tradeoff questions. You can stop and download at any point, even after 3 questions, you'll have a useful DECISION.md. It's a living document that gets more precise the more you refine it.

**Does it work with models other than Claude?**
Yes. DECISION.md is plain markdown. It works with any LLM that can read a system prompt: Claude, GPT, Gemini, Llama, Mistral, or any agent framework.

**How often should I update it?**
Quarterly, or after major life changes (new job, new relationship, big move). Your decision-making philosophy evolves. Your DECISION.md should too.

**Is my data private?**
The core experience runs entirely in your browser with no backend. Your responses are stored locally on your device and your DECISION.md is generated client-side. If you optionally connect a Claude API key for adaptive questioning, your responses are sent to Anthropic's API under their standard privacy policy, but never to our servers.

**Should I commit my personal DECISION.md to a public repo?**
Usually no. A DECISION.md can reveal sensitive information about your risk tolerance, finances, relationships, health boundaries, and professional preferences. Share anonymized examples when contributing publicly, and keep personal or organization-specific files private unless you deliberately want them public.

---

## Acknowledgments

Built on the shoulders of:
- **Annie Duke** (*Thinking in Bets*, *Quit*): the "resulting" framework and kill criteria
- **Daniel Kahneman** (*Thinking, Fast and Slow*): cognitive biases and prospect theory
- **Philip Tetlock** (*Superforecasting*): calibration and forecasting methodology
- **Katy Milkman** (*How to Change*): pre-commitment and behavior change
- **Hal Hershfield** (*Your Future Self*): mental time travel
- **Gerd Gigerenzer** (*Gut Feelings*): ecological rationality and heuristics
- **Anthropic**: The model specification that revealed the judgment gap

---

## License

MIT: use it, fork it, build on it.

---

*"There are only two things that determine how your life turns out. One is luck, which we don't have any control over. And second, the quality of your decisions." (Annie Duke)*

**Teach your AI agent how you think.**
