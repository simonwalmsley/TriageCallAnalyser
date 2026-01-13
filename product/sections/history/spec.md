# History Section

## Overview
The History section allows users to browse and revisit their past call analyses. It displays a chronological list of analysis cards showing the date, time, and score for each analysis, with the most recent at the top.

## Shell Integration
- **shell**: true
- This section renders within the application shell

## Layout Structure
| Area | Position | Description |
|------|----------|-------------|
| Header | Top | Logo + Account menu (from shell) |
| Content | Centre, scrollable | List of past analysis cards |
| Footer bar | Bottom, fixed | Action buttons |

## Screen Elements

### Header (from Shell)
| Element | Position | Notes |
|---------|----------|-------|
| Logo "TRIAGECALL" | Top left | Clickable → Landing |
| Account menu | Top right | User dropdown |

### Content Area
| Element | Position | Notes |
|---------|----------|-------|
| Pre-headline | Centre | "YOUR ANALYSES" (small, muted, uppercase) |
| Headline | Centre | "History" |
| Analysis cards | Centre, scrollable | Clickable cards for each past analysis |

### History Card Structure
Each card displays:
- Title: "Call Analysis" (default for MVP)
- Date/Time: When analysis was performed (Australian format: DD Month YYYY, HH:MM AM/PM)
- Score: Total score with percentage (e.g., "Score: 32/45 (71%)")

### Footer Bar (Fixed)
| Button | Action | Visibility |
|--------|--------|------------|
| ← Back to Results | → Last viewed results step | Only shown if navigated from results |
| New | → Input screen | Always visible |

## User Flows
- View list of past analyses (most recent first, chronological descending)
- Click an analysis card → Navigate to Results Step 1 for that analysis
- Click "Back to Results" → Return to last viewed results step
- Click "New" → Navigate to input screen
- Click Logo → Navigate to landing screen
- Scroll → View more past analyses

## States

### Default State (has history)
- List of clickable analysis cards
- Cards have subtle hover state (background change, cursor pointer, optional elevation)
- Most recent analysis at top
- No pagination (all shown, scrollable)

### Empty State (no history)
- Message: "No analyses yet."
- Subtext: "Start your first analysis to see your history here."
- CTA button: [Start Analysis] → Input screen
- Footer shows only "New" button

### Hover State (card)
- Subtle background change
- Cursor changes to pointer
- Optional: slight elevation/shadow

## Design Notes
- Single column, centred content
- Cards should clearly indicate they're clickable
- Consistent card sizing and spacing
- Score displayed prominently for quick scanning
- Consider visual score indicator (colour coding) for quick comparison
- Footer bar fixed at bottom
- No floating arrows (not part of wizard flow)

## Configuration
- shell: true
