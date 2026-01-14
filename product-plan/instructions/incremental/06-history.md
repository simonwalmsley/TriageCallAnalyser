# Milestone 6: History

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-5 complete

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

Implement the analysis history view where users can browse and revisit past call analyses.

## Overview

History enables users to track their improvement over time by revisiting past analyses. The chronological list shows scores at a glance, making it easy to identify trends.

**Key Functionality:**
- Display list of past analyses (most recent first)
- Show date, time, and score for each analysis
- Click to view full analysis results
- Color-code scores for quick comparison
- Empty state for first-time users
- Start new analysis from footer

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/history/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/history/components/`:

- `History.tsx` — Analysis list with cards and empty state

### Data Layer

The components expect these data shapes:

```typescript
interface HistoryItem {
  id: string
  title: string
  timestamp: string
  formattedDate: string
  totalPoints: number
  maxPoints: number
  percentage: number
}

interface EmptyState {
  message: string
  subtext: string
  ctaLabel: string
}
```

You'll need to:
- Fetch user's analyses from database (ordered by date descending)
- Format timestamps for display (Australian format)
- Calculate percentage from points

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onSelectAnalysis` | Navigate to `/results` with selected analysis ID |
| `onBackToResults` | Navigate back to last viewed results step |
| `onNew` | Navigate to `/` and reset input |
| `onStartAnalysis` | Navigate to `/` (from empty state) |

### Empty States

Handle the case when user has no past analyses:

- **Empty state message:** "No analyses yet."
- **Subtext:** "Start your first analysis to see your history here."
- **CTA button:** "Start Analysis" → navigates to Call Input

### Shell Integration

This section renders **inside** the application shell.

## Files to Reference

- `product-plan/sections/history/README.md` — Feature overview and design intent
- `product-plan/sections/history/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/history/components/` — React components
- `product-plan/sections/history/types.ts` — TypeScript interfaces
- `product-plan/sections/history/sample-data.json` — Test data

## Expected User Flows

### Flow 1: Browse Past Analyses

1. User navigates to `/history`
2. User sees list of past analyses (most recent first)
3. Each card shows date, time, and score
4. User scrolls to view older analyses
5. **Outcome:** User can compare scores over time

### Flow 2: Revisit an Analysis

1. User clicks on an analysis card
2. User is taken to `/results` for that analysis
3. **Outcome:** User views the full analysis details

### Flow 3: First-Time User (Empty State)

1. New user navigates to `/history`
2. Empty state message is displayed
3. User clicks "Start Analysis" button
4. **Outcome:** User is taken to Call Input to create first analysis

### Flow 4: Start New Analysis

1. User clicks "New" in footer bar
2. **Outcome:** User is taken to Call Input page

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] History list displays all user's analyses
- [ ] Analyses sorted by date (most recent first)
- [ ] Each card shows date, time, and score
- [ ] Score colors indicate performance level
- [ ] Clicking card navigates to that analysis's results
- [ ] Empty state displays when no analyses exist
- [ ] "Start Analysis" CTA works from empty state
- [ ] Footer navigation works (Back to Results, New)
- [ ] Responsive on mobile
