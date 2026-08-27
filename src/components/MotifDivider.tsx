import { tirazainIllustrations } from '../data/illustrations'

type MotifDividerProps = {
  tone?: 'light' | 'dark'
}

function MotifDivider({ tone = 'light' }: MotifDividerProps) {
  return (
    <div className={`motif-divider motif-divider--${tone}`} aria-hidden="true">
      <img
        src={tirazainIllustrations.farranehDivider.image}
        width={tirazainIllustrations.farranehDivider.width}
        height={tirazainIllustrations.farranehDivider.height}
        alt=""
        loading="lazy"
      />
    </div>
  )
}

export default MotifDivider
