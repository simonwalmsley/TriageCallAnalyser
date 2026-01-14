# Data Model

## Overview

TriageCall Analyser uses three core entities to model call analysis data.

## Entities

### User

A person who uses the system to analyse their triage calls. Represents a sales rep or manager with an authenticated account.

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `email` | string | Email address (unique) |
| `fullName` | string | Display name |

### Analysis

A complete call analysis record. Contains the original transcript text, the AI-generated 4-part output, the total score, and metadata.

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `userId` | string | Foreign key to User |
| `createdAt` | string | ISO timestamp of creation |
| `transcript` | string | Original transcript text |
| `totalScore` | number | Sum of competency scores (0-45) |
| `maxScore` | number | Maximum possible score (45) |
| `scorePercentage` | number | Calculated percentage |
| `highestLeverageMoment` | object | AI-identified key moment |
| `whatToImprove` | array | Improvement points by competency |
| `whatWentWell` | array | Positive points by competency |
| `ruleForNextCall` | object | Actionable instruction |

### CompetencyScore

An individual score for one of the 9 competencies within an analysis. Each analysis has exactly 9 competency scores.

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `analysisId` | string | Foreign key to Analysis |
| `number` | number | Competency number (1-9) |
| `name` | string | Competency name |
| `score` | number | Score (1-5) |
| `maxScore` | number | Maximum score (5) |
| `criteria` | array | List of criteria with pass/fail |

## Relationships

```
User (1) ──── (*) Analysis
Analysis (1) ──── (9) CompetencyScore
```

- User has many Analysis
- Analysis belongs to User
- Analysis has exactly 9 CompetencyScore
- CompetencyScore belongs to Analysis

## The 9 Competencies

These are hardcoded in the Triage Call Framework v1.0:

1. The Greeting
2. Reason for Call
3. Needs Analysis
4. Qualification
5. Appointment
6. The Close
7. Rapport
8. Pitch & Present
9. Manage Objections

Each competency has 3-5 criteria that determine the score (1-5 points).

## Notes

- Competency definitions and criteria are business logic, not database entities
- Scores are calculated by the AI analysis, not user-entered
- Analysis records are immutable after creation
