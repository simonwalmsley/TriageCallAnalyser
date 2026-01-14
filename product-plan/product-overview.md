# TriageCall Analyser — Product Overview

## Summary

TriageCall Analyser is an AI-powered coaching tool that analyses sales triage calls and pinpoints the single highest-leverage moment for improvement—delivering instant, evidence-backed feedback with a clear rule for the next call.

**Key Problems Solved:**

1. **Slow Skill Development** — Sales reps repeat mistakes because diagnosing call quality is manual and delayed. TriageCall provides instant AI analysis.

2. **Subjective Coaching** — Managers interpret performance subjectively. TriageCall delivers structured scoring across 9 competencies with evidence directly from the call.

3. **Overwhelming Feedback** — Traditional reviews surface too many issues at once. TriageCall focuses on the single highest-leverage moment.

4. **No Self-Coaching Ability** — Reps must wait for manager availability. TriageCall enables immediate self-analysis.

## Planned Sections

1. **Authentication** — User sign-in, sign-up, and session management with Supabase Auth.

2. **Call Input** — Landing page with transcript paste/upload and processing state.

3. **Analysis Results** — The 4-step wizard displaying highest-leverage moment, improvements, strengths, and next-call rule.

4. **Scorecard** — Detailed 9-competency scoring breakdown with criteria evaluation.

5. **History** — Browse and revisit past analyses.

## Data Model

**Entities:**
- **User** — A person who uses the system to analyse their triage calls
- **Analysis** — A complete call analysis record with transcript, AI-generated output, and score
- **CompetencyScore** — An individual score for one of the 9 competencies (each analysis has exactly 9)

**Relationships:**
- User has many Analysis
- Analysis belongs to User
- Analysis has many CompetencyScore (exactly 9)
- CompetencyScore belongs to Analysis

## Design System

**Colors:**
- Primary: `teal` — Used for buttons, links, key accents
- Secondary: `emerald` — Used for success states, positive indicators
- Neutral: `neutral` — Used for backgrounds, text, borders

**Typography:**
- Heading: Inter
- Body: Inter
- Mono: JetBrains Mono

## Implementation Sequence

Build this product in milestones:

1. **Foundation** — Set up design tokens, data model types, routing, and application shell
2. **Authentication** — User sign-in, sign-up, password reset flows
3. **Call Input** — Transcript input and processing screen
4. **Analysis Results** — 4-step wizard for viewing analysis output
5. **Scorecard** — 9-competency scoring breakdown
6. **History** — Browse and revisit past analyses

Each milestone has a dedicated instruction document in `product-plan/instructions/`.
