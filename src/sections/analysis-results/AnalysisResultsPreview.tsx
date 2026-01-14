import { useState } from 'react'
import data from '@/../product/sections/analysis-results/data.json'
import { AnalysisResults } from './components/AnalysisResults'
import type { Analysis, ResultStep } from '@/../product/sections/analysis-results/types'

export default function AnalysisResultsPreview() {
  const [currentStep, setCurrentStep] = useState<ResultStep>(1)

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as ResultStep)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as ResultStep)
    }
  }

  const handleGoToStep = (step: ResultStep) => {
    setCurrentStep(step)
  }

  return (
    <AnalysisResults
      analysis={data.analysis as Analysis}
      currentStep={currentStep}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      onGoToStep={handleGoToStep}
      onGoToTimestamp={(timestamp) => console.log('Go to timestamp:', timestamp)}
      onViewScorecard={() => console.log('View Scorecard')}
      onViewHistory={() => console.log('View History')}
      onNewAnalysis={() => console.log('Start New Analysis')}
    />
  )
}
