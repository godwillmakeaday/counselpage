import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import Seal from './Seal'

export default function ProfileCard() {
  return (
    <div className="cp-plate cp-profile">
      <div className="cp-profile-head">
        <div className="cp-avatar" aria-hidden>
          AY
        </div>
        <Seal size={40} />
      </div>
      <h3 className="cp-profile-name">Barr. Amina Yusuf</h3>
      <p className="cp-profile-role">Legal Practitioner</p>
      <p className="cp-profile-areas">
        Corporate Advisory &nbsp;•&nbsp; Property &nbsp;•&nbsp; Dispute Resolution
      </p>
      <p className="cp-profile-loc">
        <MapPin size={13} strokeWidth={1.8} /> Lafia, Nigeria
      </p>
      <div className="cp-rule" />
      <div className="cp-profile-actions">
        <button className="cp-chip"><Phone size={14} strokeWidth={1.8} /> Call</button>
        <button className="cp-chip"><MessageCircle size={14} strokeWidth={1.8} /> WhatsApp</button>
        <button className="cp-chip"><Mail size={14} strokeWidth={1.8} /> Email</button>
      </div>
      <button className="cp-btn cp-btn--brass cp-profile-cta">Request consultation</button>
    </div>
  )
}
