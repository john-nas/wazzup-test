import type { BusinessDetails } from '../types/content'

export const business: BusinessDetails = {
  name: 'Wazzup Falafel',
  address: {
    street: '343 High St',
    suburb: 'Northcote',
    region: 'VIC',
    postcode: '3070',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=343+High+St+Northcote+VIC+3070',
    mapEmbedUrl: 'https://www.google.com/maps?q=343+High+St+Northcote+VIC+3070&output=embed',
  },
  openingHours: [
    { day: 'Monday', hours: 'Closed', isClosed: true },
    { day: 'Tuesday', hours: '11 am–9 pm' },
    { day: 'Wednesday', hours: '11 am–9 pm' },
    { day: 'Thursday', hours: '11 am–9 pm' },
    { day: 'Friday', hours: '4–9 pm' },
    { day: 'Saturday', hours: '11 am–9 pm' },
    { day: 'Sunday', hours: '11 am–6 pm' },
  ],
  socials: [
    {
      platform: 'Facebook',
      label: 'Wazzup Falafel on Facebook',
      url: 'https://www.facebook.com/wazzupfalafel',
    },
    {
      platform: 'Instagram',
      label: '@wazzupfalafel5 on Instagram',
      url: 'https://www.instagram.com/wazzupfalafel5/',
    },
  ],
}
