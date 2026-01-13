import { useState } from 'react'
import data from '@/../product/sections/call-input/data.json'
import { CallInput } from './components/CallInput'
import { ProcessingScreen } from './components/ProcessingScreen'
import type { InputState, UploadedFile } from '@/../product/sections/call-input/types'

export default function CallInputPreview() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [transcriptText, setTranscriptText] = useState('')
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  // Determine input state
  const getInputState = (): InputState => {
    if (isProcessing) {
      return data.inputStates.processing as InputState
    }
    if (uploadedFile) {
      return data.inputStates.hasFile as InputState
    }
    if (transcriptText.trim()) {
      return data.inputStates.hasText as InputState
    }
    return data.inputStates.empty as InputState
  }

  const handleFileUpload = (file: File) => {
    setUploadedFile({
      name: file.name,
      size: file.size,
      type: file.type,
    })
    setTranscriptText('')
  }

  const handleFileRemove = () => {
    setUploadedFile(null)
  }

  const handleStartAnalysis = () => {
    setIsProcessing(true)
  }

  const handleProcessingComplete = () => {
    console.log('Analysis complete - navigate to results')
    setIsProcessing(false)
    // In real app, this would navigate to results
  }

  // Show processing screen when processing
  if (isProcessing) {
    return (
      <ProcessingScreen
        primaryMessage={data.processingMessages.primary}
        secondaryMessage={data.processingMessages.secondary}
        onComplete={handleProcessingComplete}
      />
    )
  }

  return (
    <CallInput
      isLoggedIn={isLoggedIn}
      user={isLoggedIn ? data.user : undefined}
      inputState={getInputState()}
      transcriptText={transcriptText}
      uploadedFile={uploadedFile || undefined}
      onTextChange={setTranscriptText}
      onFileUpload={handleFileUpload}
      onFileRemove={handleFileRemove}
      onStartAnalysis={handleStartAnalysis}
      onLogIn={() => setIsLoggedIn(true)}
      onSignUp={() => setIsLoggedIn(true)}
    />
  )
}
