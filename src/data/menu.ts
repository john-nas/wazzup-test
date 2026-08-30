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
      ],
    },
    {
      id: 'salad',
      name: 'Salad',
      items: [
        { id: 'falafel-salad', name: 'Falafel Salad', priceInCents: 1700 },
      ],
    },
    {
      id: 'drinks',
      name: 'Drinks',
      items: [
        { id: 'black-tea', name: 'Black Tea with Mint / Sage', priceInCents: 200 },
        { id: 'organic-drink', name: 'Organic Drinks', priceInCents: 550 },
        { id: 'water', name: 'Water', priceInCents: 350 },
      ],
    },
    {
      id: 'to-go',
      name: 'To go',
      items: [
        {
          id: 'falafel-stick',
          name: 'Falafel Stick',
          priceInCents: 600,
          description: 'Five falafel balls.',
        },
        { id: 'hummus-bowl', name: 'Hummus Bowl', priceInCents: 1200 },
        { id: 'chips-small', name: 'Chips — small', priceInCents: 600 },
        { id: 'chips-large', name: 'Chips — large', priceInCents: 1200 },
        { id: 'pickles-plate-small', name: 'Pickles Plate — small', priceInCents: 500 },
        { id: 'pickles-plate-large', name: 'Pickles Plate — large', priceInCents: 1000 },
      ],
    },
    {
      id: 'extras',
      name: 'Extras',
      items: [
        { id: 'pita-bread', name: 'Pita Bread', priceInCents: 300 },
        { id: 'lebanese-bread', name: 'Lebanese Bread', priceInCents: 100 },
        { id: 'tahini', name: 'Tahini', priceInCents: 150 },
        { id: 'hot-chilli', name: 'Hot Chilli', priceInCents: 150 },
        { id: 'wazzup-falafel-sauce', name: 'Wazzup Falafel Sauce', priceInCents: 150 },
        { id: 'falafel-ball', name: '1 Falafel Ball', priceInCents: 120 },
        { id: 'eggplant-2pcs', name: 'Eggplant — 2 pieces', priceInCents: 100 },
        { id: 'cauliflower-2pcs', name: 'Cauliflower — 2 pieces', priceInCents: 100 },
      ],
    },
  ],
}
