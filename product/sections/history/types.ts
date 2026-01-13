// =============================================================================
// Data Types
// =============================================================================

export interface HistoryItem {
  id: string
  title: string
  timestamp: string
  formattedDate: string
  totalPoints: number
  maxPoints: number
  percentage: number
}

export interface EmptyState {
  message: string
  subtext: string
  ctaLabel: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface HistoryProps {
  /** List of past analyses to display */
  historyItems: HistoryItem[]
  /** Empty state content when no analyses exist */
  emptyState: EmptyState
  /** Pre-headline text (e.g., "YOUR ANALYSES") */
  preHeadline?: string
  /** Main headline (e.g., "History") */
  headline?: string
  /** Whether to show the "Back to Results" button (only if navigated from results) */
  showBackToResults?: boolean
  /** Called when user clicks on a history item */
  onSelectAnalysis?: (id: string) => void
  /** Called when user clicks "Back to Results" */
  onBackToResults?: () => void
  /** Called when user clicks "New" */
  onNew?: () => void
  /** Called when user clicks "Start Analysis" in empty state */
  onStartAnalysis?: () => void
}
