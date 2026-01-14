# Test Instructions: Scorecard

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Test the 9-competency scorecard: overall score display, individual competency cards, criteria checklists, and score color coding.

---

## User Flow Tests

### Flow 1: View Complete Scorecard

**Steps:**
1. Navigate to `/scorecard`
2. See overall score card at top
3. Scroll to see all 9 competency cards
4. Each card shows score and criteria

**Expected Results:**
- [ ] Overall score displays (e.g., "32/45 (71%)")
- [ ] Average score displays (e.g., "3.6")
- [ ] All 9 competency cards render
- [ ] Cards show competency number, name, and score

### Flow 2: Identify Areas for Improvement

**Steps:**
1. Scan competency cards by color
2. Identify low-score cards
3. View criteria to see what was missed

**Expected Results:**
- [ ] Low scores (1-2) show red/amber color
- [ ] High scores (4-5) show emerald/teal color
- [ ] Criteria show checkmark (passed) or X (failed)

### Flow 3: Return to Results

**Steps:**
1. Click "Back to Results" in footer

**Expected Results:**
- [ ] `onBackToResults` callback called
- [ ] Returns to results wizard

---

## Overall Score Tests

- [ ] Shows total points (e.g., "32")
- [ ] Shows max points (e.g., "45")
- [ ] Shows percentage (e.g., "71%")
- [ ] Shows average score (e.g., "3.6")
- [ ] Large circular progress indicator

---

## Competency Card Tests

### Card Display

- [ ] Shows competency number (1-9)
- [ ] Shows competency name
- [ ] Shows score out of max (e.g., "4/5")
- [ ] Shows all criteria as checklist

### Criteria Checklist

- [ ] Passed criteria show green checkmark
- [ ] Failed criteria show red X
- [ ] Criteria labels are readable

### Score Color Coding

| Score | Expected Color |
|-------|---------------|
| 5/5 | Emerald |
| 4/5 | Teal |
| 3/5 | Neutral |
| 2/5 | Amber |
| 1/5 | Red |

---

## The 9 Competencies

Verify all 9 competencies render:

1. [ ] The Greeting
2. [ ] Reason for Call
3. [ ] Needs Analysis
4. [ ] Qualification
5. [ ] Appointment
6. [ ] The Close
7. [ ] Rapport
8. [ ] Pitch & Present
9. [ ] Manage Objections

---

## Callbacks

- [ ] `onBackToResults` navigates back to results
- [ ] `onHistory` navigates to history
- [ ] `onNew` starts new analysis

---

## Sample Test Data

```typescript
const overallScore = {
  totalPoints: 32,
  maxPoints: 45,
  percentage: 71,
  averageScore: 3.6
}

const competencyScore = {
  id: 'comp-1',
  number: 1,
  name: 'The Greeting',
  score: 4,
  maxScore: 5,
  criteria: [
    { id: 'c1', label: 'Introduced themselves', passed: true },
    { id: 'c2', label: 'Asked for customer name', passed: true },
    { id: 'c3', label: 'Set a friendly tone', passed: false }
  ]
}
```
