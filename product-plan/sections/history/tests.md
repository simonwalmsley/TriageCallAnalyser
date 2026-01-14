# Test Instructions: History

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Test the history list: populated and empty states, card interactions, score color coding, and navigation.

---

## User Flow Tests

### Flow 1: Browse Past Analyses

**Steps:**
1. Navigate to `/history`
2. See list of past analyses
3. Each card shows date, time, and score
4. Scroll to view older analyses

**Expected Results:**
- [ ] Heading shows "History"
- [ ] Pre-headline shows "YOUR ANALYSES"
- [ ] Cards display in chronological order (most recent first)
- [ ] Each card shows formatted date (e.g., "12 December 2025, 2:30 PM")

### Flow 2: Revisit an Analysis

**Steps:**
1. Click on an analysis card

**Expected Results:**
- [ ] `onSelectAnalysis` callback called with analysis ID
- [ ] Navigates to `/results` for that analysis

### Flow 3: Start New Analysis

**Steps:**
1. Click "New" in footer bar

**Expected Results:**
- [ ] `onNew` callback called
- [ ] Navigates to `/` (Call Input)

---

## Empty State Tests

### No Analyses Yet (First-Time User)

**Setup:**
- `historyItems` is empty array `[]`

**Expected Results:**
- [ ] Empty state illustration displayed
- [ ] Message: "No analyses yet."
- [ ] Subtext: "Start your first analysis to see your history here."
- [ ] CTA button: "Start Analysis"
- [ ] Click CTA calls `onStartAnalysis`

### After Deleting Last Analysis

**Setup:**
- User had analyses, now list is empty

**Expected Results:**
- [ ] Same empty state displays
- [ ] Footer "New" button still visible

---

## History Card Tests

### Card Display

- [ ] Shows title (e.g., "Call Analysis")
- [ ] Shows formatted date and time
- [ ] Shows score as percentage (e.g., "71%")
- [ ] Shows points (e.g., "32/45")
- [ ] Shows circular progress indicator

### Score Color Coding

| Percentage | Expected Color |
|------------|---------------|
| 80%+ | Emerald |
| 60-79% | Teal |
| 40-59% | Amber |
| Below 40% | Red |

### Hover State

- [ ] Card background changes on hover
- [ ] Border color changes to teal
- [ ] Shadow increases
- [ ] Cursor shows pointer

### Staggered Animation

- [ ] Cards animate in with staggered delay
- [ ] First card appears immediately
- [ ] Subsequent cards delayed by 50ms each

---

## Footer Bar Tests

### With "Back to Results" (navigated from results)

**Setup:**
- `showBackToResults` is true

**Expected Results:**
- [ ] Shows "Back to Results" button with left arrow
- [ ] Shows "New" button
- [ ] Click "Back to Results" calls `onBackToResults`

### Without "Back to Results"

**Setup:**
- `showBackToResults` is false

**Expected Results:**
- [ ] Only "New" button shown

---

## Callbacks

- [ ] `onSelectAnalysis(id)` called with analysis ID when card clicked
- [ ] `onBackToResults` called when back button clicked
- [ ] `onNew` called when new button clicked
- [ ] `onStartAnalysis` called when empty state CTA clicked

---

## Sample Test Data

```typescript
const historyItems = [
  {
    id: 'analysis-1',
    title: 'Call Analysis',
    timestamp: '2025-12-12T14:30:00Z',
    formattedDate: '12 December 2025, 2:30 PM',
    totalPoints: 32,
    maxPoints: 45,
    percentage: 71
  },
  {
    id: 'analysis-2',
    title: 'Call Analysis',
    timestamp: '2025-12-11T10:15:00Z',
    formattedDate: '11 December 2025, 10:15 AM',
    totalPoints: 38,
    maxPoints: 45,
    percentage: 84
  }
]

const emptyState = {
  message: 'No analyses yet.',
  subtext: 'Start your first analysis to see your history here.',
  ctaLabel: 'Start Analysis'
}

// Empty state test
const emptyHistoryItems = []
```
