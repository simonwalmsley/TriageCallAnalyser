import type { ScorecardProps, CompetencyScore, Criterion } from '../types'

export function Scorecard({
  overallScore,
  competencyScores,
  preHeadline = 'CALL ANALYSIS',
  headline = 'Scorecard',
  competencyScoresHeading = 'COMPETENCY SCORES',
  onBackToResults,
  onHistory,
  onNew,
}: ScorecardProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-50 via-neutral-100 to-teal-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-teal-950">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            TRIAGECALL
          </h1>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 pb-24 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Headlines */}
          <div className="text-center mb-8">
            <p className="text-xs font-medium tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-2">
              {preHeadline}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              {headline}
            </h2>
          </div>

          {/* Overall Score Card */}
          <OverallScoreCard
            totalPoints={overallScore.totalPoints}
            maxPoints={overallScore.maxPoints}
            percentage={overallScore.percentage}
            averageScore={overallScore.averageScore}
          />

          {/* Competency Scores Heading */}
          <h3 className="text-xs font-medium tracking-widest text-neutral-500 dark:text-neutral-400 uppercase text-center mt-10 mb-6">
            {competencyScoresHeading}
          </h3>

          {/* Competency Cards */}
          <div className="space-y-4">
            {competencyScores.map((competency) => (
              <CompetencyCard key={competency.id} competency={competency} />
            ))}
          </div>
        </div>
      </main>

      {/* Fixed Footer Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={onBackToResults}
              className="px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Results
            </button>
            <button
              onClick={onHistory}
              className="px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors"
            >
              History
            </button>
            <button
              onClick={onNew}
              className="px-4 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg transition-colors"
            >
              New
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

// =============================================================================
// Sub-components
// =============================================================================

interface OverallScoreCardProps {
  totalPoints: number
  maxPoints: number
  percentage: number
  averageScore: number
}

function OverallScoreCard({ totalPoints, maxPoints, percentage, averageScore }: OverallScoreCardProps) {
  // Determine color based on percentage
  const getScoreColor = () => {
    if (percentage >= 80) return 'text-emerald-600 dark:text-emerald-400'
    if (percentage >= 60) return 'text-amber-600 dark:text-amber-400'
    return 'text-red-600 dark:text-red-400'
  }

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl shadow-neutral-200/50 dark:shadow-neutral-950/50 border border-neutral-200/50 dark:border-neutral-800 p-8 text-center">
      <p className="text-xs font-medium tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-4">
        OVERALL SCORE
      </p>

      {/* Large Score Display */}
      <div className={`text-5xl sm:text-6xl font-bold ${getScoreColor()} mb-2`}>
        {totalPoints} / {maxPoints}
      </div>

      {/* Percentage */}
      <div className={`text-2xl font-semibold ${getScoreColor()} mb-4`}>
        {percentage}%
      </div>

      {/* Average */}
      <p className="text-neutral-500 dark:text-neutral-400">
        Average: {averageScore.toFixed(1)} / 5
      </p>
    </div>
  )
}

interface CompetencyCardProps {
  competency: CompetencyScore
}

function CompetencyCard({ competency }: CompetencyCardProps) {
  // Determine score color
  const getScoreColor = () => {
    if (competency.score >= 4) return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50'
    if (competency.score === 3) return 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50'
    return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/50'
  }

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg shadow-neutral-200/30 dark:shadow-neutral-950/30 border border-neutral-200/50 dark:border-neutral-800 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-neutral-100 dark:border-neutral-800">
        <h4 className="font-semibold text-neutral-900 dark:text-white">
          {competency.number}. {competency.name}
        </h4>
        <span className={`px-3 py-1 text-sm font-bold rounded-full ${getScoreColor()}`}>
          {competency.score}/{competency.maxScore}
        </span>
      </div>

      {/* Criteria List */}
      <div className="p-4 space-y-2">
        {competency.criteria.map((criterion) => (
          <CriterionRow key={criterion.id} criterion={criterion} />
        ))}
      </div>
    </div>
  )
}

interface CriterionRowProps {
  criterion: Criterion
}

function CriterionRow({ criterion }: CriterionRowProps) {
  return (
    <div className="flex items-center gap-3">
      {criterion.passed ? (
        <CheckIcon className="w-5 h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
      ) : (
        <XIcon className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0" />
      )}
      <span className={`text-sm ${criterion.passed ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-500 dark:text-neutral-500'}`}>
        {criterion.label}
      </span>
    </div>
  )
}

// =============================================================================
// Icons
// =============================================================================

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
