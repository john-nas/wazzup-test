import falafelFspImage from '../assets/images/falafel-fsp.webp'
import knockoutFalafelBoxImage from '../assets/images/knockout-falafel-box.webp'
import musabbahaImage from '../assets/images/musabbaha.webp'
import specialFalafelPocketImage from '../assets/images/special-falafel-pocket.webp'
import type { MenuCatalog } from '../types/content'

export const menu: MenuCatalog = {
  currency: 'AUD',
  priceNote: 'Prices can change. Check the board in store for the latest.',
  categories: [
    {
      id: 'boxes',
      name: 'In the box',
      items: [
        { id: 'falafel-box', name: 'Falafel Box', priceInCents: 2200 },
        {
          id: 'knockout-box',
          name: 'Knockout Falafel Box',
          priceInCents: 2500,
          description: 'One stuffed falafel, five regular falafel, hummus, salads, pickles and pita.',
          image: {
            src: knockoutFalafelBoxImage,
            alt: 'Knockout Falafel Box served with falafel, hummus, pickles and pita',
            width: 860,
            height: 573,
          },
        },
        { id: 'junior-falafel-box', name: 'Junior Falafel Box', priceInCents: 1200 },
        {
          id: 'fsp',
          name: 'Falafel Snack Pack (FSP)',
          priceInCents: 2200,
          description: 'Falafel snack pack: chips, five falafel, hummus, tahini, pickles and salad.',
          image: {
            src: falafelFspImage,
            alt: 'Falafel Snack Pack with falafel, chips, hummus, pickles and salad',
            width: 860,
            height: 573,
          },
        },
        {
          id: 'junior-fsp',
          name: 'Junior Falafel Snack Pack',
          priceInCents: 1200,
          description: 'A smaller falafel snack pack with chips and the same toppings.',
        },
      ],
    },
    {
      id: 'wraps',
      name: 'On wrap',
      items: [
        { id: 'falafel-wrap', name: 'Falafel Wrap', priceInCents: 1200 },
        { id: 'special-wrap', name: 'Special Falafel Wrap', priceInCents: 1500 },
        { id: 'pita-pocket', name: 'Falafel Pita Pocket', priceInCents: 1200 },
        {
          id: 'special-pita-pocket',
          name: 'Special Falafel Pita Pocket',
          priceInCents: 1400,
          image: {
            src: specialFalafelPocketImage,
            alt: 'Two special falafel pita pockets filled with falafel and salad',
            width: 860,
            height: 573,
          },
        },
      ],
    },
    {
      id: 'specials',
      name: 'Wazzup specials',
      items: [
        { id: 'stuffed-falafel', name: 'Stuffed Falafel', priceInCents: 500 },
        {
          id: 'fatteh',
          name: 'Fatteh',
          priceInCents: 1700,
          description: 'Toasted pita, chickpeas, almonds and falafel pieces with a creamy sauce.',
        },
        {
          id: 'musabbaha',
          name: 'Musabbaha',
          priceInCents: 1400,
          description: 'Warm crushed chickpeas and hummus, finished with olive oil and Wazzup spice.',
          image: {
            src: musabbahaImage,
            alt: 'Bowl of musabbaha topped with chickpeas, herbs and toasted almonds',
            width: 860,
            height: 573,
          },
        },
        { id: 'falafel-salad', name: 'Falafel Salad', priceInCents: 1700 },
      ],
    },
  ],
}
