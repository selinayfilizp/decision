# DecisionOS — Research Framework

**Every feature grounded in decision science. Every question backed by a citation.**

---

## Overview

This document maps each component of DecisionOS to its research foundation. The goal: if Annie Duke, Daniel Kahneman, or Philip Tetlock looked at this product, every design choice should be defensible.

---

## 1. Core Theoretical Foundations

### 1.1 Resulting & Process vs. Outcome (Annie Duke)

**The insight:** People systematically confuse outcome quality with decision quality. A good decision can produce a bad outcome (bad luck), and a bad decision can produce a good outcome (dumb luck).

**How it maps to DecisionOS:** The DECISION.md doesn't optimize for "being right" — it optimizes for *good decision processes*. When we stress-test and track decisions later, we score on two independent axes: process quality and outcome quality.

**The 2×2 matrix:**

| | Good Outcome | Bad Outcome |
|---|---|---|
| **Good Process** | Skill (earned success) | Bad luck (learn, don't change process) |
| **Bad Process** | Dumb luck (don't repeat) | Predictable failure (fix process) |

**Key sources:**
- Duke, A. (2018). *Thinking in Bets*. Portfolio/Penguin.
- Duke, A. (2020). *How to Decide*. Portfolio/Penguin.
- Baron, J. & Hershey, J.C. (1988). "Outcome Bias in Decision Evaluation." *Journal of Personality and Social Psychology*, 54(4), 569–579. (The original academic study on outcome bias.)
- Gino, F., Moore, D.A., & Bazerman, M.H. (2009). "No harm, no foul: The outcome bias in ethical judgments." Harvard Business School Working Paper.

**Design implication:** The stress test and tracking features must always present process quality and outcome quality as separate dimensions. Never collapse them into a single "was this a good decision?" score.

---

### 1.2 Kill Criteria & Pre-Commitment (Duke, Milkman, Hershfield)

**The insight:** People are terrible at quitting because of sunk cost fallacy and identity protection. Setting *specific, observable benchmarks in advance* — "kill criteria" — dramatically improves the ability to walk away when something isn't working.

**How it maps to DecisionOS:** The DECISION.md includes default kill criteria patterns and escalation thresholds. When generating decision frameworks, the system prompts users to define what "good" and "bad" would look like at a future checkpoint — before they're emotionally invested in the outcome.

**The framework (from Duke's Big Think article):**
1. Set a concrete deadline: "How long am I okay with this?"
2. Mental time travel: Imagine good version and bad version at that deadline
3. Define kill criteria: Specific signals that tell you to stay or go
4. Estimate probability: How likely is the good version?

**Key sources:**
- Duke, A. (2022). *Quit: The Power of Knowing When to Walk Away*. Portfolio/Penguin.
- Milkman, K. (2021). *How to Change*. Portfolio/Penguin. (Pre-commitment as a behavior change tool.)
- Hershfield, H. (2023). *Your Future Self*. Little, Brown Spark. (Mental time travel — connecting with your future self improves decision-making.)
- Thaler, R. & Sunstein, C. (2008). *Nudge*. (Pre-commitment architecture.)
- Ariely, D. & Wertenbroch, K. (2002). "Procrastination, Deadlines, and Performance: Self-Control by Precommitment." *Psychological Science*, 13(3), 219–224.

**Design implication:** DECISION.md should have a `## Kill Criteria Defaults` section where users define their personal thresholds for walking away, plus a default review cadence.

---

### 1.3 Calibration & Forecasting (Tetlock)

**The insight:** Forecasting accuracy is a real, measurable skill. It can be improved with training, and the key components are calibration (your confidence matches reality) and resolution (you make decisive predictions, not fence-sitting). Superforecasters in the Good Judgment Project improved accuracy by ~60% with training.

**How it maps to DecisionOS:** The elicitation includes calibration questions to measure how well the user knows what they know. The DECISION.md includes a calibration profile — known areas of overconfidence and underconfidence — so the agent can adjust its own confidence accordingly.

**Key concepts:**
- **Calibration**: If you say 70% confident, are you right 70% of the time?
- **Resolution**: Do you use the full probability range, or cluster around 50%?
- **Brier score**: Quadratic error metric — the gold standard for measuring forecast accuracy.
- **Base rates / outside view**: How often do things like this happen in situations like this?

**Key sources:**
- Tetlock, P. & Gardner, D. (2015). *Superforecasting: The Art and Science of Prediction*. Crown.
- Tetlock, P. (2005). *Expert Political Judgment*. Princeton University Press.
- Brier, G.W. (1950). "Verification of forecasts expressed in terms of probability." *Monthly Weather Review*, 78(1), 1–3.
- Moore, D.A. & Healy, P.J. (2008). "The Trouble with Overconfidence." *Psychological Review*, 115(2), 502–517.
- Lichtenstein, S., Fischhoff, B., & Phillips, L.D. (1982). "Calibration of probabilities: The state of the art to 1980." In D. Kahneman, P. Slovic, & A. Tversky (Eds.), *Judgment Under Uncertainty*.

**Design implication:** Include calibration questions in elicitation. Track user's calibration curve over time. DECISION.md should specify the user's confidence threshold for autonomous agent action (e.g., "only act autonomously if >85% confident").

---

### 1.4 Cognitive Biases (Kahneman & Tversky)

**The insight:** Human decision-making is systematically distorted by cognitive biases — anchoring, availability heuristic, confirmation bias, loss aversion, sunk cost fallacy, and many others. These are not random errors; they are predictable patterns.

**How it maps to DecisionOS:** The elicitation actively tests for bias susceptibility. The DECISION.md includes an "Anti-Patterns" section where the user documents their known biases, so the agent can actively counteract them.

**Key biases relevant to DECISION.md:**

| Bias | What it does | How DECISION.md counteracts it |
|------|-------------|-------------------------------|
| **Anchoring** | Over-weighting first piece of information | "Always seek a second data point" |
| **Confirmation bias** | Seeking info that confirms existing beliefs | "Actively seek disconfirming evidence" |
| **Sunk cost fallacy** | Continuing because of past investment | Kill criteria + "Would I start this today?" test |
| **Loss aversion** | Weighting losses ~2x more than equivalent gains | Explicit risk tolerance calibration |
| **Status quo bias** | Preferring current state regardless of merit | Decision review cadence forces re-evaluation |
| **Availability heuristic** | Over-weighting easily recalled examples | "Use base rates, not anecdotes" |
| **Overconfidence** | Believing you know more than you do | Calibration profile + confidence discounting |
| **Planning fallacy** | Underestimating time and cost | "Multiply time estimates by [personal factor]" |

**Key sources:**
- Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
- Tversky, A. & Kahneman, D. (1974). "Judgment under Uncertainty: Heuristics and Biases." *Science*, 185(4157), 1124–1131.
- Kahneman, D. & Tversky, A. (1979). "Prospect Theory: An Analysis of Decision under Risk." *Econometrica*, 47(2), 263–292.
- Kahneman, D. & Lovallo, D. (1993). "Timid choices and bold forecasts: A cognitive perspective on risk taking." *Management Science*, 39(1), 17–31.

**Design implication:** The elicitation should include anchoring, framing, and loss aversion probes. The DECISION.md anti-patterns section should be specific and actionable, not generic.

---

## 2. Elicitation Methods

### 2.1 Pairwise Comparison / Conjoint Analysis

**The insight:** When people evaluate options one at a time, they often can't articulate their preferences clearly. But when forced to choose between two options (pairwise comparison), they reveal preferences they didn't know they had. This is the foundation of conjoint analysis, used extensively in market research, healthcare, and policy.

**How it maps to DecisionOS:** The core elicitation mechanic is rapid binary tradeoffs — "Would you rather have A or B?" — presented as swipeable cards. Each pair is designed to isolate a specific decision dimension (risk tolerance, speed preference, etc.).

**Why pairwise > rating scales:**
- Choosing between two options is the simplest possible decision task
- It mirrors how real decisions work (you're always choosing between alternatives)
- It produces more reliable preference data than rating scales
- Adaptive designs can identify stable preferences in relatively few questions

**The PAPRIKA method** (Potentially All Pairwise RanKings of all possible Alternatives) is particularly relevant: it asks pairwise tradeoff comparisons between two attributes at a time, adapts based on earlier answers, and identifies a stable utility function from relatively few questions.

**Key sources:**
- Luce, R.D. & Tukey, J.W. (1964). "Simultaneous conjoint measurement: A new type of fundamental measurement." *Journal of Mathematical Psychology*, 1(1), 1–27.
- Green, P.E. & Srinivasan, V. (1978). "Conjoint Analysis in Consumer Research: Issues and Outlook." *Journal of Consumer Research*, 5(2), 103–123.
- Hansen, P. & Ombler, F. (2008). "A new method for scoring additive multi-attribute value models using pairwise rankings of alternatives." *Journal of Multi-Criteria Decision Analysis*, 15(3-4), 87–107. (The PAPRIKA method.)
- McFadden, D. (1974). "Conditional Logit Analysis of Qualitative Choice Behavior." In P. Zarembka (Ed.), *Frontiers in Econometrics*.
- Pu, P. & Chen, L. (2008). "User-Involved Preference Elicitation for Product Search and Recommender Systems." *AI Magazine*, 29(4), 93.

**Design implication:** 30-40 pairwise comparisons across 10 decision dimensions. Adaptive — later questions informed by earlier answers. Each pair isolates one dimension. Results in a weighted preference profile.

---

### 2.2 Response Time as a Decision Signal (Drift-Diffusion Model)

**The insight:** How long it takes someone to make a choice is highly informative. In the Drift-Diffusion Model (DDM), decision-making is modeled as a process of noisy evidence accumulation toward a threshold. Faster responses indicate stronger preferences (higher drift rate); slower responses indicate genuine value conflict or ambiguity.

**How it maps to DecisionOS:** We track response time on every swipe/choice during elicitation. Fast responses = clear preference, high confidence. Slow responses = genuine tradeoff, the question is touching on a real area of value conflict. This data enriches the profile — it tells us not just *what* you chose, but *how hard it was*.

**Key insights from the DDM:**
- Response time and accuracy are jointly informative — you need both to understand the decision process
- Speed-accuracy tradeoff is partially under conscious control (some people are naturally more cautious)
- The boundary separation parameter reflects individual risk tolerance in the decision process
- Slower responses on certain tradeoffs indicate areas where the user genuinely doesn't have a dominant preference — these are the most important areas to document in DECISION.md

**Key sources:**
- Ratcliff, R. (1978). "A theory of memory retrieval." *Psychological Review*, 85(2), 59–108. (The foundational DDM paper.)
- Ratcliff, R. & McKoon, G. (2008). "The Diffusion Decision Model: Theory and Data for Two-Choice Decision Tasks." *Neural Computation*, 20(4), 873–922.
- Ratcliff, R., Smith, P.L., Brown, S.D., & McKoon, G. (2016). "Diffusion Decision Model: Current Issues and History." *Trends in Cognitive Sciences*, 20(4), 260–281.
- Krajbich, I., Armel, C., & Rangel, A. (2010). "Visual fixations and the computation and comparison of value in simple choice." *Nature Neuroscience*, 13(10), 1292–1298. (DDM applied to value-based choices.)

**Design implication:** Silently record response time for every elicitation question. Use it to weight confidence in the preference profile. Flag slow-response areas as "genuine tradeoff zones" in DECISION.md — these need explicit rules because the user themselves is conflicted.

---

### 2.3 Revealed vs. Stated Preferences

**The insight:** What people say they value and what they actually choose are often different. Stated preferences ("I value work-life balance") frequently diverge from revealed preferences (accepting a demanding job for higher pay). The gold standard in economics is revealed preference — inferring values from actual behavior.

**How it maps to DecisionOS:** The elicitation is designed to surface *revealed* preferences through forced choices, not *stated* preferences through self-report. The swipe-style tradeoffs force real tradeoff behavior. The scenario simulations create realistic contexts where stated and revealed preferences might diverge.

**Key sources:**
- Samuelson, P. (1938). "A Note on the Pure Theory of Consumer's Behaviour." *Economica*, 5(17), 61–71. (The foundational revealed preference paper.)
- Kahneman, D. & Thaler, R.H. (2006). "Anomalies: Utility Maximization and Experienced Utility." *Journal of Economic Perspectives*, 20(1), 221–234.
- Beshears, J., Choi, J.J., Laibson, D., & Madrian, B.C. (2008). "How are preferences revealed?" *Journal of Public Economics*, 92(8-9), 1787–1794.

**Design implication:** Never directly ask "how risk-tolerant are you on a scale of 1-10." Instead, present scenarios that force tradeoffs revealing risk tolerance. Compare revealed profile to any self-reported data and flag discrepancies — "You said you value thoroughness, but your choices consistently favor speed."

---

## 3. Decision Dimensions — What to Elicit

Each dimension below is grounded in research showing it's a stable, measurable individual difference that matters for decision quality.

### 3.1 Risk Tolerance

**Research basis:** Prospect Theory (Kahneman & Tversky, 1979) shows people are loss-averse — losses hurt ~2x as much as equivalent gains. But the degree varies significantly across individuals and domains. Risk tolerance is domain-specific: someone can be risk-seeking in career decisions and risk-averse in financial ones.

**Sources:** Kahneman & Tversky (1979); Weber, Blais, & Betz (2002) "A Domain-Specific Risk-Attitude Scale"; Figner et al. (2009) "Affective and deliberative processes in risky choice."

**Elicitation approach:** Scenario-based tradeoffs with varying stakes and probabilities across domains.

### 3.2 Speed vs. Thoroughness (Satisficing vs. Maximizing)

**Research basis:** Schwartz (2002) identified the maximizer-satisficer dimension — some people search exhaustively for the best option, others choose the first option that meets their threshold. Maximizers often experience more regret despite making objectively better choices.

**Sources:** Schwartz, B., Ward, A., Monterosso, J., et al. (2002). "Maximizing Versus Satisficing: Happiness Is a Matter of Choice." *Journal of Personality and Social Psychology*, 83(5), 1178–1197; Simon, H.A. (1956). "Rational choice and the structure of the environment." *Psychological Review*, 63(2), 129–138.

**Elicitation approach:** "You need to choose a restaurant for dinner tonight. Do you: (A) Pick the first place that looks good, or (B) Research 10 options and compare reviews?"

### 3.3 Temporal Discounting (Short-term vs. Long-term)

**Research basis:** People systematically undervalue future rewards relative to present ones (temporal/delay discounting). The discount rate varies across individuals and is a stable trait. This directly affects decisions about saving, investing, health, career planning.

**Sources:** Frederick, S., Loewenstein, G., & O'Donoghue, T. (2002). "Time Discounting and Time Preference: A Critical Review." *Journal of Economic Literature*, 40(2), 351–401; Hershfield, H. et al. (2011). "Increasing Saving Behavior Through Age-Progressed Renderings of the Future Self." *Journal of Marketing Research*, 48, S23–S37.

**Elicitation approach:** Tradeoffs between immediate and delayed rewards across contexts.

### 3.4 Information Appetite (When to Decide vs. When to Gather More)

**Research basis:** The explore-exploit tradeoff from optimal stopping theory. There's a mathematically optimal point to stop gathering information and decide (the 37% rule from the secretary problem). People systematically deviate from this — some search too long, others decide too quickly.

**Sources:** Christian, B. & Griffiths, T. (2016). *Algorithms to Live By*; Gittins, J.C. (1979). "Bandit Processes and Dynamic Allocation Indices." *Journal of the Royal Statistical Society*, 41(2), 148–177.

**Elicitation approach:** Scenarios with varying information availability — "Would you decide now with 60% of the info, or wait a week for 90%?"

### 3.5 Social vs. Independent Decision-Making

**Research basis:** People vary in how much they rely on social information. Some are independent reasoners, others are social learners. Group decisions can be better (wisdom of crowds) or worse (groupthink) depending on how they're structured.

**Sources:** Surowiecki, J. (2004). *The Wisdom of Crowds*; Janis, I. (1972). *Victims of Groupthink*; Polman, E. & Emich, K. (2011). "Decisions for others are more creative than decisions for the self." *Personality and Social Psychology Bulletin*, 37(4), 492–501.

**Elicitation approach:** "For a major career decision, do you: (A) Think it through alone first, then seek input, or (B) Discuss with trusted people from the start?"

### 3.6 Reversibility Weighting

**Research basis:** Jeff Bezos's Type 1 vs. Type 2 decision framework — irreversible decisions deserve more analysis, reversible ones should be made quickly. This maps to research on option value and real options theory in economics.

**Sources:** Bezos, J. (2015). Amazon shareholder letter; Dixit, A. & Pindyck, R.S. (1994). *Investment Under Uncertainty*. Princeton University Press.

**Elicitation approach:** Pairs that vary in reversibility — "Would you rather make a quick reversible choice or a slow irreversible one?"

### 3.7 Autonomy Threshold (Agent-Specific)

**Research basis:** This is the novel dimension — unique to the AI agent context. How much agency should the agent have? This maps to research on delegation, trust calibration, and automation bias.

**Sources:** Parasuraman, R. & Riley, V. (1997). "Humans and Automation: Use, Misuse, Disuse, Abuse." *Human Factors*, 39(2), 230–253; Lee, J.D. & See, K.A. (2004). "Trust in Automation: Designing for Appropriate Reliance." *Human Factors*, 46(1), 50–80.

**Elicitation approach:** "Your agent found a flight $200 cheaper but with a 4-hour layover. Should it: (A) Book it automatically, or (B) Show you the options and wait?"

---

## 4. Stress Test Design

### 4.1 Scenario-Based Evaluation

**Research basis:** The premortem technique (Klein, 1998) and prospective hindsight (Mitchell et al., 1989) show that imagining future scenarios improves decision quality. By presenting the user with realistic decision scenarios evaluated against their DECISION.md, we're testing the profile's validity through simulation.

**Sources:**
- Klein, G. (2007). "Performing a Project Premortem." *Harvard Business Review*, September.
- Mitchell, D.J., Russo, J.E., & Pennington, N. (1989). "Back to the future: Temporal perspective in the explanation of events." *Journal of Behavioral Decision Making*, 2, 25–38.

### 4.2 Ecological Validity

**Research basis:** Decision frameworks must be tested in contexts that resemble real-world decisions — with time pressure, incomplete information, competing priorities, and emotional stakes. Lab experiments with abstract gambles don't predict real-world decision behavior well.

**Sources:** Gigerenzer, G. (2007). *Gut Feelings: The Intelligence of the Unconscious*; Gigerenzer, G. & Gaissmaier, W. (2011). "Heuristic Decision Making." *Annual Review of Psychology*, 62, 451–482.

**Design implication:** Stress test scenarios should be realistic, domain-specific, and emotionally engaging — not abstract logic puzzles.

---

## 5. The DECISION.md Standard

### 5.1 Why Markdown?

The existing agent configuration ecosystem has converged on markdown as the standard: SOUL.md, SKILL.md, AGENTS.md, CLAUDE.md. Markdown is human-readable, version-controllable, and parseable by any LLM. DECISION.md follows this convention to maximize portability and adoption.

### 5.2 Structure Rationale

Every section of the DECISION.md maps to research:

| Section | Research Foundation |
|---------|-------------------|
| Decision Identity | Narrative identity theory (McAdams, 2001) — coherent self-narrative improves decision consistency |
| Risk Profile | Prospect Theory (Kahneman & Tversky, 1979) + domain-specific risk attitudes (Weber et al., 2002) |
| Autonomy Rules | Trust in automation literature (Lee & See, 2004; Parasuraman & Riley, 1997) |
| Decision Speed | Satisficing vs. maximizing (Schwartz, 2002; Simon, 1956) |
| Tradeoff Hierarchy | Multi-attribute utility theory (Keeney & Raiffa, 1976) |
| Kill Criteria Defaults | Pre-commitment (Milkman, 2021; Duke, 2022) |
| Calibration Profile | Superforecasting (Tetlock, 2015) + overconfidence research (Moore & Healy, 2008) |
| Domain Rules | Domain-specific risk attitudes (Weber et al., 2002) |
| Anti-Patterns | Cognitive bias literature (Kahneman, 2011; Tversky & Kahneman, 1974) |
| Meta-Rules | Regret minimization (Bezos); satisficing thresholds (Simon) |

---

## 6. Known Risks and Open Questions

### Algorithm Aversion
Research on algorithm aversion (Burton et al., 2020; Dietvorst et al., 2015) shows that when an automated system makes a visible mistake, people often trust it *less* than if there was no system at all — even if the system is correct 90% of the time. This is directly relevant to DECISION.md: if a user's profile leads to an agent making an obviously wrong decision, they may abandon the entire framework rather than refine it.

**Mitigation in the design:** The specification requires explicit escalation triggers and "always ask" rules to ensure the agent fails safely in high-stakes domains. The Decision Log tracks agreement rates so users can see the system's accuracy improving over time, which research suggests can counteract aversion.

### Social Desirability in Elicitation
People may answer elicitation questions based on how they want to be seen rather than how they actually decide. Pairwise comparison methodology partially mitigates this (forced tradeoffs are harder to fake than self-report scales), and the Decision Gap Protocol captures real decisions that gradually correct any initial bias. But initial profiles should be treated as hypotheses to be refined, not ground truth.

### Response Time Limitations
Response time during elicitation is used as a heuristic signal for decision difficulty, inspired by the Drift-Diffusion Model. However, response time is affected by many non-cognitive factors (device speed, reading ability, distraction, language proficiency). It should be weighted as one signal among many, not treated as a formal cognitive measurement.

---

## 7. What Makes This Novel

The academic literature on preference elicitation is deep, but it's almost entirely focused on:
- Product choices (which car/phone/treatment to buy)
- Policy preferences (which health intervention to fund)
- Single-domain decisions (investment, medical, hiring)

**Nobody has applied preference elicitation to generate a portable, machine-readable decision-making configuration for AI agents.** This is the novel contribution:

1. **Cross-domain elicitation** — We're not measuring preferences within one domain, but mapping the *meta-preferences* that govern how someone approaches decisions across all domains.
2. **Machine-readable output** — The preference profile isn't for human reflection alone; it's a functional configuration file that an AI agent can execute.
3. **Dynamic calibration** — Unlike a static preference profile, DECISION.md is designed to evolve through tracking and feedback, implementing the calibration training cycle from Tetlock's work.
4. **Bias-aware design** — The profile explicitly documents the user's cognitive biases, enabling the agent to actively counteract them — something no existing configuration standard does.
5. **Living document with gap protocol** — Unlike a static profile, DECISION.md grows through real-world usage. The Decision Gap Protocol detects uncovered decisions and captures new rules, creating a feedback loop that converges on the user's actual decision-making behavior.

---

## 8. Full Bibliography

### Books
- Christian, B. & Griffiths, T. (2016). *Algorithms to Live By*. Henry Holt.
- Duke, A. (2018). *Thinking in Bets*. Portfolio/Penguin.
- Duke, A. (2020). *How to Decide*. Portfolio/Penguin.
- Duke, A. (2022). *Quit: The Power of Knowing When to Walk Away*. Portfolio/Penguin.
- Gigerenzer, G. (2007). *Gut Feelings: The Intelligence of the Unconscious*. Viking.
- Hershfield, H. (2023). *Your Future Self*. Little, Brown Spark.
- Janis, I. (1972). *Victims of Groupthink*. Houghton Mifflin.
- Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
- Milkman, K. (2021). *How to Change*. Portfolio/Penguin.
- Schwartz, B. (2004). *The Paradox of Choice*. Ecco.
- Surowiecki, J. (2004). *The Wisdom of Crowds*. Doubleday.
- Tetlock, P. & Gardner, D. (2015). *Superforecasting*. Crown.
- Thaler, R. & Sunstein, C. (2008). *Nudge*. Yale University Press.

### Key Papers
- Ariely, D. & Wertenbroch, K. (2002). "Procrastination, Deadlines, and Performance." *Psychological Science*, 13(3), 219–224.
- Baron, J. & Hershey, J.C. (1988). "Outcome Bias in Decision Evaluation." *JPSP*, 54(4), 569–579.
- Brier, G.W. (1950). "Verification of forecasts expressed in terms of probability." *Monthly Weather Review*, 78(1), 1–3.
- Frederick, S. et al. (2002). "Time Discounting and Time Preference." *Journal of Economic Literature*, 40(2), 351–401.
- Hansen, P. & Ombler, F. (2008). "A new method for scoring additive multi-attribute value models using pairwise rankings." *JMCDA*, 15(3-4), 87–107.
- Kahneman, D. & Tversky, A. (1979). "Prospect Theory." *Econometrica*, 47(2), 263–292.
- Lee, J.D. & See, K.A. (2004). "Trust in Automation." *Human Factors*, 46(1), 50–80.
- Luce, R.D. & Tukey, J.W. (1964). "Simultaneous conjoint measurement." *JMP*, 1(1), 1–27.
- McFadden, D. (1974). "Conditional Logit Analysis of Qualitative Choice Behavior."
- Moore, D.A. & Healy, P.J. (2008). "The Trouble with Overconfidence." *Psychological Review*, 115(2), 502–517.
- Parasuraman, R. & Riley, V. (1997). "Humans and Automation." *Human Factors*, 39(2), 230–253.
- Polman, E. & Emich, K. (2011). "Decisions for others are more creative." *PSPB*, 37(4), 492–501.
- Ratcliff, R. (1978). "A theory of memory retrieval." *Psychological Review*, 85(2), 59–108.
- Ratcliff, R. & McKoon, G. (2008). "The Diffusion Decision Model." *Neural Computation*, 20(4), 873–922.
- Samuelson, P. (1938). "A Note on the Pure Theory of Consumer's Behaviour." *Economica*, 5(17), 61–71.
- Schwartz, B. et al. (2002). "Maximizing Versus Satisficing." *JPSP*, 83(5), 1178–1197.
- Simon, H.A. (1956). "Rational choice and the structure of the environment." *Psychological Review*, 63(2), 129–138.
- Tversky, A. & Kahneman, D. (1974). "Judgment under Uncertainty: Heuristics and Biases." *Science*, 185(4157), 1124–1131.
- Vul, E. & Pashler, H. (2008). "Measuring the Crowd Within." *Psychological Science*, 19(7), 645–647.
- Weber, E.U., Blais, A.-R., & Betz, N. (2002). "A Domain-Specific Risk-Attitude Scale." *Journal of Behavioral Decision Making*, 15(4), 263–290.

---

*This document should be cited in the hackathon presentation and serve as the foundation for all design decisions in DecisionOS.*
