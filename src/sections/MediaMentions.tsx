import { mediaMentions } from '../data/media'

const kindLabels = {
  feature: 'Feature',
  video: 'Watch',
  review: 'Review',
}

function MediaMentions() {
  return (
    <section className="media-section section" id="media" aria-labelledby="media-heading">
      <div className="container">
        <div className="section-heading section-heading--light">
          <div>
            <p className="eyebrow eyebrow--light">Around Melbourne/Naarm</p>
            <h2 id="media-heading">People are talking</h2>
          </div>
          <p>Stories, visits and reviews from people who know Melbourne/Naarm food.</p>
        </div>

        <div className="media-grid">
          {mediaMentions.map((mention) => (
            <a
              className="media-card"
              href={mention.url}
              key={mention.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="media-card__kind">{kindLabels[mention.kind]}</span>
              <strong>{mention.outlet}</strong>
              <span>{mention.title}</span>
              <span className="media-card__action">
                {mention.kind === 'video' ? 'Watch' : 'Read'}
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaMentions
