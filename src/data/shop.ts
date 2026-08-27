import logoImage from '../assets/images/wazzup-falafel-logo.png'
import { tirazainIllustrations } from './illustrations'
import type { ShopCatalog } from '../types/content'

export const shop: ShopCatalog = {
  currency: 'AUD',
  notice: 'Prototype merchandise only. Products, colours and prices are illustrative and are not currently available to purchase.',
  products: [
    {
      id: 'wazzup-tee',
      name: 'Wazzup Logo Tee',
      description: 'Heavy cotton tee with the Wazzup Falafel mark front and centre.',
      priceInCents: 3800,
      image: logoImage,
      imageAlt: 'Wazzup Falafel logo shown as a T-shirt artwork concept',
      imageWidth: 480,
      imageHeight: 320,
      treatment: 'logo',
      status: 'prototype',
    },
    {
      id: 'market-tote',
      name: 'High Street Market Tote',
      description: 'Everyday canvas tote featuring Tirazain’s Tree of Life illustration.',
      priceInCents: 2800,
      image: tirazainIllustrations.treeOfLife.image,
      imageAlt: 'Tree of Life illustration shown as a tote bag artwork concept',
      imageWidth: 750,
      imageHeight: 750,
      treatment: 'tree',
      status: 'prototype',
    },
    {
      id: 'embroidered-cap',
      name: 'Olive Branch Cap',
      description: 'Low-profile cap concept with a small stitched olive branch detail.',
      priceInCents: 3200,
      image: tirazainIllustrations.oliveBranch.image,
      imageAlt: 'Olive Branch illustration shown as an embroidered cap concept',
      imageWidth: 750,
      imageHeight: 750,
      treatment: 'olive',
      status: 'prototype',
    },
    {
      id: 'gift-card',
      name: 'Falafel for a Friend',
      description: 'A future in-store gift card for a good feed on High Street.',
      priceInCents: 2500,
      image: logoImage,
      imageAlt: 'Wazzup Falafel logo shown as a gift card concept',
      imageWidth: 480,
      imageHeight: 320,
      treatment: 'logo',
      status: 'prototype',
    },
  ],
}
