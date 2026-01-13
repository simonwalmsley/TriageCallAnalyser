# Application Shell Specification

## Overview
TriageCall Analyser uses a minimal, ChatGPT-inspired shell with a clean header and persistent footer bar. The design prioritizes the content (transcript input and analysis results) while providing easy access to key actions.

## Navigation Structure
- **Scorecard** → View detailed 9-competency scoring breakdown
- **History** → Browse and revisit past analyses
- **New Analysis** → Start a new transcript analysis

## Header
- **Left:** TriageCall wordmark/logo (links to home/input)
- **Right:** User menu with avatar, display name, and logout option

## Footer Bar
Fixed footer with three action buttons:
- `Scorecard` — Navigate to score breakdown
- `History` — Navigate to analysis history
- `New Analysis` — Start fresh with new transcript input

The current view is indicated with a highlighted/active state.

## Layout Pattern
- Minimal header (logo + user menu)
- Full-width content area, centered max-width container
- Fixed footer bar at bottom of viewport
- Content scrolls independently between header and footer

## Responsive Behavior
- **Desktop:** Header with full logo, footer bar centered with spacing
- **Tablet:** Same as desktop, slightly reduced padding
- **Mobile:** Compact header, footer bar spans full width with equal button sizes

## Design Notes
- Uses teal as primary accent (active states, primary buttons)
- Uses emerald for success/positive states
- Neutral gray palette for backgrounds and text
- Inter font for all UI text
- Dark mode supported with `dark:` variants
- Footer bar hidden on authentication screens (sign-in, sign-up)
