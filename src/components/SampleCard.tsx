import { ArrowUpRight } from 'lucide-react'
import type { Sample } from '../types'
import Seal from './Seal'

interface SampleCardProps {
  sample: Sample
}

export default function SampleCard({ sample }: SampleCardProps) {
  return (
    <div className="cp-sample">
      <div className="cp-sample-top">
        <span className="cp-sample-kind">{sample.kind}</span>
        <Seal size={38} />
      </div>
      <h3 className="cp-sample-name">{sample.name}</h3>
      <p className="cp-sample-areas">{sample.areas}</p>
      <div className="cp-rule" />
      <button className="cp-btn cp-btn--ghost cp-sample-btn">
        Preview style <ArrowUpRight size={15} strokeWidth={2} />
      </button>
    </div>
  )
}
