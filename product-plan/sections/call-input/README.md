# Call Input

## Overview

Landing page for transcript input. Users paste text or upload files, then trigger AI analysis.

## User Flows

1. **Paste Transcript** — Type or paste into textarea
2. **Upload File** — Select .txt, .md, or .json file
3. **Start Analysis** — Trigger AI processing
4. **Processing** — View loading animation while analysis runs

## Components Provided

- `CallInput` — Main input interface with textarea and upload
- `ProcessingScreen` — Loading animation during analysis

## Callback Props

| Callback | Description |
|----------|-------------|
| `onTextChange` | Update transcript text |
| `onFileUpload` | Handle file selection |
| `onFileRemove` | Clear uploaded file |
| `onStartAnalysis` | Begin AI analysis |
| `onLogIn` | Navigate to auth (logged-out) |
| `onSignUp` | Navigate to auth (logged-out) |

## Design Notes

- Renders standalone (no shell)
- Different header for logged-in vs logged-out
- Value proposition for anonymous visitors
- Decorative gradient background
