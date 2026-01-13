# Authentication Specification

## Overview
User authentication with email and password. Open sign-up allows anyone to create an account. After signing in, users are redirected to the Dashboard.

## User Flows
- Sign up with email and password, then land on Dashboard
- Sign in with existing credentials, then land on Dashboard
- Request password reset via email
- Reset password using emailed link

## UI Requirements
- Centered card layout on a simple background
- Sign-in form with email and password fields
- Sign-up form with email, password, and confirm password fields
- "Forgot password?" link on sign-in page
- Password reset request form (email input)
- Password reset form (new password input)
- Toggle between sign-in and sign-up views
- Form validation with inline error messages
- Loading states during authentication

## Configuration
- shell: false
