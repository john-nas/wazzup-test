import type { ArchiveIllustration } from '../data/illustrations'

type IllustrationCreditProps = {
  illustrations: ArchiveIllustration[]
  className?: string
}

function IllustrationCredit({
  illustrations,
  className = '',
}: IllustrationCreditProps) {
  return (
    <p className={`illustration-credit ${className}`.trim()}>
      Illustration from{' '}
      <a href="https://tirazain.com" target="_blank" rel="noreferrer">
        Tirazain
      </a>
      {' — sources: '}
      {illustrations.map((illustration, index) => (
        <span key={illustration.sourceUrl}>
          {index > 0 && '; '}
          <a href={illustration.sourceUrl} target="_blank" rel="noreferrer">
            {illustration.title}
          </a>
        </span>
      ))}
    </p>
  )
}

export default IllustrationCredit
