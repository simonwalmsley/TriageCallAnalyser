import { useState } from 'react'
import type {
  AuthenticationProps,
  SignInFormValues,
  SignUpFormValues,
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
  ValidationErrors,
} from '@/../product/sections/authentication/types'

type AuthView = 'signIn' | 'signUp' | 'forgotPassword' | 'resetPassword'

export function AuthenticationForm({
  initialView = 'signIn',
  formState,
  errors,
  onSignIn,
  onSignUp,
  onForgotPassword,
  onResetPassword,
}: AuthenticationProps) {
  const [currentView, setCurrentView] = useState<AuthView>(initialView)

  // Form state
  const [signInValues, setSignInValues] = useState<SignInFormValues>({
    email: '',
    password: '',
  })
  const [signUpValues, setSignUpValues] = useState<SignUpFormValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [forgotPasswordValues, setForgotPasswordValues] = useState<ForgotPasswordFormValues>({
    email: '',
  })
  const [resetPasswordValues, setResetPasswordValues] = useState<ResetPasswordFormValues>({
    newPassword: '',
    confirmNewPassword: '',
  })

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSignIn?.(signInValues)
  }

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSignUp?.(signUpValues)
  }

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onForgotPassword?.(forgotPasswordValues)
  }

  const handleResetPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onResetPassword?.(resetPasswordValues)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-teal-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-teal-950 p-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="w-full max-w-md relative">
        {/* Logo / Branding */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            TRIAGECALL
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Sales Call Analysis
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl shadow-neutral-200/50 dark:shadow-neutral-950/50 border border-neutral-200/50 dark:border-neutral-800 p-8">
          {/* Sign In Form */}
          {currentView === 'signIn' && (
            <SignInView
              values={signInValues}
              setValues={setSignInValues}
              errors={errors}
              formState={formState}
              onSubmit={handleSignInSubmit}
              onForgotPassword={() => setCurrentView('forgotPassword')}
              onSwitchToSignUp={() => setCurrentView('signUp')}
            />
          )}

          {/* Sign Up Form */}
          {currentView === 'signUp' && (
            <SignUpView
              values={signUpValues}
              setValues={setSignUpValues}
              errors={errors}
              formState={formState}
              onSubmit={handleSignUpSubmit}
              onSwitchToSignIn={() => setCurrentView('signIn')}
            />
          )}

          {/* Forgot Password Form */}
          {currentView === 'forgotPassword' && (
            <ForgotPasswordView
              values={forgotPasswordValues}
              setValues={setForgotPasswordValues}
              errors={errors}
              formState={formState}
              onSubmit={handleForgotPasswordSubmit}
              onBackToSignIn={() => setCurrentView('signIn')}
            />
          )}

          {/* Reset Password Form */}
          {currentView === 'resetPassword' && (
            <ResetPasswordView
              values={resetPasswordValues}
              setValues={setResetPasswordValues}
              errors={errors}
              formState={formState}
              onSubmit={handleResetPasswordSubmit}
              onBackToSignIn={() => setCurrentView('signIn')}
            />
          )}
        </div>
      </div>
    </div>
  )
}

// =============================================================================
// Sign In View
// =============================================================================

interface SignInViewProps {
  values: SignInFormValues
  setValues: React.Dispatch<React.SetStateAction<SignInFormValues>>
  errors?: ValidationErrors
  formState: AuthenticationProps['formState']
  onSubmit: (e: React.FormEvent) => void
  onForgotPassword: () => void
  onSwitchToSignUp: () => void
}

function SignInView({
  values,
  setValues,
  errors,
  formState,
  onSubmit,
  onForgotPassword,
  onSwitchToSignUp,
}: SignInViewProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
        Sign in to your account
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Welcome back. Enter your credentials to continue.
      </p>

      {formState.error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-lg">
          <p className="text-sm text-red-600 dark:text-red-400">{formState.error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        <InputField
          label="Email"
          type="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          error={errors?.email}
          placeholder="you@company.com"
          autoComplete="email"
        />

        <InputField
          label="Password"
          type="password"
          value={values.password}
          onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
          error={errors?.password}
          placeholder="Enter your password"
          autoComplete="current-password"
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            Forgot password?
          </button>
        </div>

        <SubmitButton isLoading={formState.isLoading}>Sign in</SubmitButton>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}

// =============================================================================
// Sign Up View
// =============================================================================

interface SignUpViewProps {
  values: SignUpFormValues
  setValues: React.Dispatch<React.SetStateAction<SignUpFormValues>>
  errors?: ValidationErrors
  formState: AuthenticationProps['formState']
  onSubmit: (e: React.FormEvent) => void
  onSwitchToSignIn: () => void
}

function SignUpView({
  values,
  setValues,
  errors,
  formState,
  onSubmit,
  onSwitchToSignIn,
}: SignUpViewProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
        Create your account
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Get started with TriageCall in seconds.
      </p>

      {formState.error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-lg">
          <p className="text-sm text-red-600 dark:text-red-400">{formState.error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        <InputField
          label="Full name"
          type="text"
          value={values.fullName}
          onChange={(e) => setValues((v) => ({ ...v, fullName: e.target.value }))}
          error={errors?.fullName}
          placeholder="Sarah Mitchell"
          autoComplete="name"
        />

        <InputField
          label="Email"
          type="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          error={errors?.email}
          placeholder="you@company.com"
          autoComplete="email"
        />

        <InputField
          label="Password"
          type="password"
          value={values.password}
          onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
          error={errors?.password}
          placeholder="At least 8 characters"
          autoComplete="new-password"
        />

        <InputField
          label="Confirm password"
          type="password"
          value={values.confirmPassword}
          onChange={(e) => setValues((v) => ({ ...v, confirmPassword: e.target.value }))}
          error={errors?.confirmPassword}
          placeholder="Confirm your password"
          autoComplete="new-password"
        />

        <SubmitButton isLoading={formState.isLoading}>Create account</SubmitButton>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToSignIn}
            className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}

// =============================================================================
// Forgot Password View
// =============================================================================

interface ForgotPasswordViewProps {
  values: ForgotPasswordFormValues
  setValues: React.Dispatch<React.SetStateAction<ForgotPasswordFormValues>>
  errors?: ValidationErrors
  formState: AuthenticationProps['formState']
  onSubmit: (e: React.FormEvent) => void
  onBackToSignIn: () => void
}

function ForgotPasswordView({
  values,
  setValues,
  errors,
  formState,
  onSubmit,
  onBackToSignIn,
}: ForgotPasswordViewProps) {
  const isSuccess = formState.status === 'success'

  return (
    <div>
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
        Reset your password
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Enter your email and we'll send you a reset link.
      </p>

      {isSuccess ? (
        <div className="mb-4 p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 rounded-lg">
          <p className="text-sm text-emerald-700 dark:text-emerald-400">
            If an account exists with this email, you'll receive a password reset link shortly.
          </p>
        </div>
      ) : (
        <>
          {formState.error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{formState.error}</p>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <InputField
              label="Email"
              type="email"
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              error={errors?.email}
              placeholder="you@company.com"
              autoComplete="email"
            />

            <SubmitButton isLoading={formState.isLoading}>Send reset link</SubmitButton>
          </form>
        </>
      )}

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={onBackToSignIn}
          className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to sign in
        </button>
      </div>
    </div>
  )
}

// =============================================================================
// Reset Password View
// =============================================================================

interface ResetPasswordViewProps {
  values: ResetPasswordFormValues
  setValues: React.Dispatch<React.SetStateAction<ResetPasswordFormValues>>
  errors?: ValidationErrors
  formState: AuthenticationProps['formState']
  onSubmit: (e: React.FormEvent) => void
  onBackToSignIn: () => void
}

function ResetPasswordView({
  values,
  setValues,
  errors,
  formState,
  onSubmit,
  onBackToSignIn,
}: ResetPasswordViewProps) {
  const isSuccess = formState.status === 'success'

  return (
    <div>
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
        Set new password
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Enter your new password below.
      </p>

      {isSuccess ? (
        <div className="mb-4 p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 rounded-lg">
          <p className="text-sm text-emerald-700 dark:text-emerald-400">
            Your password has been reset successfully. You can now sign in with your new password.
          </p>
        </div>
      ) : (
        <>
          {formState.error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{formState.error}</p>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <InputField
              label="New password"
              type="password"
              value={values.newPassword}
              onChange={(e) => setValues((v) => ({ ...v, newPassword: e.target.value }))}
              error={errors?.newPassword}
              placeholder="At least 8 characters"
              autoComplete="new-password"
            />

            <InputField
              label="Confirm new password"
              type="password"
              value={values.confirmNewPassword}
              onChange={(e) => setValues((v) => ({ ...v, confirmNewPassword: e.target.value }))}
              error={errors?.confirmNewPassword}
              placeholder="Confirm your new password"
              autoComplete="new-password"
            />

            <SubmitButton isLoading={formState.isLoading}>Reset password</SubmitButton>
          </form>
        </>
      )}

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={onBackToSignIn}
          className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to sign in
        </button>
      </div>
    </div>
  )
}

// =============================================================================
// Shared Components
// =============================================================================

interface InputFieldProps {
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  placeholder?: string
  autoComplete?: string
}

function InputField({
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`
          w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-neutral-800
          text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500
          ${
            error
              ? 'border-red-300 dark:border-red-700'
              : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'
          }
        `}
      />
      {error && <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{error}</p>}
    </div>
  )
}

interface SubmitButtonProps {
  isLoading: boolean
  children: React.ReactNode
}

function SubmitButton({ isLoading, children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`
        w-full py-2.5 px-4 rounded-lg font-medium text-white
        transition-all duration-200
        ${
          isLoading
            ? 'bg-teal-400 dark:bg-teal-600 cursor-not-allowed'
            : 'bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 active:scale-[0.98]'
        }
        focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2 dark:focus:ring-offset-neutral-900
      `}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  )
}
