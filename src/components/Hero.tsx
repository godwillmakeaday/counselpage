import { ArrowRight } from 'lucide-react'
import Eyebrow from './Eyebrow'
import ProfileCard from './ProfileCard'
import { scrollTo } from '../lib/scroll'

export default function Hero() {
  return (
    <section id="home" className="cp-hero cp-section">
      <div className="cp-hero-grid">
        <div className="cp-hero-copy">
          <Eyebrow>Professional digital presence, for the Bar</Eyebrow>
          <h1 className="cp-h1">The digital business card for the modern lawyer</h1>
          <p className="cp-lead">
            CounselPage helps lawyers, chambers, and legal institutions create dignified
            professional websites, shareable profile pages, and ethics-conscious digital presence
            systems.
          </p>
          <div className="cp-hero-cta">
            <button className="cp-btn cp-btn--brass" onClick={() => scrollTo('contact')}>
              Start your CounselPage <ArrowRight size={16} strokeWidth={2} />
            </button>
            <button className="cp-btn cp-btn--outline" onClick={() => scrollTo('packages')}>
              View packages
            </button>
          </div>
          <p className="cp-hero-trust">
            Built for credibility. Designed for dignity. Structured for trust.
          </p>
        </div>
        <div className="cp-hero-art">
          <ProfileCard />
        </div>
      </div>
    </section>
  )
}
