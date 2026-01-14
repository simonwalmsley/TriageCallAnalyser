# History

## Overview

Browse and revisit past call analyses. Chronological list with scores for quick comparison.

## User Flows

1. **Browse Analyses** — Scroll through past analyses (most recent first)
2. **Revisit Analysis** — Click card to view full results
3. **Start New** — Begin fresh analysis
4. **First-Time User** — See empty state with CTA

## Components Provided

- `History` — Analysis list with cards and empty state

## Callback Props

| Callback | Description |
|----------|-------------|
| `onSelectAnalysis` | View selected analysis |
| `onBackToResults` | Return to last viewed results |
| `onNew` | Start new analysis |
| `onStartAnalysis` | Start first analysis (empty state) |

## Design Notes

- Renders inside shell
- Color-coded score indicators
- Staggered card animations
- Empty state with illustration and CTA
- Cards show date, time, and score percentage
