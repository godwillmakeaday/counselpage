import type { ProcessItem } from '../types'

interface ProcessStepProps {
  n: number
  step: ProcessItem
  last: boolean
}

export default function ProcessStep({ n, step, last }: ProcessStepProps) {
  return (
    <li className="cp-step">
      <div className="cp-step-rail">
        <span className="cp-step-num">{String(n).padStart(2, '0')}</span>
        {!last ? <span className="cp-step-line" /> : null}
      </div>
      <div className="cp-step-body">
        <h3 className="cp-step-title">{step.title}</h3>
        <p className="cp-step-text">{step.body}</p>
      </div>
    </li>
  )
}
