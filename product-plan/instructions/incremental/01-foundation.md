# Milestone 1: Foundation

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** None

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

Set up the foundational elements: design tokens, data model types, routing structure, and application shell.

## What to Implement

### 1. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

### 2. Data Model Types

Create TypeScript interfaces for your core entities:

- See `product-plan/data-model/types.ts` for interface definitions
- See `product-plan/data-model/README.md` for entity relationships

**Core Entities:**
- `User` — Authenticated user account
- `Analysis` — Complete call analysis record
- `CompetencyScore` — Individual competency score (9 per analysis)

### 3. Routing Structure

Create routes for each section:

| Route | Section | Notes |
|-------|---------|-------|
| `/` | Call Input | Landing page |
| `/auth` | Authentication | Sign-in/sign-up (no shell) |
| `/results` | Analysis Results | 4-step wizard |
| `/scorecard` | Scorecard | 9-competency breakdown |
| `/history` | History | Past analyses list |

### 4. Application Shell

Copy the shell components from `product-plan/shell/components/` to your project:

- `AppShell.tsx` — Main layout wrapper
- `Header.tsx` — Header with logo and user menu
- `FooterBar.tsx` — Fixed footer with navigation buttons
- `UserMenu.tsx` — User dropdown menu

**Wire Up Navigation:**

The shell provides navigation via callback props. Connect to your router:

| Callback | Destination |
|----------|-------------|
| `onNavigateHome` | `/` (Call Input) |
| `onNavigateScorecard` | `/scorecard` |
| `onNavigateHistory` | `/history` |
| `onNavigateNew` | `/` (reset input state) |
| `onLogout` | Sign out and redirect to auth |

**User Menu:**

The UserMenu component expects:
- `user.fullName` — Display name
- `user.email` — Email address
- `onLogout` — Logout callback

**Shell Usage:**

Wrap shell-enabled sections (Analysis Results, Scorecard, History) with AppShell. Authentication and Call Input render standalone (no shell).

## Files to Reference

- `product-plan/design-system/` — Design tokens
- `product-plan/data-model/` — Type definitions
- `product-plan/shell/README.md` — Shell design intent
- `product-plan/shell/components/` — Shell React components

## Done When

- [ ] Design tokens are configured (colors, fonts)
- [ ] Data model types are defined
- [ ] Routes exist for all sections (can be placeholder pages)
- [ ] Shell renders with header and footer bar
- [ ] Navigation callbacks route correctly
- [ ] User menu shows user info and logout works
- [ ] Responsive on mobile
