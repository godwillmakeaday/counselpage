import { useState } from "react";
import "./App.css";

const packages = [
  {
    name: "Starter CounselPage",
    price: "₦75,000",
    tag: "Digital card",
    description:
      "For young lawyers and professionals who need a clean, dignified digital card.",
    features: [
      "One-page professional profile",
      "Photo and biography",
      "Practice areas",
      "WhatsApp, phone, and email buttons",
      "Office / location section",
      "Basic hosting setup",
      "Mobile-first design",
    ],
    button: "Choose Starter",
  },
  {
    name: "Professional CounselPage",
    price: "₦150,000",
    tag: "Most popular",
    description:
      "For lawyers who want stronger authority, fuller biography, articles, consultation request form, and refined public positioning.",
    features: [
      "Professional homepage / profile",
      "Detailed biography",
      "Practice focus section",
      "Consultation request form",
      "Article / update section",
      "Ethics-conscious disclaimer",
      "Search-friendly title and description",
      "Mobile-first premium design",
    ],
    button: "Choose Professional",
    featured: true,
  },
  {
    name: "Chambers Presence",
    price: "From ₦300,000",
    tag: "Firm / institution",
    description:
      "For law firms, chambers, NBA branches, legal associations, and legal institutions.",
    features: [
      "Full chambers website",
      "Team / lawyer profiles",
      "Practice area pages",
      "Contact and intake forms",
      "Office location",
      "Institutional copywriting",
      "Professional disclaimer",
      "Optional domain and email setup",
    ],
    button: "Request Chambers Quote",
  },
];

const receiveItems = [
  "Professional profile page",
  "Practice area presentation",
  "WhatsApp, phone, and email buttons",
  "Office / location section",
  "Biography and call-year details",
  "Consultation request form",
  "Article / update section",
  "Professional disclaimer",
  "Search-friendly page title and description",
  "Optional domain and email setup",
];

const samples = [
  {
    title: "Individual Lawyer Page",
    label: "Personal site",
    subtitle: "For personal professional identity",
  },
  {
    title: "Chambers Website",
    label: "Firm",
    subtitle: "For law firms and chambers",
  },
  {
    title: "NBA Branch / Institution Page",
    label: "Institution page",
    subtitle: "For branches, committees, conferences, and associations",
  },
];

const navLinks = [
  ["#case", "Case"],
  ["#work", "Work"],
  ["#packages", "Packages"],
  ["#samples", "Samples"],
  ["#method", "Method"],
  ["#request", "Request"],
];

function App() {
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const entries = Array.from(form.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    const subject = encodeURIComponent("CounselPage Request");
    const body = encodeURIComponent(entries);

    window.location.href = `mailto:info@matterhousestudio.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-mark">CP</span>
          <span>
            <strong>CounselPage</strong>
            <small>by MatterHouse Studio</small>
          </span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav className={menuOpen ? "open" : ""}>
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero section">
        <p className="eyebrow">Professional digital presence, for the Bar</p>
        <h1>The digital business card for the modern lawyer</h1>
        <p className="hero-copy">
          CounselPage helps lawyers, chambers, and legal institutions create
          dignified professional websites, shareable profile pages, and
          ethics-conscious digital presence systems.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#request">
            Start your CounselPage →
          </a>
          <a className="button secondary" href="#samples">
            View sample pages
          </a>
        </div>

        <p className="trust-line">
          Built for credibility. Designed for dignity. Structured for referral
          confidence.
        </p>
      </section>

      <section id="case" className="section cream">
        <p className="section-label">§ 01 The case for presence</p>
        <h2>Your reputation deserves more than a phone number</h2>
        <p className="lead">
          Many lawyers are still introduced only through a WhatsApp contact, a
          paper card, or word of mouth. Yet clients, institutions, and colleagues
          now search, verify, and compare professionals online before they make
          contact.
        </p>

        <div className="card-grid">
          <article className="card">
            <span className="icon">⌕</span>
            <h3>No searchable professional profile</h3>
            <p>
              Many lawyers are well known offline yet almost invisible online.
              When someone searches your name, nothing dignified answers.
            </p>
          </article>

          <article className="card">
            <span className="icon">▱</span>
            <h3>A weak first impression</h3>
            <p>
              A poor or absent digital presence can quietly reduce confidence
              before a single conversation has begun.
            </p>
          </article>

          <article className="card">
            <span className="icon">⌖</span>
            <h3>Scattered contact details</h3>
            <p>
              Clients struggle to find your chambers address, phone, email, and
              practice areas gathered in one settled place.
            </p>
          </article>

          <article className="card">
            <span className="icon">□</span>
            <h3>Unclear professional positioning</h3>
            <p>
              Many practitioners have no clear public description of what they
              do and whom they are equipped to serve.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="section-label">§ 02 The remedy</p>
        <h2>CounselPage turns professional reputation into a clean digital presence</h2>
        <p className="lead">
          A simple, elegant, shareable page that works at once as a digital
          business card, a mini-chambers profile, and a professional confidence
          page — never as noisy advertising.
        </p>

        <div className="feature-list">
          <div>Professional lawyer profile</div>
          <div>Chambers or law firm website</div>
          <div>Practice area presentation</div>
          <div>Consultation request form</div>
          <div>WhatsApp and email contact</div>
          <div>Ethics-conscious wording</div>
        </div>

        <blockquote>
          “A digital business card gives your name a home, your practice a
          frame, and your reputation a link.”
        </blockquote>
      </section>

      <section className="section navy">
        <p className="section-label gold">§ 03 What you receive</p>
        <h2>What your CounselPage can include</h2>

        <div className="receive-grid">
          {receiveItems.map((item) => (
            <div key={item} className="receive-item">
              <span>✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section cream">
        <p className="section-label">§ 04 The work</p>
        <h2>What we build</h2>

        <div className="card-grid three">
          <article className="card">
            <p className="mini-label">One page</p>
            <h3>Digital Business Card</h3>
            <p>
              A clean professional profile with a single link you can share on
              WhatsApp, LinkedIn, email signatures, and printed cards.
            </p>
          </article>

          <article className="card">
            <p className="mini-label">Personal site</p>
            <h3>Lawyer Profile Website</h3>
            <p>
              A fuller personal website with biography, practice focus, contact
              details, articles, and a consultation request form.
            </p>
          </article>

          <article className="card">
            <p className="mini-label">Firm</p>
            <h3>Chambers Website</h3>
            <p>
              A complete firm presence with team profiles, practice areas,
              contact and intake forms, office location, and institutional copy.
            </p>
          </article>

          <article className="card">
            <p className="mini-label">Institution</p>
            <h3>Legal Institution Pages</h3>
            <p>
              Pages for NBA branches, committees, conferences, training
              programmes, legal aid initiatives, and professional associations.
            </p>
          </article>
        </div>
      </section>

      <section id="packages" className="section">
        <p className="section-label">§ 05 Engagement</p>
        <h2>Simple packages for different professional needs</h2>

        <div className="pricing-grid">
          {packages.map((item) => (
            <article
              className={`price-card ${item.featured ? "featured" : ""}`}
              key={item.name}
            >
              <p className="mini-label">{item.tag}</p>
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
              <p>{item.description}</p>

              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <a href="#request" className="button price-button">
                {item.button}
              </a>
            </article>
          ))}
        </div>

        <p className="note">
          Custom pricing is available for NBA branches, conferences,
          committees, and institutional pages.
        </p>
      </section>

      <section className="section navy">
        <p className="section-label gold">§ 06 For the profession</p>
        <h2>For NBA branches and legal associations</h2>
        <p className="lead">
          CounselPage can help NBA branches and legal associations present their
          executives, events, notices, committees, programmes, and contact
          channels in a more organised digital format.
        </p>

        <div className="dark-list">
          <div>Branch executive profiles</div>
          <div>Event announcement pages</div>
          <div>Conference pages</div>
          <div>Membership information</div>
          <div>Branch contact page</div>
          <div>Committee pages</div>
          <div>Notices and updates</div>
          <div>Sponsor / partner section</div>
        </div>

        <a href="#request" className="button gold-button">
          Request Institution Page
        </a>
      </section>

      <section className="section cream">
        <p className="section-label">§ 07 Standards</p>
        <h2>Designed with professional dignity in mind</h2>
        <p className="lead">
          CounselPage does not build loud, misleading, or improper promotional
          pages. The service attends to professional presentation, contact
          clarity, institutional credibility, and dignified visibility.
        </p>

        <div className="card-grid three">
          <article className="card">
            <h3>No false claims</h3>
            <p>
              We avoid language that suggests guaranteed outcomes, superiority,
              or any improper inducement to engage.
            </p>
          </article>

          <article className="card">
            <h3>No noisy marketing</h3>
            <p>
              We design calm, refined, professional pages suitable for legal
              practice and its expected restraint.
            </p>
          </article>

          <article className="card">
            <h3>Clear disclaimers</h3>
            <p>
              Pages can carry appropriate notes on consultation, engagement, and
              the formation of a professional relationship.
            </p>
          </article>
        </div>

        <div className="disclaimer">
          <p className="mini-label">Suggested disclaimer</p>
          <p>
            Information displayed on a CounselPage website is for professional
            identification and general information only. It is not legal advice
            and does not create a lawyer-client relationship unless formal
            engagement is completed.
          </p>
        </div>
      </section>

      <section id="samples" className="section">
        <p className="section-label">§ 08 Illustrations</p>
        <h2>Sample page styles</h2>

        <div className="sample-grid">
          {samples.map((sample) => (
            <article className="sample-card" key={sample.title}>
              <p className="mini-label">{sample.label}</p>
              <h3>{sample.title}</h3>
              <p>{sample.subtitle}</p>
              <a href="#request">Preview style ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section cream">
        <p className="section-label">§ 09 Continuity</p>
        <h2>Updates and maintenance</h2>
        <p className="lead">
          A CounselPage should remain current. Optional maintenance support is
          available for new photos, profile updates, article uploads, contact
          changes, event updates, branch notices, and technical support.
        </p>

        <div className="card-grid three">
          <article className="card">
            <h3>Profile updates</h3>
            <p>
              Update biography, practice areas, phone numbers, addresses, photos,
              and professional details.
            </p>
          </article>

          <article className="card">
            <h3>Article and notice uploads</h3>
            <p>
              Add short updates, publications, event notices, branch
              announcements, and programme information.
            </p>
          </article>

          <article className="card">
            <h3>Technical support and page adjustments</h3>
            <p>
              Maintain page links, responsiveness, basic hosting setup, and
              minor design adjustments.
            </p>
          </article>
        </div>
      </section>

      <section id="method" className="section">
        <p className="section-label">§ 10 The method</p>
        <h2>How it works</h2>

        <div className="timeline">
          {[
            [
              "Submit your details",
              "You provide your name, photo, biography, contact details, practice areas, and preferred style.",
            ],
            [
              "We structure your profile",
              "We organise your information into a clear, professional public presentation.",
            ],
            [
              "We design your page",
              "Your CounselPage is designed with dignity, clarity, and mobile-first responsiveness.",
            ],
            [
              "You review and approve",
              "You check your details, wording, and contact links before anything is published.",
            ],
            [
              "Your page goes live",
              "You receive a shareable link for WhatsApp, email, social media, and printed business cards.",
            ],
          ].map(([title, text], index) => (
            <div className="timeline-item" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="request" className="section navy">
        <p className="section-label gold">§ 11 Begin</p>
        <h2>Request your CounselPage</h2>
        <p className="lead">
          Tell us who you are and what you practise. We will reply to clarify
          your details and propose the right format.
        </p>

        <form className="request-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input name="Full name" placeholder="e.g. Amina Yusuf" required />
          </label>

          <label>
            Professional title
            <input
              name="Professional title"
              placeholder="e.g. Legal Practitioner"
              required
            />
          </label>

          <label>
            Year of call / professional status
            <input name="Year of call" placeholder="e.g. 2018 call" />
          </label>

          <label>
            Firm or chambers name
            <input name="Firm or chambers" placeholder="e.g. Yusuf & Co." />
          </label>

          <label>
            Type of page needed
            <select name="Type of page needed">
              <option>Digital Business Card</option>
              <option>Professional CounselPage</option>
              <option>Chambers Website</option>
              <option>NBA Branch / Institution Page</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <label>
            Phone number
            <input name="Phone number" placeholder="080..." required />
          </label>

          <label>
            Email address
            <input
              name="Email address"
              type="email"
              placeholder="name@email.com"
              required
            />
          </label>

          <label>
            City / State
            <input name="City / State" placeholder="e.g. Lafia, Nasarawa" />
          </label>

          <label>
            Practice areas
            <input
              name="Practice areas"
              placeholder="e.g. Corporate law, property, litigation"
            />
          </label>

          <label>
            Do you already have a domain?
            <select name="Existing domain">
              <option>No</option>
              <option>Yes</option>
              <option>Not sure</option>
            </select>
          </label>

          <label>
            Preferred package
            <select name="Preferred package">
              <option>Starter CounselPage — ₦75,000</option>
              <option>Professional CounselPage — ₦150,000</option>
              <option>Chambers Presence — From ₦300,000</option>
              <option>Institutional / custom package</option>
            </select>
          </label>

          <label className="full">
            Brief description
            <textarea
              name="Brief description"
              placeholder="Tell us a little about your practice and what you need."
              rows="6"
            />
          </label>

          <button className="button gold-button form-button" type="submit">
            Submit Request
          </button>

          {sent && (
            <p className="form-note">
              Your email app should open with the request details. Send the
              message to complete your request.
            </p>
          )}
        </form>
      </section>

      <footer>
        <strong>CounselPage</strong>
        <p>By MatterHouse Studio</p>
        <p>
          Professional digital presence for lawyers, chambers, legal
          institutions, and the Bar.
        </p>
      </footer>
    </main>
  );
}

export default App;
