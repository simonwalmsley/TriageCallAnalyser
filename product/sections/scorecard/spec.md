# Scorecard Section

## Overview
The Scorecard provides a detailed breakdown of the call analysis across 9 competencies. Users can see their overall score and drill down into individual competency evaluations with specific criteria checkmarks.

## Shell Integration
- **shell**: true
- This section renders within the application shell

## Layout Structure
| Area | Position | Description |
|------|----------|-------------|
| Header | Top | Logo + Account menu (from shell) |
| Content | Centre, scrollable | Overall score + 9 competency cards |
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
| Pre-headline | Centre | "CALL ANALYSIS" (small, muted, uppercase) |
| Headline | Centre | "Scorecard" |
| Overall score card | Centre | Total score, percentage, average |
| Section heading | Centre | "COMPETENCY SCORES" |
| Competency cards | Centre, scrollable | 9 cards, one per competency |

### Overall Score Card
| Element | Description |
|---------|-------------|
| Total score | "32 / 45" - large, prominent |
| Percentage | "71%" |
| Average | "Average: 3.6 / 5" |

### Competency Cards
Each of the 9 competencies displays:
- Competency number and name
- Score out of 5
- List of criteria with checkmark (✓) or cross (✗) indicators

**The 9 Competencies:**
1. The Greeting
2. Reason for Call
3. Needs Analysis
4. Qualification
5. Appointment
6. The Close
7. Rapport
8. Pitch & Present
9. Manage Objections

### Visual Indicators
| Indicator | Meaning |
|-----------|---------|
| ✓ (checkmark) | Criterion demonstrated |
| ✗ (cross) | Criterion not demonstrated |

**Score colour coding:**
| Score | Colour |
|-------|--------|
| 4-5 | Green/positive |
| 3 | Yellow/neutral |
| 1-2 | Red/needs work |

### Footer Bar (Fixed)
| Button | Action |
|--------|--------|
| ← Back to Results | → Last viewed results step |
| History | → History screen |
| New | → Input screen |

## User Interactions
| Action | Result |
|--------|--------|
| Scroll | View all 9 competency cards |
| Click "← Back to Results" | → Return to last viewed results step |
| Click "History" | → History screen |
| Click "New" | → Input screen |
| Click Logo | → Landing screen |

## States

### Default State
- Overall score card displayed at top
- All 9 competency cards displayed in scrollable list
- Footer bar fixed at bottom

### Empty State
- Not applicable (Scorecard is only accessible after analysis completes)

## Design Notes
- Content is scrollable (9 competency cards require scrolling)
- Footer bar stays fixed at bottom
- Overall score should be visually prominent at top
- Competency cards should have consistent spacing
- Checkmarks and crosses should be easy to scan at a glance
- Consider alternating card backgrounds for readability
- This screen is NOT part of the 4-step wizard (no floating arrows)

## Responsive Behaviour
- Mobile: Cards stack naturally, smaller text
- Tablet/Desktop: Centered content with max-width constraint
