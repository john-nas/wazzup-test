export type DayHours = {
  day: string
  hours: string
  isClosed?: boolean
}

export type SocialLink = {
  platform: 'Facebook' | 'Instagram'
  label: string
  url: string
}

export type BusinessDetails = {
  name: string
  address: {
    street: string
    suburb: string
    region: string
    postcode: string
    mapUrl: string
    mapEmbedUrl: string
  }
  openingHours: DayHours[]
  socials: SocialLink[]
}

export type MediaKind = 'feature' | 'video' | 'review'

export type MediaMention = {
  outlet: string
  title: string
  url: string
  kind: MediaKind
}

export type MenuItem = {
  id: string
  name: string
  priceInCents: number
}

export type MenuCategory = {
  id: string
  name: string
  items: MenuItem[]
}

export type MenuCatalog = {
  currency: 'AUD'
  priceNote: string
  categories: MenuCategory[]
}

export type ImageAsset = {
  src: string
  alt: string
  width: number
  height: number
}

export type StoryContent = {
  eyebrow: string
  heading: string
  paragraphs: string[]
  sources: {
    publication: string
    title: string
    url: string
  }[]
  portrait: ImageAsset
  interior: ImageAsset
}

export type Product = {
  id: string
  name: string
  description: string
  priceInCents: number
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  treatment: 'logo' | 'tree' | 'olive'
  status: 'prototype'
}

export type ShopCatalog = {
  currency: 'AUD'
  notice: string
  products: Product[]
}
