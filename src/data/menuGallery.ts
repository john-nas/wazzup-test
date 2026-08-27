import falafelFspImage from '../assets/images/falafel-fsp.webp'
import knockoutFalafelBoxImage from '../assets/images/knockout-falafel-box.webp'
import musabbahaImage from '../assets/images/musabbaha.webp'
import specialWrapImage from '../assets/images/special-falafel-wrap.webp'
import specialPocketImage from '../assets/images/special-falafel-pocket.webp'
import stuffedFalafelImage from '../assets/images/stuffed-falafel.webp'
import type { ImageAsset } from '../types/content'

export type MenuGalleryItem = ImageAsset & {
  menuItemId: string
  title: string
  description: string
}

export const menuGallery: MenuGalleryItem[] = [
  {
    src: knockoutFalafelBoxImage,
    alt: 'Knockout Falafel Box with stuffed falafel, hummus, salad and pita',
    width: 860,
    height: 606,
    menuItemId: 'knockout-box',
    title: 'Knockout Falafel Box',
    description: 'Stuffed falafel with hummus, salad, pita and the full spread.',
  },
  {
    src: falafelFspImage,
    alt: 'FSP plate with falafel, chips, hummus, pickles and salad',
    width: 860,
    height: 606,
    menuItemId: 'fsp',
    title: 'FSP',
    description: 'Falafel over chips with hummus, pickles and fresh salad.',
  },
  {
    src: specialPocketImage,
    alt: 'Two special falafel pita pockets filled with salad and sauces',
    width: 860,
    height: 606,
    menuItemId: 'special-pita-pocket',
    title: 'Special Falafel Pita Pocket',
    description: 'A packed pita pocket with falafel, salad and generous sauces.',
  },
  {
    src: specialWrapImage,
    alt: 'Special falafel wrap with fresh salad and sauce',
    width: 860,
    height: 573,
    menuItemId: 'special-wrap',
    title: 'Special Falafel Wrap',
    description: 'Falafel, salad and sauces wrapped fresh to order.',
  },
  {
    src: stuffedFalafelImage,
    alt: 'Sesame-covered stuffed falafel served in a ceramic bowl',
    width: 860,
    height: 573,
    menuItemId: 'stuffed-falafel',
    title: 'Stuffed Falafel',
    description: 'Sesame-covered falafel with a seasoned centre.',
  },
  {
    src: musabbahaImage,
    alt: 'A bowl of musabbaha topped with chickpeas, herbs and toasted nuts',
    width: 860,
    height: 573,
    menuItemId: 'musabbaha',
    title: 'Musabbaha',
    description: 'Warm chickpeas and hummus finished with herbs and toasted nuts.',
  },
]
