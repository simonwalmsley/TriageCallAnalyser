# Scorecard

## Overview

Detailed 9-competency scoring breakdown with criteria evaluation for each competency.

## User Flows

1. **View Overall Score** — See total points, percentage, and average
2. **Review Competencies** — Scroll through 9 competency cards
3. **Check Criteria** — See passed/failed criteria for each competency
4. **Return to Results** — Navigate back to analysis wizard

## Components Provided

- `Scorecard` — Overall score card and 9 competency cards

## Callback Props

| Callback | Description |
|----------|-------------|
| `onBackToResults` | Return to results wizard |
| `onHistory` | Navigate to history |
| `onNew` | Start new analysis |

## The 9 Competencies

1. The Greeting
2. Reason for Call
3. Needs Analysis
4. Qualification
5. Appointment
6. The Close
7. Rapport
8. Pitch & Present
9. Manage Objections

## Design Notes

- Renders inside shell
- Color-coded scores (emerald/teal/amber/red)
- Criteria shown as checklist with checkmarks/X marks
- Large circular progress indicator for overall score
