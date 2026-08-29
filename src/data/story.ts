import interiorImage from '../assets/images/restaurant-interior.webp'
import ownerImage from '../assets/images/owner-ahmad.webp'
import type { StoryContent } from '../types/content'

export const story: StoryContent = {
  eyebrow: "Ahmad's story",
  heading: 'He just wanted a proper falafel.',
  paragraphs: [
    'When chef and co-owner Ahmad Al Alaea arrived in Australia in 2017, he missed the everyday falafel he grew up eating in Jordan. He couldn’t find one that tasted right, so he went back in 2019 and learned the tools of the trade in local falafel shops.',
    'Back in Melbourne/Naarm, Ahmad put what he had learned into Wazzup’s food truck in 2019. His friend Bara Sifi is his business partner and fellow co-owner.',
    'Today Wazzup is at 343 High Street, Northcote. The falafel uses a secret 21-spice blend. Pita is made fresh every morning, and the falafel mix, hummus, tahini and condiments are made in-house. Ahmad is often at the counter, for new customers if you’re lucky he might even give you a hot falafel to try.',
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
    {
      publication: 'Broadsheet',
      title: 'Wazzup Falafel, Northcote',
      url: 'https://www.broadsheet.com.au/melbourne/northcote/restaurants/wazzup-falafel',
    },
  ],
  portrait: {
    src: ownerImage,
    alt: 'Wazzup Falafel chef and co-owner Ahmad Al Alaea inside the restaurant',
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
