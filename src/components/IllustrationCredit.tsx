import type { ArchiveIllustration } from '../data/illustrations'

type IllustrationCreditProps = {
  illustrations: ArchiveIllustration[]
}

function IllustrationCredit({ illustrations }: IllustrationCreditProps) {
  return (
    <p className="illustration-credit">
      Traditional Palestinian motifs made by Palestinian women. Digital illustrations from{' '}
      <a href="https://tirazain.com" target="_blank" rel="noreferrer">Tirazain</a>
      {': '}
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
