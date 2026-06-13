import type { LucideIcon } from 'lucide-react'

export interface Problem {
  icon: LucideIcon
  title: string
  body: string
}

export interface Feature {
  icon: LucideIcon
  label: string
}

export interface BuildItem {
  icon: LucideIcon
  kicker: string
  title: string
  body: string
}

export interface Package {
  name: string
  price: string
  blurb: string
  cta: string
  featured: boolean
  includes: string[]
}

export interface Ethic {
  icon: LucideIcon
  title: string
  body: string
}

export interface Sample {
  name: string
  kind: string
  areas: string
}

export interface ProcessItem {
  title: string
  body: string
}

export type NavItem = readonly [label: string, id: string]
