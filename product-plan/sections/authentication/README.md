# Authentication

## Overview

User sign-in, sign-up, and password reset flows with email/password authentication.

## User Flows

1. **Sign In** — Enter email and password to access account
2. **Sign Up** — Create new account with full name, email, password
3. **Forgot Password** — Request password reset email
4. **Reset Password** — Set new password via emailed link

## Components Provided

- `AuthenticationForm` — Combined form handling all auth views

## Callback Props

| Callback | Description |
|----------|-------------|
| `onSignIn` | Submit sign-in credentials |
| `onSignUp` | Submit sign-up form |
| `onForgotPassword` | Request password reset |
| `onResetPassword` | Submit new password |

## Design Notes

- Renders standalone (no shell)
- Uses decorative gradient background
- Card-based form layout
- Inline validation errors
- Loading states with spinner
