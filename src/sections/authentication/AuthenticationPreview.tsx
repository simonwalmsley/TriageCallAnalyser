import { useState } from 'react'
import data from '@/../product/sections/authentication/data.json'
import { AuthenticationForm } from './components/AuthenticationForm'
import type { FormState } from '@/../product/sections/authentication/types'

export default function AuthenticationPreview() {
  const [formState, setFormState] = useState<FormState>(data.formStates.idle as FormState)

  // Simulate form submission with loading state
  const simulateSubmit = (action: string, values: unknown) => {
    console.log(`${action}:`, values)
    setFormState(data.formStates.loading as FormState)

    // Simulate API call
    setTimeout(() => {
      setFormState(data.formStates.success as FormState)
    }, 1500)
  }

  return (
    <AuthenticationForm
      initialView="signIn"
      formState={formState}
      onSignIn={(values) => simulateSubmit('Sign in', values)}
      onSignUp={(values) => simulateSubmit('Sign up', values)}
      onForgotPassword={(values) => simulateSubmit('Forgot password', values)}
      onResetPassword={(values) => simulateSubmit('Reset password', values)}
    />
  )
}
