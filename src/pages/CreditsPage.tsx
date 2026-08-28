import IllustrationCredit from '../components/IllustrationCredit'
import { tirazainIllustrations } from '../data/illustrations'

const creditedIllustrations = [
  tirazainIllustrations.nafnoofBorder14,
  tirazainIllustrations.tilesOfBethlehem,
  tirazainIllustrations.wallsOfJerusalem,
  tirazainIllustrations.zigzag,
]

function CreditsPage() {
  return (
    <section className="credits-page section" aria-labelledby="credits-heading">
      <div className="container credits-page__inner">
        <p className="eyebrow">Credits</p>
        <h1 id="credits-heading">
          Tatreez <span className="credits-page__arabic" lang="ar" dir="rtl">تطريز</span> illustrations
        </h1>
        <IllustrationCredit illustrations={creditedIllustrations} />

        <ul className="credits-gallery" aria-label="Tatreez illustrations used on this website">
          {creditedIllustrations.map((illustration) => (
            <li key={illustration.sourceUrl}>
              <a href={illustration.sourceUrl} target="_blank" rel="noreferrer">
                <img
                  src={illustration.image}
                  width={illustration.width}
                  height={illustration.height}
                  alt={`${illustration.title} Tatreez illustration`}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <a
                className="credits-gallery__source"
                href={illustration.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {illustration.title} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CreditsPage
