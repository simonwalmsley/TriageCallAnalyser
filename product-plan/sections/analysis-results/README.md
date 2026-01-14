# Analysis Results

## Overview

4-step wizard displaying AI analysis output: highest-leverage moment, improvements, strengths, and next-call rule.

## User Flows

1. **Navigate Steps** — Move through 4 steps with arrows or dots
2. **Jump to Timestamp** — Click timestamp link to reference transcript
3. **View Scorecard** — Access detailed scoring breakdown
4. **Start New** — Begin fresh analysis

## Components Provided

- `AnalysisResults` — Complete 4-step wizard with all content views

## Callback Props

| Callback | Description |
|----------|-------------|
| `onNextStep` | Move to next step |
| `onPreviousStep` | Move to previous step |
| `onGoToStep` | Jump to specific step |
| `onGoToTimestamp` | Navigate to transcript timestamp |
| `onViewScorecard` | Navigate to scorecard |
| `onViewHistory` | Navigate to history |
| `onNewAnalysis` | Start new analysis |

## The 4 Steps

1. **Highest-Leverage Moment** — Single most impactful moment with timestamp
2. **What to Improve** — Improvement points by competency
3. **What Went Well** — Positive points by competency
4. **Rule for Next Call** — Actionable instruction with example

## Design Notes

- Renders inside shell
- Floating nav arrows on desktop
- Inline nav buttons on mobile
- Progress dots for step indication
