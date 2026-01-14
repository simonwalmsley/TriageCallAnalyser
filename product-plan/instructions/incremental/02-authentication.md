# Milestone 2: Authentication

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

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

Implement user authentication with email/password sign-in, sign-up, and password reset flows.

## Overview

Authentication is the gateway to TriageCall Analyser. Users create accounts to access the analysis features and build their analysis history over time.

**Key Functionality:**
- Sign up with email, full name, and password
- Sign in with existing credentials
- Request password reset via email
- Reset password using emailed link
- Redirect to Call Input after successful authentication

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/authentication/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/authentication/components/`:

- `AuthenticationForm.tsx` — Combined sign-in/sign-up/password-reset form

### Data Layer

The components expect these data shapes:

```typescript
interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  isLoading: boolean
  error: string | null
}

interface SignInFormValues {
  email: string
  password: string
}

interface SignUpFormValues {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}
```

You'll need to:
- Set up Supabase Auth (or your auth provider)
- Handle form submissions and validation
- Store user session
- Redirect after successful auth

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onSignIn` | Submit sign-in form, authenticate user |
| `onSignUp` | Submit sign-up form, create account |
| `onForgotPassword` | Request password reset email |
| `onResetPassword` | Submit new password |

### Validation

Implement client-side validation:

- Email: Valid email format required
- Password: Minimum 8 characters
- Confirm Password: Must match password
- Full Name: Required for sign-up

Display errors via the `errors` prop object.

## Files to Reference

- `product-plan/sections/authentication/README.md` — Feature overview and design intent
- `product-plan/sections/authentication/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/authentication/components/` — React components
- `product-plan/sections/authentication/types.ts` — TypeScript interfaces
- `product-plan/sections/authentication/sample-data.json` — Test data

## Expected User Flows

### Flow 1: Sign Up New Account

1. User navigates to `/auth`
2. User clicks "Sign up" tab
3. User enters full name, email, password, confirm password
4. User clicks "Create account"
5. **Outcome:** Account created, user redirected to `/` (Call Input)

### Flow 2: Sign In Existing User

1. User navigates to `/auth`
2. User enters email and password
3. User clicks "Sign in"
4. **Outcome:** User authenticated, redirected to `/` (Call Input)

### Flow 3: Reset Forgotten Password

1. User clicks "Forgot password?" on sign-in form
2. User enters email address
3. User clicks "Send reset link"
4. **Outcome:** Email sent, success message shown
5. User clicks link in email
6. User enters new password
7. **Outcome:** Password updated, user can sign in with new password

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Sign-up creates new user account
- [ ] Sign-in authenticates existing users
- [ ] Password reset flow works end-to-end
- [ ] Validation errors display inline
- [ ] Loading states show during API calls
- [ ] Successful auth redirects to Call Input
- [ ] Session persists across page refreshes
- [ ] Responsive on mobile
