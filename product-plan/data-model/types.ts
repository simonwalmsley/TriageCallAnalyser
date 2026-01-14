// =============================================================================
// Core Entities
// =============================================================================

export interface User {
  id: string
  email: string
  fullName: string
}

export interface Analysis {
  id: string
  userId: string
  createdAt: string
  transcript: string
  totalScore: number
  maxScore: number
  scorePercentage: number
  highestLeverageMoment: HighestLeverageMoment
  whatToImprove: FeedbackPoint[]
  whatWentWell: FeedbackPoint[]
  ruleForNextCall: RuleForNextCall
  competencyScores: CompetencyScore[]
}

export interface CompetencyScore {
  id: string
  analysisId: string
  number: number
  name: string
  score: number
  maxScore: number
  criteria: Criterion[]
}

// =============================================================================
// Analysis Output Types
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

export interface Criterion {
  id: string
  label: string
  passed: boolean
}

// =============================================================================
// Summary Types (for list views)
// =============================================================================

export interface AnalysisSummary {
  id: string
  title: string
  timestamp: string
  formattedDate: string
  totalPoints: number
  maxPoints: number
  percentage: number
}

export interface OverallScore {
  totalPoints: number
  maxPoints: number
  percentage: number
  averageScore: number
}
