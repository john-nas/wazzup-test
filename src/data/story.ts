import interiorImage from '../assets/images/restaurant-interior.webp'
import ownerImage from '../assets/images/owner-ahmad.webp'
import type { StoryContent } from '../types/content'

export const story: StoryContent = {
  eyebrow: 'From Palestine to Preston',
  heading: 'The falafel Ahmad missed became the food we found',
  paragraphs: [
    'When Ahmad Alalaea arrived in Australia in 2017, food was not the career he had planned. He was a personal trainer with a master’s degree in health and physical education—but he could not find the everyday falafel he remembered from growing up Palestinian in Jordan.',
    'Rather than settle for something close, Ahmad returned to Jordan in 2019 and spent time learning in falafel restaurants. He came back wanting to introduce people across Melbourne/Naarm to the crisp, deeply spiced Palestinian-Jordanian street-style falafel he knew from home.',
    'Wazzup began as a food truck in Preston in March 2020. It was difficult timing, but Melbourne/Naarm’s five-kilometre lockdown radius also created a fiercely local following. People came back for the falafel, hummus and dishes that tasted unlike the versions they already knew.',
    'The permanent Northcote restaurant is the next chapter: more room for the food, the family stories and Ahmad’s generous welcome—without losing the directness of the original truck.',
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
    alt: 'Customers dining beneath warm pendant lights inside Wazzup Falafel',
    width: 860,
    height: 573,
  },
}
