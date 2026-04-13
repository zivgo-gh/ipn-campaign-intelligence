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

Where I didn't have specifics, I made reasonable assumptions based on how similar platforms in this space are structured. The goal isn't to accurately describe Ibotta's current state — it's to demonstrate how I think about the problem. I expect some of this will be wrong, and I'm looking forward to finding out where on Friday.

---

## The problem I chose to focus on

Based on my research, the IPN platform has strong underlying infrastructure: a pay-per-sale model, an incrementality methodology (Matched Audiences) that proves causation rather than just correlation, and LiveLift — launched in late 2025 — which appears to bring in-flight performance measurement to campaigns while they're still running.

One of the opportunities I see in the portal layer is around how that data reaches the people who need to act on it. My assumption about the two personas I focused on:

**Account managers** are primarily relationship managers and data consumers — monitoring performance, communicating results to clients, growing accounts, and coordinating internally. They're not the ones configuring campaigns, but they depend on campaign data to do their job, and my guess is they spend more time hunting for it than acting on it.

**Ops teams** are the execution layer — the ones actually configuring campaigns, making mid-flight adjustments, and managing exceptions. My assumption is that like most ops teams in this type of platform, a lot of their work is reactive: discovering issues through data diving rather than being surfaced to them proactively.

**The thesis behind this prototype:** Give AMs the data and insights they need without requiring them to dig for it. Give ops a structured, prioritized workflow instead of a reactive discovery process. Both problems have the same root cause — the platform has the data, but it doesn't surface it to the right person at the right moment with the right recommended action.

---

## The three screens

The portal uses a role switcher — the same three screens serve both AMs and Ops, with the content adapting based on who's logged in.

### Screen 1 — Portfolio

The home screen, shaped by role. For an AM, it shows a portfolio of brand accounts with campaign health indicators, budget pacing, and an AI insights panel surfacing opportunities ranked by urgency — budget alerts, retailer efficiency signals, renewal prompts — each with a specific, quantified recommendation attached. For an Ops user, the same screen surfaces an action queue: a prioritized list of issues that need resolution — campaigns not redeeming, retailer feed delays, configuration errors — rather than a passive monitoring view.

**Design principle:** Same underlying data, role-appropriate lens. The portal should know what each user needs to do with the information, not just show it.

---

### Screen 2 — Brand Detail (Liquid Death)

A drill-down from the portfolio into a single brand's campaigns. Shows all campaigns for that brand, an aggregated performance chart with LiveLift data (Incremental Lift %, CPUM by Day, Units Moved, Daily Spend, New-to-Brand Rate), and AI-surfaced opportunities scoped to that brand.

The "Since Last Optimization" date range is an assumption about a feature that doesn't necessarily exist today — the idea being that when a mid-flight change is made, the user can isolate performance to just the period after that change to answer: *Did it work?*

**Design principle:** Never show data without a recommended action. If the system can't tell you what to do about a number, it's just a dashboard.

---

### Screen 3 — Campaign Detail with LiveLift

The full in-flight performance view for a single campaign. The AI recommendation bar at the top translates data into a specific suggested action — "Walmart is 31% more efficient than Kroger, shifting $20K is projected to improve blended CPUM by $0.18." The retailer table shows CPUM broken out by publisher. Action buttons close the loop without leaving the screen.

**Design principle:** Insight → decision → action on one screen. Every handoff out of the portal costs time and trust.

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

This was a deliberate scoping decision. I've built platforms with a similar persona structure twice before — and in both cases, the internal efficiency gap was the highest-leverage place to start. AMs who can't easily get to the data they need to manage relationships, and ops teams working through issues reactively — those are patterns I recognize. Addressing them scales the platform's capacity without adding headcount, and creates the foundation that makes client-facing improvements meaningful.

I may be wrong about where Ibotta's biggest pain is today. That's part of what I'm hoping to learn on Friday.

---

## About the build

This prototype was built using **Claude Code** — Anthropic's AI-powered development tool. I directed the product vision, the UX structure, the interaction design, and the data architecture. Claude handled the implementation. The whole thing took a few hours over a weekend.

That's not a footnote — it's a demonstration. This is what AI-enabled product development looks like when a PM knows how to use it.
