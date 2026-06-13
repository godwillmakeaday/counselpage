import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  light?: boolean
}

export default function SectionTitle({ children, light = false }: SectionTitleProps) {
  return (
    <h2 className="cp-h2" style={{ color: light ? 'var(--cp-ivory)' : 'var(--cp-ink)' }}>
      {children}
    </h2>
  )
}
