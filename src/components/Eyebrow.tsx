import type { ReactNode } from 'react'

interface EyebrowProps {
  index?: string
  children: ReactNode
}

export default function Eyebrow({ index, children }: EyebrowProps) {
  return (
    <p className="cp-eyebrow">
      {index ? <span className="cp-eyebrow-num">§ {index}</span> : null}
      {children}
    </p>
  )
}
