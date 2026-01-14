# Test Instructions: Analysis Results

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Test the 4-step wizard: navigation between steps, content display, progress indicators, and footer actions.

---

## User Flow Tests

### Flow 1: Navigate Through All Steps

**Steps:**
1. Land on Step 1 (Highest-Leverage Moment)
2. Click right arrow to go to Step 2
3. Continue to Steps 3 and 4
4. Verify right arrow disabled on Step 4

**Expected Results:**
- [ ] Step 1 shows "The Single Highest-Leverage Moment" heading
- [ ] Step 2 shows "What to Improve" heading
- [ ] Step 3 shows "What Went Well" heading
- [ ] Step 4 shows "Your Rule for the Next Call" heading
- [ ] Left arrow disabled on Step 1
- [ ] Right arrow disabled on Step 4

### Flow 2: Jump to Specific Step

**Steps:**
1. User is on Step 1
2. Click third progress dot

**Expected Results:**
- [ ] Jumps directly to Step 3
- [ ] Third dot shows active state (scaled up, teal color)

### Flow 3: Click Timestamp Link

**Steps:**
1. On Step 1, click "Go to 4:32 in the transcript" button

**Expected Results:**
- [ ] `onGoToTimestamp` callback called with "4:32"
- [ ] Button has hover state

### Flow 4: Navigate to Scorecard

**Steps:**
1. Click "Scorecard" in footer bar

**Expected Results:**
- [ ] `onViewScorecard` callback called
- [ ] Navigates to `/scorecard`

### Flow 5: Start New Analysis

**Steps:**
1. Click "New" in footer bar

**Expected Results:**
- [ ] `onNewAnalysis` callback called
- [ ] Navigates to `/` with fresh state

---

## Step Content Tests

### Step 1: Highest-Leverage Moment

- [ ] Shows description text
- [ ] Shows impact text
- [ ] Shows timestamp button "Go to [timestamp] in the transcript"
- [ ] Timestamp button is clickable

### Step 2: What to Improve

- [ ] Shows list of improvement points
- [ ] Each point has competency badge (amber)
- [ ] Shows title, description, and evidence quote

### Step 3: What Went Well

- [ ] Shows list of positive points
- [ ] Each point has competency badge (emerald)
- [ ] Shows title, description, and evidence quote

### Step 4: Rule for Next Call

- [ ] Shows rule in highlighted card
- [ ] Shows example in quoted block
- [ ] Shows rationale text

---

## Navigation Tests

### Desktop Navigation (lg+)

- [ ] Left/right arrows visible as floating buttons
- [ ] Arrows positioned at screen edges

### Mobile Navigation (below lg)

- [ ] Floating arrows hidden
- [ ] "Back" and "Next" buttons shown below progress dots
- [ ] "Back" button disabled on Step 1
- [ ] "Next" styled as primary (teal) when enabled

### Progress Dots

- [ ] 4 dots displayed
- [ ] Current step dot is larger and teal
- [ ] Inactive dots are neutral gray
- [ ] Clicking dot jumps to that step

---

## Callbacks

- [ ] `onNextStep` increments step (max 4)
- [ ] `onPreviousStep` decrements step (min 1)
- [ ] `onGoToStep` jumps to specific step
- [ ] `onGoToTimestamp` called with timestamp string
- [ ] `onViewScorecard` navigates to scorecard
- [ ] `onViewHistory` navigates to history
- [ ] `onNewAnalysis` starts new analysis

---

## Sample Test Data

```typescript
const analysis = {
  id: 'test-1',
  highestLeverageMoment: {
    timestamp: '4:32',
    description: 'The moment description...',
    impact: 'The impact explanation...'
  },
  whatToImprove: [
    { competency: 'Needs Analysis', title: 'Title', description: '...', evidence: '...' }
  ],
  whatWentWell: [
    { competency: 'Rapport', title: 'Title', description: '...', evidence: '...' }
  ],
  ruleForNextCall: {
    rule: 'Before presenting solutions...',
    example: '"What would solving this mean for you?"',
    rationale: 'This ensures...'
  }
}
```
