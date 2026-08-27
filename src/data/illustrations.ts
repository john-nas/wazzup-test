import doubleAiryFairImage from '../assets/illustrations/tirazain-double-airy-fair.png'
import farranehDividerImage from '../assets/illustrations/tirazain-farraneh-divider.png'
import oliveBranchImage from '../assets/illustrations/tirazain-olive-branch.png'
import qalbHeartImage from '../assets/illustrations/tirazain-qalb-heart.png'
import reeshFeathersImage from '../assets/illustrations/tirazain-reesh-feathers.png'
import treeOfLifeImage from '../assets/illustrations/tirazain-tree-of-life.png'

export type ArchiveIllustration = {
  title: string
  image: string
  width: number
  height: number
  sourceUrl: string
}

export const tirazainIllustrations = {
  farranehDivider: {
    title: "Farraneh / Baker's Wife",
    image: farranehDividerImage,
    width: 1500,
    height: 1500,
    sourceUrl: 'https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-wgzf8',
  },
  qalbHeart: {
    title: 'Qalb / Heart (3)',
    image: qalbHeartImage,
    width: 1500,
    height: 1500,
    sourceUrl: 'https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-annh6',
  },
  doubleAiryFair: {
    title: 'Irq Al Nafnoof Mkabbas / Double Airy Fair',
    image: doubleAiryFairImage,
    width: 1500,
    height: 1500,
    sourceUrl: 'https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-3t8ga',
  },
  reeshFeathers: {
    title: 'Reesh / Feathers',
    image: reeshFeathersImage,
    width: 1500,
    height: 1500,
    sourceUrl: 'https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-9jmbe',
  },
  oliveBranch: {
    title: 'Irq Al Zaytoun / Olive Branch (1)',
    image: oliveBranchImage,
    width: 750,
    height: 750,
    sourceUrl: 'https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-66k56',
  },
  treeOfLife: {
    title: 'Shajarat Al Hayat / Tree of Life',
    image: treeOfLifeImage,
    width: 750,
    height: 750,
    sourceUrl: 'https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-sj85k',
  },
} satisfies Record<string, ArchiveIllustration>
