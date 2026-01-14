// =============================================================================
// Data Types
// =============================================================================

export interface HighestLeverageMoment {
  timestamp: string
  title: string
  description: string
  impact: string
  evidence: string
}

export interface FeedbackPoint {
  competency: string
  title: string
  description: string
  evidence: string
}

export interface RuleForNextCall {
  rule: string
  example: string
  rationale: string
}

export interface Analysis {
  id: string
  createdAt: string
  totalScore: number
  maxScore: number
  scorePercentage: number
  highestLeverageMoment: HighestLeverageMoment
  whatToImprove: FeedbackPoint[]
  whatWentWell: FeedbackPoint[]
  ruleForNextCall: RuleForNextCall
}

export type ResultStep = 1 | 2 | 3 | 4

// =============================================================================
// Component Props
// =============================================================================

export interface AnalysisResultsProps {
  /** The complete analysis data to display */
  analysis: Analysis
  /** The current step being viewed (1-4) */
  currentStep: ResultStep
  /** Called when user navigates to the next step */
  onNextStep?: () => void
  /** Called when user navigates to the previous step */
  onPreviousStep?: () => void
  /** Called when user clicks a specific step dot */
  onGoToStep?: (step: ResultStep) => void
  /** Called when user clicks the timestamp link to jump to that point in the transcript */
  onGoToTimestamp?: (timestamp: string) => void
  /** Called when user clicks the Scorecard button in footer */
  onViewScorecard?: () => void
  /** Called when user clicks the History button in footer */
  onViewHistory?: () => void
  /** Called when user clicks the New Analysis button in footer */
  onNewAnalysis?: () => void
}
