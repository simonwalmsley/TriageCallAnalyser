# Test Instructions: Authentication

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Test the authentication flows: sign-in, sign-up, password reset. Verify form validation, error handling, and successful authentication redirects.

---

## User Flow Tests

### Flow 1: Sign In with Valid Credentials

**Success Path**

**Setup:**
- User account exists with email `test@example.com` and password `password123`

**Steps:**
1. Navigate to `/auth`
2. Form shows "Sign in to your account" heading
3. Enter `test@example.com` in email field
4. Enter `password123` in password field
5. Click "Sign in" button

**Expected Results:**
- [ ] Loading spinner appears on button
- [ ] On success, user redirects to `/` (Call Input)
- [ ] User session is established

**Failure Path: Wrong Password**

**Setup:**
- User enters incorrect password

**Steps:**
1. Enter valid email, wrong password
2. Click "Sign in"

**Expected Results:**
- [ ] Error message appears: "Invalid email or password"
- [ ] Form data is preserved
- [ ] User remains on sign-in page

### Flow 2: Sign Up New Account

**Success Path**

**Steps:**
1. Click "Sign up" link
2. Form switches to "Create your account" view
3. Enter "Jane Doe" in "Full name" field
4. Enter `jane@example.com` in "Email" field
5. Enter `securepass123` in "Password" field
6. Enter `securepass123` in "Confirm password" field
7. Click "Create account" button

**Expected Results:**
- [ ] Loading spinner appears
- [ ] On success, user redirects to `/`
- [ ] New user account is created

**Failure Path: Passwords Don't Match**

**Steps:**
1. Enter different values in password fields
2. Click "Create account"

**Expected Results:**
- [ ] Error shows under confirm password: "Passwords do not match"
- [ ] Form is not submitted

### Flow 3: Forgot Password

**Success Path**

**Steps:**
1. Click "Forgot password?" link
2. Form shows "Reset your password" heading
3. Enter email address
4. Click "Send reset link"

**Expected Results:**
- [ ] Success message: "If an account exists with this email, you'll receive a password reset link shortly."
- [ ] Form switches to success state

---

## Validation Tests

- [ ] Empty email shows error
- [ ] Invalid email format shows error
- [ ] Empty password shows error
- [ ] Password under 8 characters shows error
- [ ] Empty full name shows error (sign-up)
- [ ] Mismatched passwords show error (sign-up)

---

## Sample Test Data

```typescript
const validUser = {
  email: 'test@example.com',
  password: 'password123',
  fullName: 'Test User'
}

const formState = {
  idle: { status: 'idle', isLoading: false, error: null },
  loading: { status: 'loading', isLoading: true, error: null },
  error: { status: 'error', isLoading: false, error: 'Invalid credentials' }
}
```
