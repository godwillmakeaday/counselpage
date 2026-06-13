import {
  Search,
  ScrollText,
  MapPin,
  FileText,
  Contact,
  Building2,
  Scale,
  MessageCircle,
  ShieldCheck,
  Landmark,
  CircleSlash,
  Volume2,
} from 'lucide-react'
import type {
  Problem,
  Feature,
  BuildItem,
  Package,
  Ethic,
  Sample,
  ProcessItem,
  NavItem,
} from './types'

export const WA_NUMBER = '2347030673410'
export const WA_LINK = `https://wa.me/${WA_NUMBER}`
export const PHONE_DISPLAY = '07030673410'

export const NAV: readonly NavItem[] = [
  ['Home', 'home'],
  ['What We Build', 'build'],
  ['Packages', 'packages'],
  ['For NBA Branches', 'nba'],
  ['Samples', 'samples'],
  ['Process', 'process'],
  ['Contact', 'contact'],
]

export const PROBLEMS: Problem[] = [
  {
    icon: Search,
    title: 'No searchable professional profile',
    body: 'Many lawyers are well known offline yet almost invisible online. When a client searches your name, nothing dignified answers.',
  },
  {
    icon: ScrollText,
    title: 'A weak first impression',
    body: 'A poor or absent digital presence can quietly reduce trust before a single conversation has begun.',
  },
  {
    icon: MapPin,
    title: 'Scattered contact details',
    body: 'Clients struggle to find your chambers address, phone, email, and practice areas gathered in one settled place.',
  },
  {
    icon: FileText,
    title: 'Unclear professional positioning',
    body: 'Many practitioners have no clear public description of what they do and whom they are equipped to serve.',
  },
]

export const FEATURES: Feature[] = [
  { icon: Contact, label: 'Professional lawyer profile' },
  { icon: Building2, label: 'Chambers or law firm website' },
  { icon: Scale, label: 'Practice area presentation' },
  { icon: FileText, label: 'Consultation request form' },
  { icon: MessageCircle, label: 'WhatsApp and email contact' },
  { icon: ShieldCheck, label: 'Ethics-conscious wording' },
]

export const WHAT_WE_BUILD: BuildItem[] = [
  {
    icon: Contact,
    kicker: 'One page',
    title: 'Digital Business Card',
    body: 'A clean professional profile with a single link you can share on WhatsApp, LinkedIn, email signatures, and printed cards.',
  },
  {
    icon: ScrollText,
    kicker: 'Personal site',
    title: 'Lawyer Profile Website',
    body: 'A fuller personal website with biography, practice focus, contact details, articles, and a consultation request form.',
  },
  {
    icon: Building2,
    kicker: 'Firm',
    title: 'Chambers Website',
    body: 'A complete firm presence with team profiles, practice areas, contact and intake forms, office location, and institutional copy.',
  },
  {
    icon: Landmark,
    kicker: 'Institution',
    title: 'Legal Institution Pages',
    body: 'Pages for NBA branches, committees, conferences, training programmes, legal aid initiatives, and professional associations.',
  },
]

export const PACKAGES: Package[] = [
  {
    name: 'Starter CounselPage',
    price: '₦75,000',
    blurb: 'For young lawyers and professionals who need a clean, dignified digital card.',
    cta: 'Choose Starter',
    featured: false,
    includes: [
      'One-page professional profile',
      'Photo and biography',
      'Practice areas',
      'WhatsApp, phone, and email buttons',
      'Office / location section',
      'Basic hosting setup',
      'Mobile-first design',
    ],
  },
  {
    name: 'Professional CounselPage',
    price: '₦150,000',
    blurb: 'For lawyers who want stronger authority and deeper client trust.',
    cta: 'Choose Professional',
    featured: true,
    includes: [
      'Professional homepage / profile',
      'Detailed biography',
      'Practice focus section',
      'Consultation request form',
      'Article / update section',
      'Ethics-conscious disclaimer',
      'Search-friendly title and description',
      'Mobile-first premium design',
    ],
  },
  {
    name: 'Chambers Presence',
    price: 'From ₦300,000',
    blurb: 'For law firms, chambers, and legal institutions.',
    cta: 'Request Chambers Quote',
    featured: false,
    includes: [
      'Full chambers website',
      'Team / lawyer profiles',
      'Practice area pages',
      'Contact and intake forms',
      'Office location',
      'Institutional copywriting',
      'Professional disclaimer',
      'Optional domain and email setup',
    ],
  },
]

export const NBA_FEATURES: string[] = [
  'Branch executive profiles',
  'Event announcement pages',
  'Conference pages',
  'Membership information',
  'Branch contact page',
  'Committee pages',
  'Notices and updates',
  'Sponsor / partner section',
  'Photo gallery',
  'Document download area',
]

export const ETHICS: Ethic[] = [
  {
    icon: CircleSlash,
    title: 'No false claims',
    body: 'We avoid language that suggests guaranteed outcomes, superiority, or any improper inducement to engage.',
  },
  {
    icon: Volume2,
    title: 'No noisy marketing',
    body: 'We design calm, refined, professional pages that are suitable for legal practice and its expected restraint.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear disclaimers',
    body: 'Pages can carry appropriate notes on consultation, engagement, and the formation of a professional relationship.',
  },
]

export const SAMPLES: Sample[] = [
  {
    name: 'Barr. Amina Yusuf',
    kind: 'Digital Business Card',
    areas: 'Corporate Advisory • Property • Dispute Resolution',
  },
  {
    name: 'Okoro & Partners Chambers',
    kind: 'Chambers Website',
    areas: 'Litigation • Commercial Law • Estate Advisory',
  },
  {
    name: 'NBA Branch Event Page',
    kind: 'Institution Page',
    areas: 'Conference • Notices • Executive Profiles',
  },
]

export const PROCESS: ProcessItem[] = [
  {
    title: 'Submit your details',
    body: 'You provide your name, photo, biography, contact details, practice areas, and preferred style.',
  },
  {
    title: 'We structure your profile',
    body: 'We organise your information into a clear, ordered professional presentation.',
  },
  {
    title: 'We design your page',
    body: 'Your CounselPage is designed with dignity, clarity, and mobile-first responsiveness.',
  },
  {
    title: 'You review and approve',
    body: 'You check your details, wording, and contact links before anything is published.',
  },
  {
    title: 'Your page goes live',
    body: 'You receive a shareable link for WhatsApp, email, social media, and printed business cards.',
  },
]

export const PAGE_TYPES: string[] = [
  'Digital Business Card',
  'Lawyer Profile Website',
  'Chambers Website',
  'NBA Branch / Association Page',
  'Legal Institution Page',
]

export const PACKAGE_OPTIONS: string[] = [
  'Starter CounselPage — ₦75,000',
  'Professional CounselPage — ₦150,000',
  'Chambers Presence — From ₦300,000',
  'Not sure yet',
]
