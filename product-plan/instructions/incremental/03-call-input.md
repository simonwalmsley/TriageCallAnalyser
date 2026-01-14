# Milestone 3: Call Input

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) and Milestone 2 (Authentication) complete

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

Implement the transcript input interface and processing screen for call analysis.

## Overview

Call Input is the entry point for analysing calls. Users paste or upload transcripts, then see a processing animation while the AI analyses the call.

**Key Functionality:**
- Display value proposition for logged-out users
- Paste transcript text into textarea
- Upload transcript files (.txt, .md, .json)
- Remove uploaded files
- Start analysis and show processing animation
- Auto-navigate to Results when analysis completes

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/call-input/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/call-input/components/`:

- `CallInput.tsx` — Main input interface with textarea and upload
- `ProcessingScreen.tsx` — Loading animation during analysis

### Data Layer

The components expect these data shapes:

```typescript
interface InputState {
  status: 'empty' | 'hasText' | 'hasFile' | 'processing'
  hasContent: boolean
  isProcessing: boolean
}

interface UploadedFile {
  name: string
  size: number
  type: string
}
```

You'll need to:
- Manage input state (text/file content)
- Send transcript to AI analysis API
- Store analysis results in database
- Handle processing state transitions

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onTextChange` | Update transcript text as user types |
| `onFileUpload` | Handle file selection, read content |
| `onFileRemove` | Clear uploaded file |
| `onStartAnalysis` | Send to AI, show processing, navigate on complete |
| `onLogIn` | Navigate to auth (logged-out state) |
| `onSignUp` | Navigate to auth (logged-out state) |

### Processing Flow

1. User clicks "Start Analysis"
2. Switch to ProcessingScreen component
3. Call AI analysis API (async)
4. Show processing animation for minimum 5-10 seconds
5. On API completion, save Analysis to database
6. Navigate to `/results` (Step 1)

### No Shell

This section renders **without** the application shell. It has its own header (logo + auth buttons or user menu).

## Files to Reference

- `product-plan/sections/call-input/README.md` — Feature overview and design intent
- `product-plan/sections/call-input/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/call-input/components/` — React components
- `product-plan/sections/call-input/types.ts` — TypeScript interfaces
- `product-plan/sections/call-input/sample-data.json` — Test data

## Expected User Flows

### Flow 1: Paste Transcript and Analyse

1. User navigates to `/` (logged in)
2. User pastes transcript text into textarea
3. "Start Analysis" button appears
4. User clicks "Start Analysis"
5. Processing screen displays with animation
6. **Outcome:** Analysis completes, user redirected to `/results`

### Flow 2: Upload File and Analyse

1. User clicks "Upload" button
2. User selects .txt, .md, or .json file
3. File name and size shown, "Start Analysis" button appears
4. User clicks "Start Analysis"
5. Processing screen displays
6. **Outcome:** Analysis completes, user redirected to `/results`

### Flow 3: Remove Uploaded File

1. User has uploaded a file
2. User clicks "Remove" on the file display
3. **Outcome:** File removed, textarea shown empty

### Flow 4: Logged-Out User

1. Anonymous user visits `/`
2. Value proposition headline displayed
3. "Log in" and "Sign up" buttons in header
4. User clicks "Sign up"
5. **Outcome:** Redirected to `/auth` with sign-up view

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Logged-in users can paste transcript text
- [ ] File upload works for .txt, .md, .json files
- [ ] File can be removed to start over
- [ ] "Start Analysis" only appears when content exists
- [ ] Processing screen shows during API call
- [ ] Analysis results saved to database
- [ ] Auto-navigate to Results on completion
- [ ] Logged-out state shows value proposition
- [ ] Responsive on mobile
