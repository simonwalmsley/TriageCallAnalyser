import data from '@/../product/sections/history/data.json'
import { History } from './components/History'

export default function HistoryViewPreview() {
  return (
    <History
      historyItems={data.historyItems}
      emptyState={data.emptyState}
      preHeadline={data.labels.preHeadline}
      headline={data.labels.headline}
      showBackToResults={false}
      onSelectAnalysis={(id) => console.log('View analysis:', id)}
      onBackToResults={() => console.log('Navigate: Back to results')}
      onNew={() => console.log('Navigate: New analysis')}
      onStartAnalysis={() => console.log('Navigate: Start first analysis')}
    />
  )
}
