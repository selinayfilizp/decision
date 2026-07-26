# Seed Questions

35 questions: 30 core questions across 10 dimensions (3 per dimension, escalating in nuance), plus 5 cross-dimension trade-off questions.

## Core Questions (30)

1. **Threshold**: Surfaces the basic preference
2. **Context Shift**: Tests whether the preference holds when stakes or domain change
3. **Identity**: Probes the deeper belief driving the preference

This 3-layer approach is grounded in conjoint analysis methodology (Luce & Tukey, 1964): a single question reveals a preference, but multiple questions across contexts reveal whether it's a stable trait or context-dependent. Areas where answers shift between questions become "escalation zones" in the DECISION.md: the agent knows to ask rather than assume.

---

## Cost Sensitivity

### Q1: Threshold
> your agent found two flights. $180 with a 2-hour layover, or $340 direct. you have a morning meeting the next day. what does it book?
- **A:** book the $180 flight: optimize for cost, accept inconvenience
- **B:** book the $340 flight: optimize for time, pay premium

### Q2: Context Shift
> same flight scenario, but now you're traveling for a first date, not a work meeting. does the calculus change?
- **A:** still take the cheap flight: cost logic doesn't change by context
- **B:** take the direct flight this time: personal stakes shift the threshold

### Q3: Identity
> you earn $80/hr. a task would save you $50 but take 2 hours. when does spending money to save time make sense for you?
- **A:** almost always save the money: optimize for cost preservation
- **B:** always value time over money past a threshold: your hourly rate is the mental threshold

---

## Risk Tolerance

### Q4: Threshold
> system outage detected at 2am. logs are ambiguous. restart server blindly (50% fix, 50% data corruption risk) or page on-call engineer?
- **A:** restart blindly: favor immediate autonomous action
- **B:** page engineer: favor safety, wake human

### Q5: Context Shift
> your portfolio is up 40% this year. market analysts predict continued growth but you've hit your annual target. lock in gains or stay invested?
- **A:** lock in gains: protect wins, a bird in the hand
- **B:** stay invested: don't cap upside, trust the trend

### Q6: Identity
> guaranteed $50k bonus or 40% chance at $200k (EV: $80k). the $50k is life-changing right now.
- **A:** take guaranteed $50k: certainty is worth the lower expected value
- **B:** take 40% shot at $200k: expected value wins, you can absorb the downside

---

## Autonomy Threshold

### Q7: Threshold
> your agent found a critical typo on your live website. fix it automatically and notify you after, or flag it and wait for your approval?
- **A:** fix and notify: trust agent on obvious fixes
- **B:** flag and wait: no changes without explicit approval

### Q8: Context Shift
> drafting a response to an angry client. send immediately based on past successful templates, or save as draft for human review?
- **A:** send immediately: full autonomy on routine tasks
- **B:** save as draft: human-in-the-loop for sensitive comms

### Q9: Identity
> agent has 95% accuracy on calendar accepts/declines after a month of learning your patterns. let it auto-accept/decline invites?
- **A:** yes let it run: 95% accuracy is reliable, I'd approve most anyway
- **B:** no keep showing me: I want to see and approve every invite

---

## Sunk Cost Resistance

### Q10: Threshold
> project x is 80% complete but market conditions shifted making it obsolete. finish it (2 weeks work) or pivot immediately to project y (higher upside, 0% complete)?
- **A:** finish project x: 80% done is too far to abandon
- **B:** pivot to project y: ignore sunk cost, optimize future ROI

### Q11: Context Shift
> you've been learning rust for 6 months. a dream job appears but requires python expertise. invest 3 months switching, or hold out for a rust role?
- **A:** switch to python: follow the opportunity, not the investment
- **B:** hold for rust role: compound existing expertise, be patient

### Q12: Identity
> 3 years building reputation in one industry. opportunity in different field excites you more but you'd start from zero credibility.
- **A:** make the leap: the excitement and growth potential outweighs sunk credibility
- **B:** stay and build on what you have: compound existing advantage, stay patient

---

## Information Appetite

### Q13: Threshold
> researching a vendor. agent has 80% confidence based on 3 sources. spend 4 more hours to reach 95% confidence, or output report now?
- **A:** output report now: 80% is good enough to act
- **B:** spend 4 more hours: demand high certainty

### Q14: Context Shift
> you're hiring. strong candidate but one reference hasn't responded. extend the offer now (losing 3 other candidates who need answers) or wait 48 more hours?
- **A:** extend offer now: act on available signal, don't lose the candidate
- **B:** wait for reference: due diligence is non-negotiable for hiring

### Q15: Identity
> friend tells you about investment. "trust me it's great." no time to research. window closes in 24 hours.
- **A:** pass on it: you can't act without understanding the risk
- **B:** invest small amount: you trust the person, 24 hours is enough

---

## Speed vs. Thoroughness

### Q16: Threshold
> you need to choose a new project management tool. trial 3 options over 2 weeks, or pick the one your cofounder recommended and start today?
- **A:** pick the recommendation: bias toward speed, trust social signal
- **B:** trial 3 options: bias toward thoroughness, gather data

### Q17: Context Shift
> writing a blog post. spend 2 hours making it great, or spend 30 minutes on a 'good enough' version and ship it today?
- **A:** ship the quick version: done is better than perfect
- **B:** invest the 2 hours: quality compounds, don't publish mediocre work

### Q18: Identity
> looking back at your biggest wins and regrets: which pattern is more true?
- **A:** my wins came from acting fast: timing and iteration beat perfection
- **B:** my wins came from being thorough: careful planning and due diligence paid off

---

## Social vs. Independent

### Q19: Threshold
> you have a strong instinct about a strategic pivot, but three advisors you respect all disagree with you.
- **A:** trust your instinct: you have context others don't
- **B:** defer to advisors: 3 smart people can't all be wrong

### Q20: Context Shift
> a team member proposes an approach you think is wrong, but they're passionate about it and it's not catastrophically bad. override them or let them try?
- **A:** let them try: autonomy and learning matter more than being right
- **B:** redirect them: don't waste time on a path you know won't work

### Q21: Identity
> you need to give someone difficult feedback that might damage the relationship. they haven't asked for it.
- **A:** give the feedback: honesty and their growth matter more than comfort
- **B:** hold back unless asked: unsolicited feedback damages trust

---

## Reversibility Weighting

### Q22: Threshold
> two job offers. offer A: exciting but irreversible career pivot. offer B: lateral move, easy to reverse in 6 months. both pay similarly.
- **A:** take the irreversible pivot: optimize for upside, accept lock-in
- **B:** take the reversible move: preserve optionality

### Q23: Context Shift
> you can sign a 2-year lease for a 30% discount, or go month-to-month at full price. you like the place but aren't 100% sure about the neighborhood.
- **A:** sign the 2-year lease: 30% savings is huge, commit
- **B:** go month-to-month: pay more for flexibility

### Q24: Identity
> broadly: do you tend to commit too quickly or hold back too long?
- **A:** i commit too quickly: I regret not thinking it through sometimes
- **B:** i wait too long: I regret missing windows and being indecisive

---

## Temporal Discounting

### Q25: Threshold
> your agent can invest $5k in a course that won't pay off for 2+ years, or use it for immediate marketing that generates revenue this quarter.
- **A:** immediate marketing: favor near-term returns
- **B:** invest in the course: favor long-term compounding

### Q26: Context Shift
> you can take a 20% pay cut for a role with massive learning potential, or stay at your current salary doing comfortable work.
- **A:** take the pay cut: invest in future earning power
- **B:** stay at current salary: financial stability now, learn on the side

### Q27: Identity
> you have 2 free hours: exercise (health payoff in months) or finish a deliverable (career payoff this week)?
- **A:** finish the deliverable: capture the immediate opportunity
- **B:** exercise: health is the foundation everything else depends on

---

## Domain Rules

### Q28: Threshold
> it's 11pm. your agent detected an important but non-urgent work email. respond now to impress the sender, or queue it for 8am to protect your sleep boundary?
- **A:** respond now: optimize for responsiveness
- **B:** queue for morning: protect personal boundaries

### Q29: Context Shift
> work opportunity requires travel, means missing kid's school event (or friend's important moment). significant career opportunity but not once-in-a-lifetime.
- **A:** take the opportunity: career growth compounds and these opportunities matter
- **B:** skip it: you'll always regret missing those personal moments

### Q30: Identity
> if your agent had to describe your #1 non-negotiable life rule: what domain?
- **A:** health or relationships: everything else is built on these
- **B:** integrity or commitments: being trustworthy and consistent is foundational

---

## Cross-Dimension Trade-Off Questions (5)

These 5 questions force explicit choices between dimensions that may conflict in real decisions.

### Q31: Cost vs. Time
> you can hire someone for $2k/month to handle email and calendar (saves 8 hrs/week), or do it yourself and invest that time in strategic work worth $1.5k/month in future value.
- **A:** do it yourself: protect that $2k, the strategic time might not pan out
- **B:** hire them: your time is the constraint, strategic work compounds faster than $2k savings

### Q32: Risk vs. Autonomy
> your agent notices a security vulnerability in production. it can auto-patch (95% safe, 5% risk of breaking something) or escalate to you for approval (3-hour delay during which breach risk exists).
- **A:** let agent patch: uptime and security matter more than small process risk
- **B:** escalate to me: I need to approve changes to systems I'm responsible for

### Q33: Speed vs. Reversibility
> you found an apartment you love. landlord needs an answer in 24 hours or it goes to the next applicant. you haven't fully researched the neighborhood.
- **A:** commit now: the right place is worth the risk, you can move if needed
- **B:** pass: you can't commit to a year+ without proper due diligence

### Q34: Domain Rules vs. Cost
> you have a firm rule: no work on weekends. a high-paying client emergency comes up (would cost you $50k if you don't respond). what do you do?
- **A:** break the rule this once: $50k is too much to lose
- **B:** hold the boundary: the rule exists for a reason, suggest workarounds

### Q35: Information vs. Speed
> you're launching a feature. you could gather 2 more weeks of customer feedback (might reveal issues, might slow you down), or ship tomorrow based on current signal.
- **A:** gather 2 more weeks: avoid shipping broken, customer signal is irreplaceable
- **B:** ship tomorrow: early feedback from real users beats more surveys, ship fast

---

## Methodology Notes

**Why 3 questions per dimension?** A single binary choice tells you what someone prefers. But one data point can't distinguish between a deeply held value and a context-dependent preference. By testing the same dimension across different scenarios (escalating from a simple threshold to a context shift to an identity-level probe) we can detect:

- **Consistent patterns** (same choice 3/3 times) → strong default rule for the agent
- **Context-dependent shifts** (choice changed between Q1 and Q2) → agent should check context before applying rule
- **Genuine conflicts** ("I'm torn" on any question) → agent should always escalate to human

**Cross-dimension questions (5 additional):** Questions 31–35 force trade-offs between dimensions. A user who answers A on Cost but B on Time might still choose Cost over Time in Q31 (or vice versa). These reveal which preference actually wins when both pull in opposite directions. They're the hardest questions but the most informative.

**Response time tracking:** The time taken to answer each question is recorded silently. Fast responses (<3 seconds) indicate strong, instinctive preferences. Slow responses (>10 seconds) indicate deliberation and potential value conflict. This data enriches the DECISION.md: slow-response areas get flagged as escalation zones even if the user ultimately chose an option.

**The "My Own Take" option:** When users reject the binary and write their own answer, this is the richest signal. These free-text responses become custom rules that override the dimension's default logic. The user is telling you: "the real answer is more nuanced than A or B."

**Rationale capture:** For high-impact, surprising, slow, or cross-dimension answers, ask one short follow-up: "What made that option win?" Store the answer as Preference Evidence. This helps distinguish durable preferences from superficial or one-off choices.

**Total: 35 questions** (30 core + 5 cross-dimension) designed to map the full decision-making landscape and reveal where you're consistent, where you flex by context, and where you have genuine value conflicts.
