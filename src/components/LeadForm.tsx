import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { PAGE_TYPES, PACKAGE_OPTIONS } from '../data'

interface FormState {
  name: string
  title: string
  pageType: string
  phone: string
  email: string
  city: string
  description: string
  pkg: string
}

const EMPTY: FormState = {
  name: '',
  title: '',
  pageType: PAGE_TYPES[0],
  phone: '',
  email: '',
  city: '',
  description: '',
  pkg: PACKAGE_OPTIONS[0],
}

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [sent, setSent] = useState(false)

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = () => {
    if (!form.name.trim() || !form.phone.trim()) return
    setSent(true)
  }

  if (sent) {
    return (
      <div className="cp-form cp-form--done">
        <span className="cp-done-seal">
          <Check size={26} strokeWidth={2.2} />
        </span>
        <h3 className="cp-done-title">Request received</h3>
        <p className="cp-done-text">
          Thank you. Your CounselPage request has been received. We will contact you to clarify
          your details.
        </p>
        <button
          className="cp-btn cp-btn--outline"
          onClick={() => {
            setForm(EMPTY)
            setSent(false)
          }}
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <div className="cp-form">
      <div className="cp-field-grid">
        <label className="cp-field">
          <span>Full name</span>
          <input className="cp-input" value={form.name} onChange={update('name')} placeholder="e.g. Amina Yusuf" />
        </label>
        <label className="cp-field">
          <span>Professional title</span>
          <input className="cp-input" value={form.title} onChange={update('title')} placeholder="e.g. Legal Practitioner" />
        </label>
        <label className="cp-field cp-field--full">
          <span>Type of page needed</span>
          <select className="cp-input cp-select" value={form.pageType} onChange={update('pageType')}>
            {PAGE_TYPES.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="cp-field">
          <span>Phone number</span>
          <input className="cp-input" value={form.phone} onChange={update('phone')} placeholder="080..." />
        </label>
        <label className="cp-field">
          <span>Email address</span>
          <input className="cp-input" type="email" value={form.email} onChange={update('email')} placeholder="name@email.com" />
        </label>
        <label className="cp-field cp-field--full">
          <span>City / State</span>
          <input className="cp-input" value={form.city} onChange={update('city')} placeholder="e.g. Lafia, Nasarawa" />
        </label>
        <label className="cp-field cp-field--full">
          <span>Brief description</span>
          <textarea
            className="cp-input cp-textarea"
            rows={4}
            value={form.description}
            onChange={update('description')}
            placeholder="Tell us a little about your practice and what you need."
          />
        </label>
        <label className="cp-field cp-field--full">
          <span>Preferred package</span>
          <select className="cp-input cp-select" value={form.pkg} onChange={update('pkg')}>
            {PACKAGE_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
      </div>
      <button className="cp-btn cp-btn--brass cp-form-submit" onClick={submit}>
        Send request <ArrowRight size={16} strokeWidth={2} />
      </button>
      <p className="cp-form-note">We reply by hand. No automated sequences, no noise.</p>
    </div>
  )
}
