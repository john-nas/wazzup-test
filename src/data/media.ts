import mammaKnowsNorthLogo from '../assets/press/mamma-knows-north.png'
import timeOutLogo from '../assets/press/time-out.png'
import viceLogo from '../assets/press/vice.png'

export const mediaMentions = [
  {
    id: 'vice',
    outlet: 'VICE',
    title: 'The Best Falafel in Melbourne',
    url: 'https://www.vice.com/en/article/the-best-falafel-in-melbourne/',
    logo: { src: viceLogo, width: 152, height: 48 },
  },
  {
    id: 'mamma-knows-north',
    outlet: 'Mamma Knows North',
    title: 'Wazzup Falafel, Northcote',
    url: 'https://mammaknowsnorth.com.au/eats/wazzup-falafel-northcote',
    logo: { src: mammaKnowsNorthLogo, width: 500, height: 532 },
  },
  {
    id: 'time-out',
    outlet: 'Time Out Melbourne',
    title: 'Five-star review of Wazzup Falafel',
    url: 'https://www.timeout.com/melbourne/restaurants/wazzup-falafel',
    logo: { src: timeOutLogo, width: 220, height: 83 },
  },
] as const
