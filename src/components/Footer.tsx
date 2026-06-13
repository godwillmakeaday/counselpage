import Seal from './Seal'
import { scrollTo } from '../lib/scroll'

export default function Footer() {
  return (
    <footer className="cp-footer">
      <div className="cp-wrap cp-footer-inner">
        <div className="cp-footer-brand">
          <Seal size={40} />
          <div>
            <p className="cp-wordmark cp-wordmark--light">CounselPage</p>
            <p className="cp-substext">by MatterHouse Studio</p>
          </div>
        </div>
        <p className="cp-footer-tag">
          Digital business cards and professional websites for lawyers, chambers, and legal
          institutions.
        </p>
        <div className="cp-footer-links">
          <button onClick={() => scrollTo('packages')}>Packages</button>
          <button onClick={() => scrollTo('contact')}>Ethics note</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
          <button onClick={() => scrollTo('contact')}>Request page</button>
        </div>
        <div className="cp-rule cp-rule--full" />
        <p className="cp-footer-disclaimer">
          CounselPage is a professional digital presence service. It does not provide legal
          services to the public unless expressly offered through a qualified legal practitioner
          or law firm.
        </p>
        <p className="cp-footer-copy">
          © {new Date().getFullYear()} MatterHouse Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
