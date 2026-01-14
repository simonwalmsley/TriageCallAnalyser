import { useEffect } from 'react'
import type { ProcessingScreenProps } from '../types'

export function ProcessingScreen({
  primaryMessage,
  secondaryMessage,
  onComplete,
}: ProcessingScreenProps) {
  // Auto-complete after minimum display time (for demo purposes)
  useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(() => {
        onComplete()
      }, 6000) // 6 seconds minimum display
      return () => clearTimeout(timer)
    }
  }, [onComplete])

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

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 relative z-10">
        <div className="text-center">
          {/* Animated Loading Indicator */}
          <div className="relative w-20 h-20 mx-auto mb-8">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-teal-200 dark:border-teal-800" />

            {/* Spinning arc */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-teal-500 dark:border-t-teal-400 animate-spin" />

            {/* Pulsing dots */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>

          {/* Text */}
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
            {primaryMessage}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            {secondaryMessage}
          </p>
        </div>
      </main>
    </div>
  )
}
