import { Fragment } from 'react'
import { story } from '../data/story'
import { mediaMentions } from '../data/media'

function OurStory() {
  return (
    <section className="story-section section" id="about" aria-labelledby="story-heading">
      <div className="container story-grid">
        <div className="story-copy">
          <p className="eyebrow">{story.eyebrow}</p>
          <h1 id="story-heading">{story.heading}</h1>
          {story.paragraphs.map((paragraph, index) => (
            <Fragment key={paragraph}>
              <p>{paragraph}</p>
              {index === 0 && (
                <figure className="story-profile">
                  <img
                    src={story.portrait.src}
                    width={story.portrait.width}
                    height={story.portrait.height}
                    alt={story.portrait.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Ahmad Al Alaea</figcaption>
                </figure>
              )}
            </Fragment>
          ))}
        </div>

        <figure className="story-venue">
          <img
            src={story.interior.src}
            width={story.interior.width}
            height={story.interior.height}
            alt={story.interior.alt}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <section className="container story-press" aria-labelledby="story-press-heading">
        <h2 id="story-press-heading">As seen on</h2>
        <ul>
          {mediaMentions.map((mention) => (
            <li key={mention.url}>
              <a
                href={mention.url}
                aria-label={`${mention.outlet}: ${mention.title}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={`press-logo press-logo--${mention.id}`}
                  src={mention.logo.src}
                  width={mention.logo.width}
                  height={mention.logo.height}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default OurStory
