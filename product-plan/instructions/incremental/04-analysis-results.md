# Milestone 4: Analysis Results

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-3 complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography, spacing)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Backend API endpoints and database schema
- Authentication and authorization
- Data fetching and state management
- Business logic and validation
- Integration of the provided UI components with real data

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and API calls
- **DO** replace sample data with real data from your backend
- **DO** implement proper error handling and loading states
- **DO** implement empty states when no records exist (first-time users, after deletions)
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate — focus on the backend and data layer

---

## Goal

Implement the 4-step wizard that displays analysis results, guiding users through each insight one at a time.

## Overview

Analysis Results presents the AI-generated analysis in a focused, step-by-step format. Users navigate through four insights without being overwhelmed by information.

**Key Functionality:**
- Display Step 1: The Single Highest-Leverage Moment
- Display Step 2: What to Improve
- Display Step 3: What Went Well
- Display Step 4: Your Rule for the Next Call
- Navigate between steps with arrows and progress dots
- Jump to Scorecard, History, or start new analysis from footer

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/analysis-results/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/analysis-results/components/`:

- `AnalysisResults.tsx` — Main 4-step wizard with all content views

### Data Layer

The components expect these data shapes:

```typescript
interface Analysis {
  id: string
  createdAt: string
  totalScore: number
  maxScore: number
  scorePercentage: number
  highestLeverageMoment: HighestLeverageMoment
  whatToImprove: FeedbackPoint[]
  whatWentWell: FeedbackPoint[]
  ruleForNextCall: RuleForNextCall
}

type ResultStep = 1 | 2 | 3 | 4
```

You'll need to:
- Fetch analysis by ID from database
- Track current step in component state or URL
- Handle step navigation

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onNextStep` | Increment step (max 4) |
| `onPreviousStep` | Decrement step (min 1) |
| `onGoToStep` | Jump to specific step (1-4) |
| `onGoToTimestamp` | Navigate to transcript timestamp (future feature) |
| `onViewScorecard` | Navigate to `/scorecard` |
| `onViewHistory` | Navigate to `/history` |
| `onNewAnalysis` | Navigate to `/` and reset input |

### Shell Integration

This section renders **inside** the application shell. The shell provides the header and user menu; the component provides its own footer bar.

## Files to Reference

- `product-plan/sections/analysis-results/README.md` — Feature overview and design intent
- `product-plan/sections/analysis-results/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/analysis-results/components/` — React components
- `product-plan/sections/analysis-results/types.ts` — TypeScript interfaces
- `product-plan/sections/analysis-results/sample-data.json` — Test data

## Expected User Flows

### Flow 1: Navigate Through All Steps

1. User lands on Step 1 (Highest-Leverage Moment)
2. User clicks right arrow to go to Step 2
3. User continues navigating to Steps 3 and 4
4. Right arrow is disabled on Step 4
5. **Outcome:** User has seen all four insights

### Flow 2: Jump to Specific Step

1. User is on Step 1
2. User clicks the third progress dot
3. **Outcome:** User jumps directly to Step 3

### Flow 3: Navigate to Scorecard

1. User clicks "Scorecard" in footer bar
2. **Outcome:** User navigates to `/scorecard`

### Flow 4: Start New Analysis

1. User clicks "New" in footer bar
2. **Outcome:** User navigates to `/` with fresh input state

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Step 1 displays highest-leverage moment with timestamp
- [ ] Step 2 displays improvement points with competency badges
- [ ] Step 3 displays what went well with competency badges
- [ ] Step 4 displays rule for next call with example
- [ ] Arrow navigation works (disabled at boundaries)
- [ ] Progress dots show current step and allow jumping
- [ ] Footer bar navigates to Scorecard, History, New
- [ ] Mobile navigation buttons work (Back/Next)
- [ ] Analysis data fetched from database
- [ ] Responsive on mobile
