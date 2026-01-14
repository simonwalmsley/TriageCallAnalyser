# Milestone 5: Scorecard

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-4 complete

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

Implement the detailed 9-competency scoring breakdown with criteria evaluation.

## Overview

The Scorecard provides granular visibility into the call analysis. Users see their overall score and can drill down into each of the 9 competencies to understand exactly which criteria were met or missed.

**Key Functionality:**
- Display overall score (total points, percentage, average)
- Display 9 competency cards with individual scores
- Show criteria checklist for each competency (passed/failed)
- Color-code scores for quick visual scanning
- Navigate back to Results, to History, or start new analysis

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/scorecard/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/scorecard/components/`:

- `Scorecard.tsx` — Overall score and 9 competency cards

### Data Layer

The components expect these data shapes:

```typescript
interface OverallScore {
  totalPoints: number
  maxPoints: number
  percentage: number
  averageScore: number
}

interface CompetencyScore {
  id: string
  number: number
  name: string
  score: number
  maxScore: number
  criteria: Criterion[]
}

interface Criterion {
  id: string
  label: string
  passed: boolean
}
```

You'll need to:
- Fetch analysis with competency scores from database
- Calculate overall score from individual competency scores

### The 9 Competencies

1. The Greeting
2. Reason for Call
3. Needs Analysis
4. Qualification
5. Appointment
6. The Close
7. Rapport
8. Pitch & Present
9. Manage Objections

Each competency is scored 1-5 based on specific criteria defined in the Triage Call Framework.

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onBackToResults` | Navigate back to last viewed results step |
| `onHistory` | Navigate to `/history` |
| `onNew` | Navigate to `/` and reset input |

### Shell Integration

This section renders **inside** the application shell.

## Files to Reference

- `product-plan/sections/scorecard/README.md` — Feature overview and design intent
- `product-plan/sections/scorecard/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/scorecard/components/` — React components
- `product-plan/sections/scorecard/types.ts` — TypeScript interfaces
- `product-plan/sections/scorecard/sample-data.json` — Test data

## Expected User Flows

### Flow 1: View Complete Scorecard

1. User navigates to `/scorecard`
2. User sees overall score card at top (e.g., "32/45 (71%)")
3. User scrolls to see all 9 competency cards
4. Each card shows score and criteria checklist
5. **Outcome:** User understands full scoring breakdown

### Flow 2: Identify Areas for Improvement

1. User scans competency cards by color
2. Red/low-score cards indicate weak areas
3. User expands/views criteria to see what was missed
4. **Outcome:** User knows which specific behaviors to improve

### Flow 3: Return to Results

1. User clicks "Back to Results" in footer
2. **Outcome:** User returns to the results wizard

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Overall score displays (total, percentage, average)
- [ ] All 9 competency cards render with scores
- [ ] Criteria checklists show passed/failed indicators
- [ ] Score colors indicate performance level (green/yellow/red)
- [ ] Footer navigation works (Back to Results, History, New)
- [ ] Competency scores calculated correctly from criteria
- [ ] Scrollable layout for all 9 cards
- [ ] Responsive on mobile
