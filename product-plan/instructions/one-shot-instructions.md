# TriageCall Analyser — Complete Implementation Instructions

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements)
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
- **DO** implement empty states when no records exist
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate — focus on the backend and data layer

---

## Test-Driven Development

Each section includes a `tests.md` file with detailed test-writing instructions. These are **framework-agnostic**.

**For each section:**
1. Read `product-plan/sections/[section-id]/tests.md`
2. Write failing tests for key user flows
3. Implement the feature to make tests pass
4. Refactor while keeping tests green

---

## Product Overview

TriageCall Analyser is an AI-powered coaching tool that analyses sales triage calls and pinpoints the single highest-leverage moment for improvement.

**Sections:**
1. Authentication — Sign-in, sign-up, password reset
2. Call Input — Transcript paste/upload and processing
3. Analysis Results — 4-step wizard with insights
4. Scorecard — 9-competency scoring breakdown
5. History — Browse past analyses

**Data Model:**
- User → has many Analysis
- Analysis → has 9 CompetencyScore records

---

# Milestone 1: Foundation

## Goal

Set up design tokens, data model types, routing, and application shell.

## What to Implement

### 1. Design Tokens

- See `product-plan/design-system/tokens.css`
- See `product-plan/design-system/tailwind-colors.md`
- See `product-plan/design-system/fonts.md`

### 2. Data Model Types

- See `product-plan/data-model/types.ts`
- See `product-plan/data-model/README.md`

### 3. Routing

| Route | Section |
|-------|---------|
| `/` | Call Input |
| `/auth` | Authentication |
| `/results` | Analysis Results |
| `/scorecard` | Scorecard |
| `/history` | History |

### 4. Application Shell

Copy from `product-plan/shell/components/`:
- `AppShell.tsx`
- `Header.tsx`
- `FooterBar.tsx`
- `UserMenu.tsx`

## Done When

- [ ] Design tokens configured
- [ ] Data model types defined
- [ ] Routes exist for all sections
- [ ] Shell renders with navigation
- [ ] Responsive on mobile

---

# Milestone 2: Authentication

## Goal

Implement sign-in, sign-up, and password reset flows.

## Components

Copy from `product-plan/sections/authentication/components/`:
- `AuthenticationForm.tsx`

## Tests

See `product-plan/sections/authentication/tests.md`

## Done When

- [ ] Sign-up creates new user
- [ ] Sign-in authenticates users
- [ ] Password reset works
- [ ] Validation errors display
- [ ] Redirects to Call Input on success

---

# Milestone 3: Call Input

## Goal

Implement transcript input and processing screen.

## Components

Copy from `product-plan/sections/call-input/components/`:
- `CallInput.tsx`
- `ProcessingScreen.tsx`

## Tests

See `product-plan/sections/call-input/tests.md`

## Done When

- [ ] Text paste works
- [ ] File upload works
- [ ] Processing animation displays
- [ ] Analysis saved to database
- [ ] Redirects to Results

---

# Milestone 4: Analysis Results

## Goal

Implement 4-step wizard for viewing analysis output.

## Components

Copy from `product-plan/sections/analysis-results/components/`:
- `AnalysisResults.tsx`

## Tests

See `product-plan/sections/analysis-results/tests.md`

## Done When

- [ ] All 4 steps display correctly
- [ ] Navigation arrows work
- [ ] Progress dots work
- [ ] Footer navigation works
- [ ] Timestamp link is clickable

---

# Milestone 5: Scorecard

## Goal

Implement 9-competency scoring breakdown.

## Components

Copy from `product-plan/sections/scorecard/components/`:
- `Scorecard.tsx`

## Tests

See `product-plan/sections/scorecard/tests.md`

## Done When

- [ ] Overall score displays
- [ ] All 9 competencies render
- [ ] Criteria checklists show
- [ ] Color coding works

---

# Milestone 6: History

## Goal

Implement analysis history list.

## Components

Copy from `product-plan/sections/history/components/`:
- `History.tsx`

## Tests

See `product-plan/sections/history/tests.md`

## Done When

- [ ] History list displays
- [ ] Empty state works
- [ ] Clicking card navigates to results
- [ ] Score colors indicate performance
