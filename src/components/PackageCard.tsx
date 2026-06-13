import { Check } from 'lucide-react'
import type { Package } from '../types'
import { scrollTo } from '../lib/scroll'

interface PackageCardProps {
  pkg: Package
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className={`cp-pkg ${pkg.featured ? 'cp-pkg--featured' : ''}`}>
      {pkg.featured ? <span className="cp-ribbon">Most popular</span> : null}
      <p className="cp-pkg-name">{pkg.name}</p>
      <p className="cp-pkg-price">{pkg.price}</p>
      <p className="cp-pkg-blurb">{pkg.blurb}</p>
      <div className="cp-rule" />
      <ul className="cp-pkg-list">
        {pkg.includes.map((item) => (
          <li key={item}>
            <Check size={15} strokeWidth={2} className="cp-check" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => scrollTo('contact')}
        className={`cp-btn ${pkg.featured ? 'cp-btn--brass' : 'cp-btn--outline'} cp-pkg-cta`}
      >
        {pkg.cta}
      </button>
    </div>
  )
}
