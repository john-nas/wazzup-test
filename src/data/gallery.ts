import falafelFeastImage from '../assets/images/falafel-feast.webp'
import falafelFspImage from '../assets/images/falafel-fsp.webp'
import interiorMemorabiliaImage from '../assets/images/interior-memorabilia.webp'
import knockoutFalafelBoxImage from '../assets/images/knockout-falafel-box.webp'
import menuBoardImage from '../assets/images/menu-board.webp'
import musabbahaImage from '../assets/images/musabbaha.webp'
import storefrontImage from '../assets/images/northcote-storefront.webp'
import openKitchenImage from '../assets/images/open-kitchen.webp'
import ownerAhmadImage from '../assets/images/owner-ahmad.webp'
import restaurantInteriorImage from '../assets/images/restaurant-interior.webp'
import restaurantSignImage from '../assets/images/restaurant-sign.webp'
import specialFalafelPocketImage from '../assets/images/special-falafel-pocket.webp'
import specialFalafelWrapImage from '../assets/images/special-falafel-wrap.webp'
import stuffedFalafelDetailImage from '../assets/images/stuffed_falafel.jpg'
import stuffedFalafelImage from '../assets/images/stuffed-falafel.webp'
import type { GalleryImage } from '../types/content'

export const galleryImages = [
  {
    id: 'stuffed-falafel',
    src: stuffedFalafelImage,
    alt: 'Stuffed falafel served in a bowl on a wooden table',
    caption: 'Stuffed falafel',
    width: 860,
    height: 600,
  },
  {
    id: 'ahmad',
    src: ownerAhmadImage,
    alt: 'Chef and co-owner Ahmad Al Alaea inside Wazzup Falafel',
    caption: 'Ahmad at Wazzup Falafel',
    width: 860,
    height: 600,
  },
  {
    id: 'falafel-feast',
    src: falafelFeastImage,
    alt: 'Falafel plate with pita, hummus, pickles and condiments',
    caption: 'Falafel, pita and dips',
    width: 2500,
    height: 3333,
    objectPosition: 'center 58%',
  },
  {
    id: 'stuffed-falafel-detail',
    src: stuffedFalafelDetailImage,
    alt: 'Stuffed falafel held on a fork, showing the centre',
    caption: 'Inside a stuffed falafel',
    width: 447,
    height: 447,
  },
  {
    id: 'special-wrap',
    src: specialFalafelWrapImage,
    alt: 'Special falafel wrap ready to serve',
    caption: 'Special falafel wrap',
    width: 860,
    height: 600,
  },
  {
    id: 'special-pocket',
    src: specialFalafelPocketImage,
    alt: 'Two special falafel pita pockets filled with falafel and salad',
    caption: 'Special falafel pita pockets',
    width: 860,
    height: 600,
  },
  {
    id: 'knockout-box',
    src: knockoutFalafelBoxImage,
    alt: 'Knockout Falafel Box with falafel, hummus, pickles and pita',
    caption: 'Knockout Falafel Box',
    width: 860,
    height: 600,
  },
  {
    id: 'falafel-snack-pack',
    src: falafelFspImage,
    alt: 'Falafel Snack Pack with falafel, chips, hummus, pickles and salad',
    caption: 'Falafel Snack Pack',
    width: 860,
    height: 600,
  },
  {
    id: 'musabbaha',
    src: musabbahaImage,
    alt: 'Bowl of musabbaha topped with chickpeas, herbs and toasted almonds',
    caption: 'Musabbaha',
    width: 860,
    height: 600,
  },
  {
    id: 'restaurant-interior',
    src: restaurantInteriorImage,
    alt: 'Customers dining inside Wazzup Falafel in Northcote',
    caption: 'Inside the Northcote shop',
    width: 860,
    height: 600,
  },
  {
    id: 'open-kitchen',
    src: openKitchenImage,
    alt: 'The Wazzup Falafel counter and open kitchen',
    caption: 'At the counter',
    width: 860,
    height: 600,
  },
  {
    id: 'interior-memorabilia',
    src: interiorMemorabiliaImage,
    alt: 'Palestinian memorabilia displayed inside Wazzup Falafel',
    caption: 'Palestinian memorabilia inside the shop',
    width: 860,
    height: 600,
  },
  {
    id: 'storefront',
    src: storefrontImage,
    alt: 'The Wazzup Falafel storefront on High Street in Northcote',
    caption: 'Wazzup Falafel on High Street',
    width: 860,
    height: 600,
  },
  {
    id: 'restaurant-sign',
    src: restaurantSignImage,
    alt: 'The Wazzup Falafel sign inside the restaurant',
    caption: 'The Wazzup Falafel sign',
    width: 860,
    height: 600,
  },
  {
    id: 'menu-board',
    src: menuBoardImage,
    alt: 'The menu board above the counter at Wazzup Falafel',
    caption: 'The menu board',
    width: 860,
    height: 600,
  },
] satisfies readonly GalleryImage[]
