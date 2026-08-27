import type { MenuCatalog } from '../types/content'

export const menu: MenuCatalog = {
  currency: 'AUD',
  priceNote: 'Prototype prices transcribed from the supplied menu photograph. Please confirm current prices in store.',
  categories: [
    {
      id: 'boxes',
      name: 'In the box',
      items: [
        { id: 'falafel-box', name: 'Falafel Box', priceInCents: 2200 },
        { id: 'knockout-box', name: 'Knockout Falafel Box', priceInCents: 2500 },
        { id: 'junior-falafel-box', name: 'Junior Falafel Box', priceInCents: 1200 },
        { id: 'fsp', name: 'FSP', priceInCents: 2200 },
        { id: 'junior-fsp', name: 'Junior FSP', priceInCents: 1200 },
      ],
    },
    {
      id: 'wraps',
      name: 'On wrap',
      items: [
        { id: 'falafel-wrap', name: 'Falafel Wrap', priceInCents: 1200 },
        { id: 'special-wrap', name: 'Special Falafel Wrap', priceInCents: 1500 },
        { id: 'pita-pocket', name: 'Falafel Pita Pocket', priceInCents: 1200 },
        { id: 'special-pita-pocket', name: 'Special Falafel Pita Pocket', priceInCents: 1400 },
      ],
    },
    {
      id: 'specials',
      name: 'Wazzup specials',
      items: [
        { id: 'stuffed-falafel', name: 'Stuffed Falafel', priceInCents: 500 },
        { id: 'fatteh', name: 'Fatteh', priceInCents: 1700 },
        { id: 'musabbaha', name: 'Musabbaha', priceInCents: 1400 },
        { id: 'falafel-salad', name: 'Falafel Salad', priceInCents: 1700 },
      ],
    },
  ],
}
