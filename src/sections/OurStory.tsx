import { story } from '../data/story'

function OurStory() {
  return (
    <section className="story-section section" id="about" aria-labelledby="story-heading">
      <div className="container story-grid">
        <div className="story-copy">
          <p className="eyebrow">{story.eyebrow}</p>
          <h1 id="story-heading">{story.heading}</h1>
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

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
            <figcaption>Ahmad Alalaea</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default OurStory
