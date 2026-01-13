# Call Input Specification

## Overview
The entry point for analysing calls. Provides a clean, focused interface for pasting transcripts or uploading files, followed by a processing screen during AI analysis.

## User Flows
- View landing page with value proposition (logged out)
- Paste transcript text into the input area
- Upload a transcript file (.txt, .md, .json)
- Remove an uploaded file to start over
- Click "Start Analysis" to begin processing
- View processing animation while analysis runs
- Auto-navigate to Results when analysis completes

## UI Requirements
- Single column, centered layout
- Logged out state: value proposition headline, Log in/Sign up buttons in header
- Logged in state: "Analyse your call" headline, Account menu in header
- Large text area with placeholder "Paste your transcript here..."
- Upload button opens file picker (accepts .txt, .md, .json)
- File uploaded state shows filename with remove button
- "Start Analysis" button only appears when content is detected
- Processing screen with loading animation (pulsing/rotating dots)
- Processing text: "Analysing your call..." with "This usually takes a few seconds."
- Minimum 5-10 second processing display time
- No cancel option during processing
- Auto-transition to Results Step 1 when complete

## Configuration
- shell: false
