import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react'

import Header from './components/Header'
import Hero from './components/Hero'
import Eyebrow from './components/Eyebrow'
import SectionTitle from './components/SectionTitle'
import FeatureCard from './components/FeatureCard'
import PackageCard from './components/PackageCard'
import SampleCard from './components/SampleCard'
import ProcessStep from './components/ProcessStep'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

import {
  PROBLEMS,
  FEATURES,
  WHAT_WE_BUILD,
  PACKAGES,
  NBA_FEATURES,
  ETHICS,
  SAMPLES,
  PROCESS,
  WA_LINK,
  PHONE_DISPLAY,
} from './data'
import { scrollTo } from './lib/scroll'

export default function App() {
  return (
    <div className="counselpage">
      <Header />
      <Hero />

      {/* PROBLEM */}
      <section className="cp-section cp-section--ivory">
        <div className="cp-wrap">
          <Eyebrow index="01">The case for presence</Eyebrow>
          <SectionTitle>Your reputation deserves more than a phone number</SectionTitle>
          <p className="cp-section-lead">
            Many lawyers are still introduced only through a WhatsApp contact, a paper card, or
            word of mouth. Yet clients, institutions, and colleagues now search, verify, and
            compare professionals online before they ever make contact.
          </p>
          <div className="cp-grid cp-grid-4">
            {PROBLEMS.map((p) => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="cp-section">
        <div className="cp-wrap">
          <Eyebrow index="02">The remedy</Eyebrow>
          <SectionTitle>
            CounselPage turns professional reputation into a clean digital presence
          </SectionTitle>
          <p className="cp-section-lead">
            A simple, elegant, shareable page that works at once as a digital business card, a
            mini-chambers profile, and a client trust page — never as noisy advertising.
          </p>
          <div className="cp-grid cp-grid-3">
            {FEATURES.map((f) => (
              <div key={f.label} className="cp-feature-row">
                <span className="cp-card-icon">
                  <f.icon size={18} strokeWidth={1.6} />
                </span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
          <p className="cp-pullquote">
            “A digital business card gives your name a home, your practice a frame, and your
            reputation a link.”
          </p>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section id="build" className="cp-section cp-section--ivory cp-anchor">
        <div className="cp-wrap">
          <Eyebrow index="03">The work</Eyebrow>
          <SectionTitle>What we build</SectionTitle>
          <div className="cp-grid cp-grid-2">
            {WHAT_WE_BUILD.map((w) => (
              <div key={w.title} className="cp-build-card">
                <div className="cp-build-head">
                  <span className="cp-card-icon">
                    <w.icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="cp-build-kicker">{w.kicker}</span>
                </div>
                <h3 className="cp-build-title">{w.title}</h3>
                <p className="cp-card-body">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="cp-section cp-anchor">
        <div className="cp-wrap">
          <Eyebrow index="04">Engagement</Eyebrow>
          <SectionTitle>Simple packages for different professional needs</SectionTitle>
          <div className="cp-grid cp-grid-3 cp-pkg-grid">
            {PACKAGES.map((p) => (
              <PackageCard key={p.name} pkg={p} />
            ))}
          </div>
          <p className="cp-section-note">
            Custom pricing is available for NBA branches, legal associations, conferences, and
            institutional pages.
          </p>
        </div>
      </section>

      {/* NBA BRANCHES */}
      <section id="nba" className="cp-section cp-section--navy cp-anchor">
        <div className="cp-wrap">
          <Eyebrow index="05">
            <span style={{ color: 'var(--cp-brass)' }}>For the profession</span>
          </Eyebrow>
          <SectionTitle light>For NBA branches and legal associations</SectionTitle>
          <p className="cp-section-lead cp-lead-light">
            CounselPage can help NBA branches and legal associations present their executives,
            events, notices, committees, programmes, and contact channels in a more organised
            digital format.
          </p>
          <div className="cp-nba-grid">
            {NBA_FEATURES.map((n) => (
              <div key={n} className="cp-nba-item">
                <span className="cp-nba-dot" />
                {n}
              </div>
            ))}
          </div>
          <div className="cp-nba-foot">
            <button className="cp-btn cp-btn--brass" onClick={() => scrollTo('contact')}>
              Discuss a branch page <ArrowRight size={16} strokeWidth={2} />
            </button>
            <p className="cp-disclaimer">
              CounselPage is an independent professional service and is not an official platform of
              the Nigerian Bar Association unless formally engaged by a branch or institution.
            </p>
          </div>
        </div>
      </section>

      {/* ETHICS */}
      <section className="cp-section cp-section--ivory">
        <div className="cp-wrap">
          <Eyebrow index="06">Standards</Eyebrow>
          <SectionTitle>Designed with professional dignity in mind</SectionTitle>
          <p className="cp-section-lead">
            CounselPage does not build loud, misleading, or improper promotional pages. The service
            attends to professional presentation, contact clarity, institutional credibility, and
            dignified visibility — nothing more, nothing less.
          </p>
          <div className="cp-grid cp-grid-3">
            {ETHICS.map((e) => (
              <FeatureCard key={e.title} icon={e.icon} title={e.title} body={e.body} />
            ))}
          </div>
          <div className="cp-plate cp-disclaimer-plate">
            <span className="cp-eyebrow" style={{ marginBottom: 8 }}>
              Suggested disclaimer
            </span>
            <p>
              Information on a CounselPage website is for professional identification and general
              information only. A lawyer-client relationship is created only after formal engagement
              and conflict checks where applicable.
            </p>
          </div>
        </div>
      </section>

      {/* SAMPLES */}
      <section id="samples" className="cp-section cp-anchor">
        <div className="cp-wrap">
          <Eyebrow index="07">Illustrations</Eyebrow>
          <SectionTitle>Sample CounselPage formats</SectionTitle>
          <p className="cp-section-lead">
            Fictional examples, shown only to convey the register and structure of a finished page.
          </p>
          <div className="cp-grid cp-grid-3">
            {SAMPLES.map((s) => (
              <SampleCard key={s.name} sample={s} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="cp-section cp-section--ivory cp-anchor">
        <div className="cp-wrap cp-wrap--narrow">
          <Eyebrow index="08">The method</Eyebrow>
          <SectionTitle>How it works</SectionTitle>
          <ol className="cp-steps">
            {PROCESS.map((step, i) => (
              <ProcessStep key={step.title} n={i + 1} step={step} last={i === PROCESS.length - 1} />
            ))}
          </ol>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="contact" className="cp-section cp-section--navy cp-anchor">
        <div className="cp-wrap cp-wrap--narrow">
          <Eyebrow index="09">
            <span style={{ color: 'var(--cp-brass)' }}>Begin</span>
          </Eyebrow>
          <SectionTitle light>Request your CounselPage</SectionTitle>
          <p className="cp-section-lead cp-lead-light">
            Tell us who you are and what you practise. We will reply to clarify your details and
            propose the right format.
          </p>
          <LeadForm />
        </div>
      </section>

      {/* CONTACT */}
      <section className="cp-section">
        <div className="cp-wrap cp-contact">
          <div className="cp-contact-left">
            <Eyebrow>The studio</Eyebrow>
            <p className="cp-studio-name">MatterHouse Studio</p>
            <p className="cp-studio-tag">Professional digital presence systems</p>
            <div className="cp-rule" />
            <ul className="cp-contact-list">
              <li>
                <Mail size={16} strokeWidth={1.7} /> info@matterhousestudio.com
              </li>
              <li>
                <ArrowUpRight size={16} strokeWidth={1.7} /> matterhouse.com
              </li>
              <li>
                <Phone size={16} strokeWidth={1.7} /> {PHONE_DISPLAY}
              </li>
            </ul>
          </div>
          <div className="cp-contact-right">
            <a className="cp-btn cp-btn--brass" href={WA_LINK} target="_blank" rel="noreferrer">
              <MessageCircle size={16} strokeWidth={2} /> Chat on WhatsApp
            </a>
            <p className="cp-pullquote cp-pullquote--sm">
              “CounselPage is not noisy advertising. It is professional visibility, structured with
              dignity.”
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
