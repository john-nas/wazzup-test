import broadsheetLogo from '../assets/press/broadsheet.png'
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
    id: 'time-out',
    outlet: 'Time Out Melbourne',
    title: 'Five-star review of Wazzup Falafel',
    url: 'https://www.timeout.com/melbourne/restaurants/wazzup-falafel',
    logo: { src: timeOutLogo, width: 220, height: 83 },
  },
  {
    id: 'broadsheet',
    outlet: 'Broadsheet',
    title: 'Wazzup Falafel, Northcote',
    url: 'https://www.broadsheet.com.au/melbourne/northcote/restaurants/wazzup-falafel',
    logo: { src: broadsheetLogo, width: 320, height: 48 },
  },
] as const
