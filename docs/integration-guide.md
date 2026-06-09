# DECISION.md Integration Guide

How to use your DECISION.md with popular AI platforms and agent frameworks.

## Claude (Anthropic)

### Claude Projects
1. Create a new Claude Project
2. Upload your DECISION.md to the project knowledge
3. Claude will reference it when making judgment calls

### Custom Instructions
1. Go to Claude Settings > Custom Instructions
2. Paste the contents of your DECISION.md
3. Claude will apply your decision framework across all conversations

### Claude Code / Cowork
Place DECISION.md in your project root alongside other config files.

For a reusable Claude Code skill, create `~/.claude/skills/decision/SKILL.md` with this frontmatter above your DECISION.md content:

```yaml
---
name: decision
description: My decision-making framework. Use when facing tradeoffs, purchases, scheduling, delegation, prioritization, or judgment under uncertainty.
user-invocable: false
---
```

Keep the skill focused on judgment. Put long decision logs, calibration history, or domain-specific appendices in supporting files and link to them from `SKILL.md`.

## OpenClaw / SOUL.md Ecosystem
Drop DECISION.md into your soul folder:
```
.soul/
├── SOUL.md
├── STYLE.md
├── SKILL.md
└── DECISION.md
```

## Cursor / Windsurf / Claude Code
Place alongside your existing agent configuration:
```
your-project/
├── .cursorrules    or  AGENTS.md
├── DECISION.md
└── ...
```

## ChatGPT
1. Go to Settings > Personalization > Custom Instructions
2. Paste the contents of your DECISION.md into the "What would you like ChatGPT to know about you?" section

## Agent Frameworks

### LangChain
Include DECISION.md content in your agent's system prompt during initialization.

```python
from pathlib import Path

decision_md = Path("DECISION.md").read_text()
system_prompt = f"""
You are acting on behalf of the user. Apply this decision framework when
choosing between options, deciding whether to act autonomously, or deciding
whether to ask for approval.

{decision_md}
"""
```

### CrewAI
Add DECISION.md to the agent's backstory or system message.

### AutoGen
Include in the agent's system_message parameter.

## Validation

Use [schemas/decision.schema.json](../schemas/decision.schema.json) when converting DECISION.md into a structured profile for applications, APIs, or import/export workflows. See the [validation guide](validation.md) for the field mapping and validation checklist.

For Markdown profiles, run:

```bash
node scripts/lint-decision-md.mjs DECISION.md
```

For structured JSON profiles, run:

```bash
node scripts/validate-structured-profile.mjs examples/structured-profile.json
```

## General Principle
DECISION.md is plain markdown. Any system that accepts a system prompt or context file can use it. Just paste or upload.
