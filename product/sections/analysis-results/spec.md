# Analysis Results Specification

## Overview
A wizard-style results experience that guides users through the four analysis outputs one step at a time. Single column, centred layout with floating navigation arrows and a fixed footer bar. Mobile-first, focused on one insight at a time.

## User Flows
- Land on Step 1 (Highest Leverage Moment) after processing completes
- Navigate forward/back through the 4 steps using floating arrows
- View progress via dot indicators
- Jump to Scorecard or History via footer bar
- Start a new analysis from footer bar

## UI Requirements
- Single column, centred layout (max ~700px content width)
- 4 separate result steps/views (not scrollable sections):
  1. Highest Leverage Moment (includes timestamp reference)
  2. What to Improve (may have multiple sub-points by competency)
  3. What Went Well (may have multiple sub-points by competency)
  4. Rule for Next Call (single actionable instruction)
- Each step has: pre-headline ("CALL ANALYSIS"), headline, body content
- Floating left/right arrows at vertical centre of content area (min 44px for touch)
- Left arrow greyed out on Step 1, right arrow greyed out on Step 4
- Tooltips on hover showing next/previous step name
- Progress dots below content showing current position (1 of 4)
- Fixed footer bar with 3 buttons: Scorecard, History, New
- Footer bar doesn't scroll with content

## Configuration
- shell: true
