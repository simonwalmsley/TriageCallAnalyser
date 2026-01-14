# Test Instructions: Call Input

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Test the transcript input interface: text paste, file upload, processing state, and navigation for logged-in and logged-out users.

---

## User Flow Tests

### Flow 1: Paste Transcript and Analyse

**Success Path**

**Steps:**
1. Navigate to `/` (logged in)
2. Page shows "Analyse your call" heading
3. Paste transcript text into textarea
4. "Start Analysis" button appears
5. Click "Start Analysis"
6. Processing screen displays with animation

**Expected Results:**
- [ ] Textarea accepts pasted text
- [ ] "Start Analysis" button only appears when content exists
- [ ] Click triggers `onStartAnalysis` callback
- [ ] Processing screen shows pulsing animation
- [ ] On completion, redirects to `/results`

**Failure Path: API Error**

**Setup:**
- Analysis API returns error

**Expected Results:**
- [ ] Error message displayed
- [ ] User can retry

### Flow 2: Upload File and Analyse

**Success Path**

**Steps:**
1. Click "Upload" button
2. Select .txt file
3. File name and size displayed
4. "Start Analysis" button appears
5. Click "Start Analysis"

**Expected Results:**
- [ ] File input accepts .txt, .md, .json files
- [ ] File preview shows name and size (e.g., "transcript.txt · 2.4 KB")
- [ ] "Remove" button appears to clear file

### Flow 3: Remove Uploaded File

**Steps:**
1. User has uploaded a file
2. Click "Remove" button

**Expected Results:**
- [ ] File is removed
- [ ] Textarea reappears empty
- [ ] "Start Analysis" button disappears

### Flow 4: Logged-Out User

**Steps:**
1. Anonymous user visits `/`
2. Value proposition headline displayed
3. "Log in" and "Sign up" buttons visible

**Expected Results:**
- [ ] Shows headline: "TriageCall Analyser surfaces the single highest-leverage moment"
- [ ] Header shows "Log in" and "Sign up" buttons
- [ ] Clicking "Sign up" navigates to `/auth`

---

## Empty State Tests

### No Content Entered

**Setup:**
- Textarea is empty
- No file uploaded

**Expected Results:**
- [ ] "Start Analysis" button is hidden
- [ ] Placeholder text shows: "Paste your transcript here..."

---

## Component Tests

### Input States

- [ ] `status: 'empty'` - Shows empty textarea, no start button
- [ ] `status: 'hasText'` - Shows textarea with content, start button visible
- [ ] `status: 'hasFile'` - Shows file preview, start button visible
- [ ] `status: 'processing'` - Shows ProcessingScreen component

### Callbacks

- [ ] `onTextChange` called when typing in textarea
- [ ] `onFileUpload` called with File object when file selected
- [ ] `onFileRemove` called when remove button clicked
- [ ] `onStartAnalysis` called when start button clicked
- [ ] `onLogIn` called when login button clicked (logged-out state)
- [ ] `onSignUp` called when signup button clicked (logged-out state)

---

## Sample Test Data

```typescript
const inputStates = {
  empty: { status: 'empty', hasContent: false, isProcessing: false },
  hasText: { status: 'hasText', hasContent: true, isProcessing: false },
  hasFile: { status: 'hasFile', hasContent: true, isProcessing: false },
  processing: { status: 'processing', hasContent: true, isProcessing: true }
}

const sampleFile = {
  name: 'transcript.txt',
  size: 2450,
  type: 'text/plain'
}
```
