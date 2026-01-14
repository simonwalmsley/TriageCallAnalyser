// =============================================================================
// Data Types
// =============================================================================

export interface User {
  id: string
  email: string
  fullName: string
}

export interface UploadedFile {
  name: string
  size: number
  type: string
}

export type InputStatus = 'empty' | 'hasText' | 'hasFile' | 'processing'

export interface InputState {
  status: InputStatus
  hasContent: boolean
  isProcessing: boolean
}

// =============================================================================
// Component Props
// =============================================================================

export interface CallInputProps {
  /** Whether the user is logged in */
  isLoggedIn: boolean
  /** Current user info (when logged in) */
  user?: User
  /** Current input state */
  inputState: InputState
  /** Current transcript text in the textarea */
  transcriptText?: string
  /** Uploaded file info (when a file has been uploaded) */
  uploadedFile?: UploadedFile
  /** Called when user types/pastes in the textarea */
  onTextChange?: (text: string) => void
  /** Called when user uploads a file */
  onFileUpload?: (file: File) => void
  /** Called when user removes the uploaded file */
  onFileRemove?: () => void
  /** Called when user clicks "Start Analysis" */
  onStartAnalysis?: () => void
  /** Called when user clicks "Log in" */
  onLogIn?: () => void
  /** Called when user clicks "Sign up" */
  onSignUp?: () => void
}

export interface ProcessingScreenProps {
  /** Primary message to display */
  primaryMessage: string
  /** Secondary/supporting message */
  secondaryMessage: string
  /** Called when processing completes (for auto-navigation) */
  onComplete?: () => void
}
