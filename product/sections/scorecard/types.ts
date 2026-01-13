// =============================================================================
// Data Types
// =============================================================================

export interface OverallScore {
  totalPoints: number
  maxPoints: number
  percentage: number
  averageScore: number
}

export interface Criterion {
  id: string
  label: string
  passed: boolean
}

export interface CompetencyScore {
  id: string
  number: number
  name: string
  score: number
  maxScore: number
  criteria: Criterion[]
}

// =============================================================================
// Component Props
// =============================================================================

export interface ScorecardProps {
  /** Overall score summary (total, percentage, average) */
  overallScore: OverallScore
  /** Array of 9 competency scores with criteria breakdowns */
  competencyScores: CompetencyScore[]
  /** Pre-headline text (e.g., "CALL ANALYSIS") */
  preHeadline?: string
  /** Main headline (e.g., "Scorecard") */
  headline?: string
  /** Section heading for competency list */
  competencyScoresHeading?: string
  /** Called when user clicks "Back to Results" */
  onBackToResults?: () => void
  /** Called when user clicks "History" */
  onHistory?: () => void
  /** Called when user clicks "New" */
  onNew?: () => void
}
