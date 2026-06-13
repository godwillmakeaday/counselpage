import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Seal from './Seal'
import { NAV } from '../data'
import { scrollTo } from '../lib/scroll'

export default function Header() {
  const [open, setOpen] = useState(false)

  const go = (id: string) => {
    setOpen(false)
    scrollTo(id)
  }

  return (
    <header className="cp-header">
      <div className="cp-header-inner">
        <button className="cp-brand" onClick={() => go('home')}>
          <Seal size={38} />
          <span className="cp-brand-text">
            <span className="cp-wordmark">CounselPage</span>
            <span className="cp-substext">by MatterHouse Studio</span>
          </span>
        </button>

        <nav className="cp-nav">
          {NAV.map(([label, id]) => (
            <button key={id} className="cp-nav-link" onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button className="cp-btn cp-btn--brass cp-header-cta" onClick={() => go('contact')}>
          Request a CounselPage
        </button>

        <button className="cp-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="cp-mobile-nav">
          {NAV.map(([label, id]) => (
            <button key={id} className="cp-mobile-link" onClick={() => go(id)}>
              {label}
            </button>
          ))}
          <button className="cp-btn cp-btn--brass cp-mobile-cta" onClick={() => go('contact')}>
            Request a CounselPage
          </button>
        </div>
      ) : null}
    </header>
  )
}
