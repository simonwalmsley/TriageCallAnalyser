import type {
  AnalysisResultsProps,
  ResultStep,
  HighestLeverageMoment,
  FeedbackPoint,
  RuleForNextCall,
} from '../types'

const STEP_TITLES: Record<ResultStep, string> = {
  1: 'The Single Highest-Leverage Moment',
  2: 'What to Improve',
  3: 'What Went Well',
  4: 'Your Rule for the Next Call',
}

const STEP_NAMES: Record<ResultStep, string> = {
  1: 'Highest Leverage',
  2: 'What to Improve',
  3: 'What Went Well',
  4: 'Rule for Next Call',
}

export function AnalysisResults({
  analysis,
  currentStep,
  onNextStep,
  onPreviousStep,
  onGoToStep,
  onGoToTimestamp,
  onViewScorecard,
  onViewHistory,
  onNewAnalysis,
}: AnalysisResultsProps) {
  const canGoBack = currentStep > 1
  const canGoForward = currentStep < 4

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950">
      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center relative py-8 pb-24">
        {/* Left Navigation Arrow - positioned outside content */}
        <div className="hidden lg:flex fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-10">
          <NavigationArrow
            direction="left"
            disabled={!canGoBack}
            onClick={onPreviousStep}
            tooltip={canGoBack ? STEP_NAMES[(currentStep - 1) as ResultStep] : undefined}
          />
        </div>

        {/* Content */}
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
          {/* Pre-headline */}
          <p className="text-xs font-semibold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3">
            Call Analysis
          </p>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-8">
            {STEP_TITLES[currentStep]}
          </h1>

          {/* Step Content */}
          <div className="space-y-6">
            {currentStep === 1 && (
              <HighestLeverageMomentContent
                moment={analysis.highestLeverageMoment}
                onGoToTimestamp={onGoToTimestamp}
              />
            )}
            {currentStep === 2 && (
              <FeedbackPointsContent points={analysis.whatToImprove} type="improve" />
            )}
            {currentStep === 3 && (
              <FeedbackPointsContent points={analysis.whatWentWell} type="well" />
            )}
            {currentStep === 4 && (
              <RuleForNextCallContent rule={analysis.ruleForNextCall} />
            )}
          </div>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {([1, 2, 3, 4] as ResultStep[]).map((step) => (
              <button
                key={step}
                onClick={() => onGoToStep?.(step)}
                className={`
                  w-2.5 h-2.5 rounded-full transition-all duration-200
                  ${
                    step === currentStep
                      ? 'bg-teal-600 dark:bg-teal-400 scale-125'
                      : 'bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
                  }
                `}
                aria-label={`Go to step ${step}: ${STEP_NAMES[step]}`}
              />
            ))}
          </div>
          {/* Mobile Navigation - below progress dots */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
            <button
              onClick={onPreviousStep}
              disabled={!canGoBack}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
                transition-all duration-200
                ${
                  canGoBack
                    ? 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-teal-600 dark:hover:text-teal-400 border border-neutral-200 dark:border-neutral-700'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-600 cursor-not-allowed'
                }
              `}
            >
              <ChevronLeftIcon className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={onNextStep}
              disabled={!canGoForward}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
                transition-all duration-200
                ${
                  canGoForward
                    ? 'bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-600 cursor-not-allowed'
                }
              `}
            >
              Next
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Navigation Arrow - positioned outside content */}
        <div className="hidden lg:flex fixed right-4 xl:right-8 top-1/2 -translate-y-1/2 z-10">
          <NavigationArrow
            direction="right"
            disabled={!canGoForward}
            onClick={onNextStep}
            tooltip={canGoForward ? STEP_NAMES[(currentStep + 1) as ResultStep] : undefined}
          />
        </div>
      </div>

      {/* Fixed Footer Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-4 py-3 z-10">
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 sm:gap-4">
          <FooterButton onClick={onViewScorecard} icon={<ScorecardIcon />}>
            Scorecard
          </FooterButton>
          <FooterButton onClick={onViewHistory} icon={<HistoryIcon />}>
            History
          </FooterButton>
          <FooterButton onClick={onNewAnalysis} icon={<PlusIcon />} primary>
            New
          </FooterButton>
        </div>
      </footer>
    </div>
  )
}

// =============================================================================
// Step Content Components
// =============================================================================

interface HighestLeverageMomentContentProps {
  moment: HighestLeverageMoment
  onGoToTimestamp?: (timestamp: string) => void
}

function HighestLeverageMomentContent({ moment, onGoToTimestamp }: HighestLeverageMomentContentProps) {
  return (
    <div className="space-y-6">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {moment.description}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {moment.impact}
        </p>
      </div>

      {/* Timestamp Reference Button */}
      <button
        onClick={() => onGoToTimestamp?.(moment.timestamp)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/50 hover:border-teal-300 dark:hover:border-teal-700 transition-colors cursor-pointer"
      >
        <ClockIcon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
        <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
          Go to {moment.timestamp} in the transcript
        </span>
        <ChevronRightIcon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
      </button>
    </div>
  )
}

interface FeedbackPointsContentProps {
  points: FeedbackPoint[]
  type: 'improve' | 'well'
}

function FeedbackPointsContent({ points, type }: FeedbackPointsContentProps) {
  const accentColor = type === 'improve' ? 'amber' : 'emerald'

  return (
    <div className="space-y-6">
      {points.map((point, index) => (
        <div
          key={index}
          className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-5 space-y-2"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`
                text-xs font-semibold px-2 py-0.5 rounded-full
                ${
                  type === 'improve'
                    ? 'bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400'
                    : 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400'
                }
              `}
            >
              {point.competency}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {point.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {point.description}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 italic">
            "{point.evidence}"
          </p>
        </div>
      ))}
    </div>
  )
}

interface RuleForNextCallContentProps {
  rule: RuleForNextCall
}

function RuleForNextCallContent({ rule }: RuleForNextCallContentProps) {
  return (
    <div className="space-y-8">
      {/* The Rule */}
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 border border-teal-200 dark:border-teal-800 rounded-xl p-6 sm:p-8">
        <p className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-white leading-relaxed">
          {rule.rule}
        </p>
      </div>

      {/* Example */}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
          Example
        </p>
        <div className="bg-neutral-100 dark:bg-neutral-800/50 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
          <p className="text-neutral-700 dark:text-neutral-300 font-medium italic">
            "{rule.example}"
          </p>
        </div>
      </div>

      {/* Rationale */}
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {rule.rationale}
      </p>
    </div>
  )
}

// =============================================================================
// Navigation Arrow
// =============================================================================

interface NavigationArrowProps {
  direction: 'left' | 'right'
  disabled: boolean
  onClick?: () => void
  tooltip?: string
}

function NavigationArrow({ direction, disabled, onClick, tooltip }: NavigationArrowProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={tooltip}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center
        transition-all duration-200
        ${
          disabled
            ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-600 cursor-not-allowed'
            : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-teal-600 dark:hover:text-teal-400 shadow-lg hover:shadow-xl border border-neutral-200 dark:border-neutral-700'
        }
      `}
      aria-label={direction === 'left' ? 'Previous step' : 'Next step'}
    >
      {direction === 'left' ? (
        <ChevronLeftIcon className="w-5 h-5" />
      ) : (
        <ChevronRightIcon className="w-5 h-5" />
      )}
    </button>
  )
}

// =============================================================================
// Footer Button
// =============================================================================

interface FooterButtonProps {
  onClick?: () => void
  icon: React.ReactNode
  children: React.ReactNode
  primary?: boolean
}

function FooterButton({ onClick, icon, children, primary }: FooterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
        transition-all duration-200
        ${
          primary
            ? 'bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white'
            : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300'
        }
      `}
    >
      {icon}
      <span className="hidden sm:inline">{children}</span>
    </button>
  )
}

// =============================================================================
// Icons
// =============================================================================

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
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

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ScorecardIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  )
}
