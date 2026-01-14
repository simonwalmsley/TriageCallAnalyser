// =============================================================================
// Data Types
// =============================================================================

export interface User {
  id: string
  email: string
  fullName: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export interface FormState {
  status: FormStatus
  isLoading: boolean
  error: string | null
}

export interface SignInFormValues {
  email: string
  password: string
}

export interface SignUpFormValues {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

export interface ForgotPasswordFormValues {
  email: string
}

export interface ResetPasswordFormValues {
  newPassword: string
  confirmNewPassword: string
}

export interface ValidationErrors {
  email?: string
  password?: string
  confirmPassword?: string
  fullName?: string
  newPassword?: string
  confirmNewPassword?: string
  form?: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface SignInFormProps {
  /** Current form state (idle, loading, success, error) */
  formState: FormState
  /** Validation errors to display inline */
  errors?: ValidationErrors
  /** Called when user submits the sign-in form */
  onSubmit?: (values: SignInFormValues) => void
  /** Called when user clicks "Forgot password?" link */
  onForgotPassword?: () => void
  /** Called when user clicks to switch to sign-up */
  onSwitchToSignUp?: () => void
}

export interface SignUpFormProps {
  /** Current form state (idle, loading, success, error) */
  formState: FormState
  /** Validation errors to display inline */
  errors?: ValidationErrors
  /** Called when user submits the sign-up form */
  onSubmit?: (values: SignUpFormValues) => void
  /** Called when user clicks to switch to sign-in */
  onSwitchToSignIn?: () => void
}

export interface ForgotPasswordFormProps {
  /** Current form state (idle, loading, success, error) */
  formState: FormState
  /** Validation errors to display inline */
  errors?: ValidationErrors
  /** Called when user submits the forgot password form */
  onSubmit?: (values: ForgotPasswordFormValues) => void
  /** Called when user clicks to go back to sign-in */
  onBackToSignIn?: () => void
}

export interface ResetPasswordFormProps {
  /** Current form state (idle, loading, success, error) */
  formState: FormState
  /** Validation errors to display inline */
  errors?: ValidationErrors
  /** Called when user submits the new password */
  onSubmit?: (values: ResetPasswordFormValues) => void
  /** Called when user clicks to go back to sign-in */
  onBackToSignIn?: () => void
}

export interface AuthenticationProps {
  /** Initial view to display */
  initialView?: 'signIn' | 'signUp' | 'forgotPassword' | 'resetPassword'
  /** Current form state (idle, loading, success, error) */
  formState: FormState
  /** Validation errors to display inline */
  errors?: ValidationErrors
  /** Called when user submits sign-in */
  onSignIn?: (values: SignInFormValues) => void
  /** Called when user submits sign-up */
  onSignUp?: (values: SignUpFormValues) => void
  /** Called when user requests password reset */
  onForgotPassword?: (values: ForgotPasswordFormValues) => void
  /** Called when user sets new password */
  onResetPassword?: (values: ResetPasswordFormValues) => void
}
