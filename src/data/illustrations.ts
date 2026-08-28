import nafnoofBorder14Image from '../assets/illustrations/tirazain-nafnoof-border-14.png'
import tilesOfBethlehemImage from '../assets/illustrations/tirazain-tiles-bethlehem.png'
import wallsOfJerusalemImage from '../assets/illustrations/tirazain-walls-jerusalem.png'
import zigzagImage from '../assets/illustrations/tirazain-zigzag.png'

export type ArchiveIllustration = {
  title: string
  image: string
  width: number
  height: number
  sourceUrl: string
}

export const tirazainIllustrations = {
  nafnoofBorder14: {
    title: 'Nafnoof / Border (14)',
    image: nafnoofBorder14Image,
    width: 1500,
    height: 1500,
    sourceUrl: 'https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-d4wtn',
  },
  tilesOfBethlehem: {
    title: 'Balat Beit Lahem / Tiles of Bethlehem',
    image: tilesOfBethlehemImage,
    width: 1920,
    height: 1920,
    sourceUrl: 'https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-sgfes',
  },
  wallsOfJerusalem: {
    title: 'Sur Al Quds / Walls of Jerusalem',
    image: wallsOfJerusalemImage,
    width: 1920,
    height: 1920,
    sourceUrl: 'https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-a6nk6',
  },
  zigzag: {
    title: 'Tareeq / Zigzag',
    image: zigzagImage,
    width: 1920,
    height: 1920,
    sourceUrl: 'https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-lh9l6',
  },
} satisfies Record<string, ArchiveIllustration>
