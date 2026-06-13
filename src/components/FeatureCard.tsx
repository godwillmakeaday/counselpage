import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  body?: string
}

export default function FeatureCard({ icon: Icon, title, body }: FeatureCardProps) {
  return (
    <div className="cp-card">
      <span className="cp-card-icon">
        <Icon size={20} strokeWidth={1.6} />
      </span>
      <h3 className="cp-card-title">{title}</h3>
      {body ? <p className="cp-card-body">{body}</p> : null}
    </div>
  )
}
