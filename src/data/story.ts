import interiorImage from '../assets/images/restaurant-interior.webp'
import ownerImage from '../assets/images/owner-ahmad.webp'
import type { StoryContent } from '../types/content'

export const story: StoryContent = {
  eyebrow: "Ahmad's story",
  heading: 'He just wanted a proper falafel.',
  paragraphs: [
    'When Ahmad Alalaea arrived in Australia in 2017, he missed the everyday falafel he grew up eating in Jordan. He could not find one that tasted right, so he went back in 2019 and learned the work in local falafel shops.',
    'He returned to Melbourne and opened the Wazzup food truck in Preston in 2020. People came back for falafel that was crisp outside, green with herbs inside and made fresh in front of them.',
    'Now Wazzup is at 343 High Street, Northcote. Everything is made in house. Ahmad is often at the counter introducing himself and handing over a hot falafel to try.',
  ],
  sources: [
    {
      publication: 'VICE',
      title: 'The Best Falafel in Melbourne',
      url: 'https://www.vice.com/en/article/the-best-falafel-in-melbourne/',
    },
    {
      publication: 'Time Out Melbourne',
      title: 'Five-star review of Wazzup Falafel',
      url: 'https://www.timeout.com/melbourne/restaurants/wazzup-falafel',
    },
    {
      publication: 'Northcote Rise',
      title: 'Trader Spotlight: Wazzup Falafel',
      url: 'https://northcoterise.com.au/news-stories/trader-spotlight-wazzup-falafel',
    },
  ],
  portrait: {
    src: ownerImage,
    alt: 'Wazzup Falafel owner Ahmad Alalaea inside the restaurant',
    width: 860,
    height: 573,
  },
  interior: {
    src: interiorImage,
    alt: 'Customers dining inside Wazzup Falafel in Northcote',
    width: 860,
    height: 573,
  },
}
