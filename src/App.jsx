import { useState } from 'react'
import './App.css'

// --- Contact details (single source of truth) ---
const WA = '2347030673410' // WhatsApp number in international format, no +
const WA_DISPLAY = '0703 067 3410'
const EMAIL = 'info@matterhousestudio.com'
const HELLO = `https://wa.me/${WA}?text=${encodeURIComponent(
  "Hello CounselPage, I'd like to discuss a professional page.",
)}`

const packages = [
  {
    title: 'Starter CounselPage',
    price: '₦75,000',
    text: 'For young lawyers and professionals who need a clean, dignified digital card.',
    items: ['One-page professional profile', 'Photo and biography', 'Practice areas', 'WhatsApp, phone and email buttons', 'Office / location section', 'Mobile-first design']
  },
  {
    title: 'Professional CounselPage',
    price: '₦150,000',
    text: 'For lawyers who want stronger authority, deeper client confidence and a fuller professional profile.',
    items: ['Professional homepage / profile', 'Detailed biography', 'Practice focus section', 'Consultation request form', 'Article / update section', 'Ethics-conscious disclaimer'],
    featured: true
  },
  {
    title: 'Chambers Presence',
    price: 'From ₦300,000',
    text: 'For law firms, chambers, NBA branches, legal associations and legal institutions.',
    items: ['Full chambers website', 'Team / lawyer profiles', 'Practice area pages', 'Contact and intake forms', 'Office location', 'Institutional copywriting']
  }
]

const EMPTY = {
  name: '',
  title: '',
  pageType: 'Digital Business Card',
  phone: '',
  email: '',
  city: '',
  description: '',
}

function App() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return
    const msg = [
      'New CounselPage request',
      '',
      `Name: ${form.name}`,
      `Professional title: ${form.title}`,
      `Type of page: ${form.pageType}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `City / State: ${form.city}`,
      '',
      `Details: ${form.description}`,
    ].join('\n')
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  return (
    <main>
      <header className="header">
        <a className="brand" href="#top">
          <span className="logo">CP</span>
          <span>
            <strong>CounselPage</strong>
            <small>By MatterHouse Studio</small>
          </span>
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#packages">Packages</a>
          <a href="#samples">Samples</a>
          <a href="#request">Request</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <p className="eyebrow">Professional digital presence, for the Bar</p>
        <h1>The digital business card for the modern lawyer</h1>
        <p className="lead">
          CounselPage helps lawyers, chambers and legal institutions create dignified
          professional websites, shareable profile pages and ethics-conscious digital
          presence systems.
        </p>
        <div className="actions">
          <a className="btn primary" href="#request">Start your CounselPage</a>
          <a className="btn whatsapp" href={HELLO} target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
          <a className="btn" href="#packages">View packages</a>
        </div>
        <p className="trust">Built for credibility. Designed for dignity. Structured for referral confidence.</p>
      </section>

      <section className="section cream">
        <p className="label">§ 01 The case for presence</p>
        <h2>Your reputation deserves more than a phone number</h2>
        <p className="lead">
          Many lawyers are still introduced only through a WhatsApp contact, a paper card
          or word of mouth. Yet clients, institutions and colleagues now search, verify
          and compare professionals online before they make contact.
        </p>

        <div className="grid">
          <article className="card">
            <h3>No searchable professional profile</h3>
            <p>Many lawyers are well known offline yet almost invisible online.</p>
          </article>
          <article className="card">
            <h3>A weak first impression</h3>
            <p>A poor or absent digital presence can quietly reduce confidence.</p>
          </article>
          <article className="card">
            <h3>Scattered contact details</h3>
            <p>Phone, email, address and practice areas need one settled place.</p>
          </article>
          <article className="card">
            <h3>Unclear positioning</h3>
            <p>Your public profile should explain what you do and whom you serve.</p>
          </article>
        </div>
      </section>

      <section id="work" className="section">
        <p className="label">§ 02 The work</p>
        <h2>What we build</h2>
        <div className="grid three">
          <article className="card">
            <span>One page</span>
            <h3>Digital Business Card</h3>
            <p>A clean professional profile with a single link for WhatsApp, email signatures and printed cards.</p>
          </article>
          <article className="card">
            <span>Personal site</span>
            <h3>Lawyer Profile Website</h3>
            <p>A fuller personal website with biography, practice focus, articles and consultation request form.</p>
          </article>
          <article className="card">
            <span>Firm</span>
            <h3>Chambers Website</h3>
            <p>A complete firm presence with lawyers, practice areas, contact forms and institutional copy.</p>
          </article>
        </div>
      </section>

      <section id="packages" className="section cream">
        <p className="label">§ 03 Engagement</p>
        <h2>Simple packages for different professional needs</h2>
        <div className="pricing">
          {packages.map((item) => (
            <article className={item.featured ? 'price featured' : 'price'} key={item.title}>
              {item.featured && <b className="popular">Most popular</b>}
              <h3>{item.title}</h3>
              <strong className="amount">{item.price}</strong>
              <p>{item.text}</p>
              <ul>
                {item.items.map((feature) => <li key={feature}>✓ {feature}</li>)}
              </ul>
              <a className="btn primary" href="#request">Choose package</a>
            </article>
          ))}
        </div>
        <p className="note">Custom pricing is available for NBA branches, conferences, committees and institutional pages.</p>
      </section>

      <section className="section navy">
        <p className="label gold">§ 04 For the profession</p>
        <h2>For NBA branches and legal associations</h2>
        <p className="lead">
          CounselPage can help NBA branches and legal associations present executives,
          events, notices, committees, programmes and contact channels in a more organised
          digital format.
        </p>
        <div className="list">
          <span>Branch executive profiles</span>
          <span>Event announcement pages</span>
          <span>Conference pages</span>
          <span>Membership information</span>
          <span>Committee pages</span>
          <span>Notices and updates</span>
        </div>
      </section>

      <section className="section">
        <p className="label">§ 05 Standards</p>
        <h2>Designed with professional dignity in mind</h2>
        <p className="lead">
          CounselPage does not build loud, misleading or improper promotional pages.
          The service attends to professional presentation, contact clarity, institutional
          credibility and dignified visibility.
        </p>
        <div className="disclaimer">
          Information displayed on a CounselPage website is for professional identification
          and general information only. It is not legal advice and does not create a
          lawyer-client relationship unless formal engagement is completed.
        </div>
      </section>

      <section id="samples" className="section cream">
        <p className="label">§ 06 Illustrations</p>
        <h2>Sample page styles</h2>
        <div className="grid three">
          <article className="card"><h3>Individual Lawyer Page</h3><p>For personal professional identity.</p></article>
          <article className="card"><h3>Chambers Website</h3><p>For law firms and chambers.</p></article>
          <article className="card"><h3>NBA Branch Event Page</h3><p>For branches, committees and conferences.</p></article>
        </div>
      </section>

      <section className="section">
        <p className="label">§ 07 The method</p>
        <h2>How it works</h2>
        <div className="steps">
          <p><b>01 Submit your details</b><br />Name, photo, biography, contact details and practice areas.</p>
          <p><b>02 We structure your profile</b><br />We organise your information into a clear professional presentation.</p>
          <p><b>03 We design your page</b><br />Your CounselPage is designed with dignity and mobile-first responsiveness.</p>
          <p><b>04 You review and approve</b><br />You check details and contact links before publication.</p>
          <p><b>05 Your page goes live</b><br />You receive a shareable link for WhatsApp, email and printed cards.</p>
        </div>
      </section>

      <section id="request" className="section navy">
        <p className="label gold">§ 08 Begin</p>
        <h2>Request your CounselPage</h2>
        <p className="lead">
          Tell us who you are and what you practise. Sending opens WhatsApp with your
          details ready to go — just press send and we will reply to clarify and propose
          the right format.
        </p>

        {sent ? (
          <div className="sent">
            <h3>WhatsApp is opening…</h3>
            <p>
              Your details have been prepared in a WhatsApp message. Please press send in
              WhatsApp to reach us. If it did not open, message us directly on{' '}
              <a href={HELLO} target="_blank" rel="noopener noreferrer">{WA_DISPLAY}</a>{' '}
              or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
            <button className="btn" type="button" onClick={() => { setForm(EMPTY); setSent(false) }}>
              Make another request
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={submit}>
            <label className="field">
              <span>Full name</span>
              <input value={form.name} onChange={update('name')} placeholder="e.g. Amina Yusuf" required />
            </label>
            <label className="field">
              <span>Professional title</span>
              <input value={form.title} onChange={update('title')} placeholder="e.g. Legal Practitioner" required />
            </label>
            <label className="field full">
              <span>Type of page</span>
              <select value={form.pageType} onChange={update('pageType')}>
                <option>Digital Business Card</option>
                <option>Professional CounselPage</option>
                <option>Chambers Website</option>
                <option>NBA Branch / Institution Page</option>
              </select>
            </label>
            <label className="field">
              <span>Phone number</span>
              <input value={form.phone} onChange={update('phone')} placeholder="080..." required />
            </label>
            <label className="field">
              <span>Email address</span>
              <input type="email" value={form.email} onChange={update('email')} placeholder="name@email.com" required />
            </label>
            <label className="field full">
              <span>City / State</span>
              <input value={form.city} onChange={update('city')} placeholder="e.g. Lafia, Nasarawa" />
            </label>
            <label className="field full">
              <span>Brief description</span>
              <textarea value={form.description} onChange={update('description')} rows="5" placeholder="Tell us a little about your practice and what you need." />
            </label>
            <button className="btn goldbtn" type="submit">Send via WhatsApp</button>
          </form>
        )}
      </section>

      <footer>
        <div className="footer-grid">
          <div>
            <strong>CounselPage</strong>
            <p>By MatterHouse Studio — professional digital presence for lawyers, chambers and the Bar.</p>
          </div>
          <div className="footer-contact">
            <a href={HELLO} target="_blank" rel="noopener noreferrer">WhatsApp · {WA_DISPLAY}</a>
            <a href={`tel:+${WA}`}>Call · {WA_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
