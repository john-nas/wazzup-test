import { story } from '../data/story'

const highlightedHeadingWords = new Set(['Ahmad', 'we'])

function renderStoryHeading(heading: string) {
  return heading.split(/(Ahmad|\bwe\b)/g).map((part, index) =>
    highlightedHeadingWords.has(part) ? (
      <mark className="story-heading__connection" key={`${part}-${index}`}>
        {part}
      </mark>
    ) : part,
  )
}

function OurStory() {
  return (
    <section className="story-section section" id="about" aria-labelledby="story-heading">
      <div className="container story-grid">
        <div className="story-copy">
          <p className="eyebrow eyebrow--timber">{story.eyebrow}</p>
          <h2 id="story-heading">{renderStoryHeading(story.heading)}</h2>
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="story-sources">
            <span>Story sources</span>
            {story.sources.map((source) => (
              <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
                {source.publication} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="story-grid__motif" aria-hidden="true" />

        <div className="story-gallery">
          <figure className="story-gallery__interior">
            <img
              src={story.interior.src}
              width={story.interior.width}
              height={story.interior.height}
              alt={story.interior.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="story-gallery__portrait">
            <img
              src={story.portrait.src}
              width={story.portrait.width}
              height={story.portrait.height}
              alt={story.portrait.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>Ahmad Alalaea, owner</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default OurStory
