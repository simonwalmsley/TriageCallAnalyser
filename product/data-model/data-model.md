# Data Model

## Entities

### User
A person who uses the system to analyse their triage calls. Represents a sales rep or manager with an authenticated account.

### Analysis
A complete call analysis record. Contains the original transcript text, the AI-generated 4-part output (highest-leverage moment, what to improve, what was done well, rule for next call), the total score, and metadata like creation timestamp.

### CompetencyScore
An individual score for one of the 9 competencies within an analysis. Each analysis has exactly 9 competency scores. Contains the competency name, numeric score (1-5), and the criteria evaluation details.

## Relationships

- User has many Analysis
- Analysis belongs to User
- Analysis has many CompetencyScore (exactly 9)
- CompetencyScore belongs to Analysis

## Notes

The 9 competencies (Greeting, Reason for Call, Needs Analysis, Qualification, Appointment, The Close, Rapport, Pitch & Present, Manage Objections) and their scoring criteria are hardcoded in the Triage Call Framework v1.0 — not stored as database entities.
