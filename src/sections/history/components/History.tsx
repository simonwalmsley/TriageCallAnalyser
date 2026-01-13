import type { HistoryProps, HistoryItem } from '@/../product/sections/history/types'

export function History({
  historyItems,
  emptyState,
  preHeadline = 'YOUR ANALYSES',
  headline = 'History',
  showBackToResults = false,
  onSelectAnalysis,
  onBackToResults,
  onNew,
  onStartAnalysis,
}: HistoryProps) {
  const hasHistory = historyItems.length > 0

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-50 via-neutral-100 to-teal-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-teal-950">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-4 sm:px-6 py-8 pb-28 relative z-10">
        <div className="w-full max-w-2xl mx-auto">
          {/* Headlines */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-2">
              {preHeadline}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              {headline}
            </h2>
          </div>

          {/* Content */}
          {hasHistory ? (
            <HistoryList items={historyItems} onSelect={onSelectAnalysis} />
          ) : (
            <EmptyHistoryState
              message={emptyState.message}
              subtext={emptyState.subtext}
              ctaLabel={emptyState.ctaLabel}
              onStartAnalysis={onStartAnalysis}
            />
          )}
        </div>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 inset-x-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-t border-neutral-200/50 dark:border-neutral-800/50 z-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-center gap-3">
          {showBackToResults && (
            <button
              onClick={onBackToResults}
              className="px-5 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Results
            </button>
          )}
          <button
            onClick={onNew}
            className="px-6 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg transition-colors flex items-center gap-2"
          >
            <PlusIcon className="w-4 h-4" />
            New
          </button>
        </div>
      </footer>
    </div>
  )
}

// =============================================================================
// Sub-components
// =============================================================================

interface HistoryListProps {
  items: HistoryItem[]
  onSelect?: (id: string) => void
}

function HistoryList({ items, onSelect }: HistoryListProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <HistoryCard
          key={item.id}
          item={item}
          onClick={() => onSelect?.(item.id)}
          animationDelay={index * 50}
        />
      ))}
    </div>
  )
}

interface HistoryCardProps {
  item: HistoryItem
  onClick?: () => void
  animationDelay?: number
}

function HistoryCard({ item, onClick, animationDelay = 0 }: HistoryCardProps) {
  const scoreColor = getScoreColor(item.percentage)

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200/50 dark:border-neutral-800 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-200 group animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left: Title and Date */}
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors truncate">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
            {item.formattedDate}
          </p>
        </div>

        {/* Right: Score */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="flex items-baseline gap-1">
              <span className={`text-lg font-bold ${scoreColor}`}>
                {item.percentage}%
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {item.totalPoints}/{item.maxPoints}
            </p>
          </div>

          {/* Score indicator ring */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-neutral-200 dark:text-neutral-700"
              />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${item.percentage * 0.94} 100`}
                strokeLinecap="round"
                className={scoreColor}
              />
            </svg>
          </div>

          {/* Chevron */}
          <ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors" />
        </div>
      </div>
    </button>
  )
}

interface EmptyHistoryStateProps {
  message: string
  subtext: string
  ctaLabel: string
  onStartAnalysis?: () => void
}

function EmptyHistoryState({ message, subtext, ctaLabel, onStartAnalysis }: EmptyHistoryStateProps) {
  return (
    <div className="text-center py-16 px-4 animate-fade-in">
      {/* Empty state illustration */}
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 border border-teal-200/50 dark:border-teal-800/50 flex items-center justify-center">
        <ClipboardListIcon className="w-10 h-10 text-teal-600 dark:text-teal-400" />
      </div>

      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
        {message}
      </h3>
      <p className="text-neutral-500 dark:text-neutral-400 mb-6 max-w-sm mx-auto">
        {subtext}
      </p>

      <button
        onClick={onStartAnalysis}
        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg transition-colors"
      >
        {ctaLabel}
        <ArrowRightIcon className="w-4 h-4" />
      </button>
    </div>
  )
}

// =============================================================================
// Helpers
// =============================================================================

function getScoreColor(percentage: number): string {
  if (percentage >= 80) return 'text-emerald-600 dark:text-emerald-400'
  if (percentage >= 60) return 'text-teal-600 dark:text-teal-400'
  if (percentage >= 40) return 'text-amber-600 dark:text-amber-400'
  return 'text-red-600 dark:text-red-400'
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

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

function ClipboardListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  )
}
