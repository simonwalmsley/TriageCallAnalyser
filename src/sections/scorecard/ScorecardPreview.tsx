import data from '@/../product/sections/scorecard/data.json'
import { Scorecard } from './components/Scorecard'

export default function ScorecardPreview() {
  return (
    <Scorecard
      overallScore={data.overallScore}
      competencyScores={data.competencyScores}
      preHeadline={data.labels.preHeadline}
      headline={data.labels.headline}
      competencyScoresHeading={data.labels.competencyScoresHeading}
      onBackToResults={() => console.log('Navigate to results')}
      onHistory={() => console.log('Navigate to history')}
      onNew={() => console.log('Start new analysis')}
    />
  )
}
