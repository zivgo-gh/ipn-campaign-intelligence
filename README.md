# IPN Campaign Intelligence Center
### A product prototype by Ziv Goldenberg

---

## What this is

A high-fidelity interactive prototype of a redesigned portal experience for Ibotta's IPN Campaign Platform — built as a demonstration of product thinking, UX judgment, and AI fluency.

**Built with:** HTML, CSS, JavaScript, Chart.js, and Claude Code (Anthropic's AI development tool). No frameworks, no build step — opens directly in a browser.

**[→ View live prototype](https://zivgo-gh.github.io/ipn-campaign-intelligence/)**

---

## The problem it solves

The IPN platform has exceptional infrastructure: pay-per-sale accountability, Matched Audiences incrementality, and LiveLift delivering in-flight performance data from 80+ retailers in near real-time.

The gap is in what happens with that data. Today, account managers pull reports from Looker and build recap slides manually. Ops teams discover campaign issues reactively — by diving into data rather than being told what to look at. The platform surfaces data but doesn't act on it.

**The thesis behind this prototype:** A portal that continuously analyzes what's happening across campaigns, surfaces problems and opportunities proactively, ranks them by urgency, and attaches a specific recommended action to each one — so nobody has to go looking.

---

## The four screens

### Screen 1 — Account Manager: Portfolio Command Center

The AM's home base. Every brand account at a glance — health indicators, CPUM, budget pacing, days left in flight. The right panel surfaces AI-generated opportunities ranked by urgency: budget alerts, retailer efficiency signals, renewal prompts — each with a specific, quantified recommendation attached.

**Design principle:** Never show data without a recommended action. If the system can't tell you what to do about a number, it's just a dashboard.

---

### Screen 2 — Ops: Action Queue

The Ops team's view — same sidebar, different lens. A prioritized to-do list of everything that needs attention: live campaigns not redeeming, retailer feed delays, configuration errors before launch. Each item has a suggested fix and a one-click action.

**Design principle:** Ops shouldn't have to hunt for problems. The portal should know what's broken and bring it forward.

---

### Screen 3 — Campaign Detail with LiveLift

The full in-flight performance view for a single campaign. The AI recommendation bar at the top translates data into a specific suggested action — "Walmart is 31% more efficient than Kroger, shifting $20K is projected to improve blended CPUM by $0.18." The retailer table shows CPUM broken out by publisher. Action buttons close the loop without leaving the screen.

**Design principle:** Insight → decision → action on one screen. Every handoff out of the portal costs time and trust.

---

### Screen 4 — Brand Detail (Liquid Death)

A scoped portfolio view for a single brand — the same intelligence principles as the AM portfolio, focused on one account. Includes an aggregated performance chart with LiveLift data (Incremental Lift %, CPUM by Day, Units Moved, Daily Spend, New-to-Brand Rate), AI-surfaced opportunities specific to that brand, and the full campaign list.

The "Since Last Optimization" date range answers the question every AM asks after a mid-flight change: *Did it work?*

---

## Design principles applied

| Principle | Application |
|---|---|
| Actionability over data display | Every metric has a "so what" — no numbers without context or recommendation |
| Proactive over reactive surfacing | AI insights panel and ops queue surface issues before users search for them |
| Insight hierarchy | Urgent → Attention → Opportunity → Informational, always in that order |
| Role-appropriate views | AM sees portfolio health; Ops sees a workflow queue; same underlying data |
| AI as collaborator | Recommendations are specific, quantified, dismissible — never irreversible without confirmation |
| Reduce handoffs | Generate Recap, Shift Budget, Flag for Ops — all on the same screen as the insight |

---

## Why I focused on AM and Ops, not the brand client

The hardest gap to close isn't client self-serve — it's internal efficiency. AMs are the data translators today: they pull reports, interpret results, and communicate back to clients. Ops teams are the execution layer with no structured workflow surfacing what needs attention.

Making AMs and Ops faster and more proactive scales the platform's capacity without adding headcount. That's the foundation everything else — client transparency, guided self-serve, predictive planning — sits on.

---

## About the build

This prototype was built using **Claude Code** — Anthropic's AI-powered development tool. I directed the product vision, the UX structure, the interaction design, and the data architecture. Claude handled the implementation. The whole thing took a few hours over a weekend.

That's not a footnote — it's a demonstration. This is what AI-enabled product development looks like when a PM knows how to use it.
