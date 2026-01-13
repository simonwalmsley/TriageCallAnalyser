import { useRef } from 'react'
import type { CallInputProps, UploadedFile } from '@/../product/sections/call-input/types'

export function CallInput({
  isLoggedIn,
  user,
  inputState,
  transcriptText = '',
  uploadedFile,
  onTextChange,
  onFileUpload,
  onFileRemove,
  onStartAnalysis,
  onLogIn,
  onSignUp,
}: CallInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onFileUpload?.(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const showStartButton = inputState.hasContent && !inputState.isProcessing

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-50 via-neutral-100 to-teal-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-teal-950">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            TRIAGECALL
          </h1>

          {isLoggedIn ? (
            <UserMenu user={user} />
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={onLogIn}
                className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Log in
              </button>
              <button
                onClick={onSignUp}
                className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg transition-colors"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 relative z-10">
        <div className="w-full max-w-2xl">
          {/* Headlines */}
          <div className="text-center mb-8">
            {isLoggedIn ? (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  Analyse your call
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Paste your transcript below or upload a file.
                </p>
              </>
            ) : (
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white leading-tight max-w-xl mx-auto">
                TriageCall Analyser surfaces the single highest-leverage moment in your calls.
              </h2>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl shadow-neutral-200/50 dark:shadow-neutral-950/50 border border-neutral-200/50 dark:border-neutral-800 overflow-hidden">
            {inputState.status === 'hasFile' && uploadedFile ? (
              <FileUploadedState
                file={uploadedFile}
                onRemove={onFileRemove}
              />
            ) : (
              <textarea
                value={transcriptText}
                onChange={(e) => onTextChange?.(e.target.value)}
                placeholder="Paste your transcript here..."
                className="w-full h-64 sm:h-80 p-6 text-neutral-900 dark:text-white bg-transparent placeholder-neutral-400 dark:placeholder-neutral-500 resize-none focus:outline-none"
              />
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <input
              ref={fileInputRef}
              type="file"
              accept=".txt,.md,.json"
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              onClick={handleUploadClick}
              className="px-5 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <UploadIcon className="w-4 h-4" />
              Upload
            </button>

            {showStartButton && (
              <button
                onClick={onStartAnalysis}
                className="px-6 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg transition-all duration-200 flex items-center gap-2 animate-fade-in"
              >
                Start Analysis
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

// =============================================================================
// Sub-components
// =============================================================================

interface UserMenuProps {
  user?: { fullName: string; email: string }
}

function UserMenu({ user }: UserMenuProps) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
      <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 flex items-center justify-center font-medium text-sm">
        {user?.fullName?.charAt(0) || 'U'}
      </div>
      <span className="hidden sm:inline">{user?.fullName || 'Account'}</span>
      <ChevronDownIcon className="w-4 h-4" />
    </button>
  )
}

interface FileUploadedStateProps {
  file: UploadedFile
  onRemove?: () => void
}

function FileUploadedState({ file, onRemove }: FileUploadedStateProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div className="h-64 sm:h-80 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
          <DocumentIcon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
        </div>
        <p className="font-medium text-neutral-900 dark:text-white mb-1">
          {file.name}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          {formatFileSize(file.size)} · Ready to analyse
        </p>
        <button
          onClick={onRemove}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-lg transition-colors"
        >
          <XIcon className="w-4 h-4" />
          Remove
        </button>
      </div>
    </div>
  )
}

// =============================================================================
// Icons
// =============================================================================

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
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

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
