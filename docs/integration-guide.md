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

### CrewAI
Add DECISION.md to the agent's backstory or system message.

### AutoGen
Include in the agent's system_message parameter.

## General Principle
DECISION.md is plain markdown. Any system that accepts a system prompt or context file can use it. Just paste or upload.
