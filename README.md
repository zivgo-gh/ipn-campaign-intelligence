# IPN Campaign Intelligence Center
### A product prototype by Ziv Gonen

---

## What this is

A high-fidelity interactive prototype of a redesigned portal experience for Ibotta's IPN Campaign Platform — built as a demonstration of product thinking, UX judgment, and AI fluency.

**Built with:** HTML, CSS, JavaScript, Chart.js, and Claude Code (Anthropic's AI development tool). No frameworks, no build step — opens directly in a browser.

**[→ View live prototype](https://zivgo-gh.github.io/ipn-campaign-intelligence/)**

---

## A note on assumptions

This prototype is based on publicly available information about Ibotta and the IPN — earnings calls, press releases, product announcements, and published case studies. I don't have insider knowledge of how the portal currently works, how the internal teams operate, or what's already been built.

Where I didn't have specifics, I made reasonable assumptions based on how similar platforms in this space are structured. The goal isn't to accurately describe Ibotta's current state — it's to demonstrate how I think about the problem and what I'd prioritize building. I expect some of this will be wrong, and I'm looking forward to finding out where on Friday.

---

## The problem I chose to focus on

Based on my research, the IPN platform has strong underlying infrastructure: a pay-per-sale model, an incrementality methodology (Matched Audiences) that proves causation rather than just correlation, and LiveLift — launched in late 2025 — which appears to bring in-flight performance measurement to campaigns while they're still running.

The opportunity I see in the portal layer is around how that data reaches the people who need to act on it. My assumption — and it is an assumption — is that account managers today spend meaningful time pulling data, building recaps, and manually monitoring campaigns for issues. And that ops teams work reactively, discovering problems through data diving rather than being surfaced to them.

**The thesis behind this prototype:** A portal that continuously analyzes what's happening across campaigns, surfaces the problems and opportunities proactively, ranks them by urgency, and attaches a specific recommended action — so nobody has to go looking.

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

The "Since Last Optimization" date range is an assumption about a feature that doesn't necessarily exist today — the idea being that when a mid-flight change is made, the AM can isolate performance to just the period after that change to answer: *Did it work?*

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

This was a deliberate scoping decision. I've built platforms with a similar persona structure twice before — and in both cases, the internal efficiency gap was the highest-leverage place to start. AMs functioning as data translators, ops teams working reactively — those are patterns I recognize. Fixing them scales the platform's capacity without adding headcount, and creates the foundation that makes client-facing improvements meaningful.

I may be wrong about where Ibotta's biggest pain is today. That's part of what I'm hoping to learn on Friday.

---

## About the build

This prototype was built using **Claude Code** — Anthropic's AI-powered development tool. I directed the product vision, the UX structure, the interaction design, and the data architecture. Claude handled the implementation. The whole thing took a few hours over a weekend.

That's not a footnote — it's a demonstration. This is what AI-enabled product development looks like when a PM knows how to use it.
