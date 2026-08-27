import { Link } from 'react-router-dom'
import interiorImage from '../assets/images/restaurant-interior.webp'
import ownerImage from '../assets/images/owner-ahmad.webp'
import wrapImage from '../assets/images/special-falafel-wrap.webp'
import { mediaMentions } from '../data/media'
import Hero from '../sections/Hero'
import MotifDivider from '../components/MotifDivider'

const highlights = [
  {
    eyebrow: 'Eat',
    title: 'Falafel is the main event',
    copy: 'Golden outside, green with herbs inside, and made for wraps, pockets and generous plates.',
    image: wrapImage,
    alt: 'A special falafel wrap being prepared on flatbread',
    to: '/menu',
    action: 'See the menu',
  },
  {
    eyebrow: 'Meet',
    title: 'Ahmad and the story of Wazzup',
    copy: 'Palestinian hospitality, a love of feeding people and a neighbourhood restaurant with personality.',
    image: ownerImage,
    alt: 'Wazzup Falafel owner Ahmad Alalaea in the restaurant',
    to: '/story',
    action: 'Our story',
  },
  {
    eyebrow: 'Gather',
    title: 'Pull up a chair in Northcote',
    copy: 'Warm timber, a busy open kitchen and a dining room filled with stories from home.',
    image: interiorImage,
    alt: 'The warm timber dining room at Wazzup Falafel',
    to: '/visit',
    action: 'Plan a visit',
  },
]

function HomePage() {
  return (
    <>
      <Hero />

      <section className="home-intro section" aria-labelledby="home-intro-heading">
        <div className="container home-intro__grid">
          <p className="display-kicker">More than a quick bite.</p>
          <div>
            <h2 id="home-intro-heading">A Palestinian table on High Street.</h2>
            <p>
              Wazzup is street food with the welcome turned all the way up:
              freshly fried falafel, food worth sharing and a room that feels
              lived in from the moment you arrive.
            </p>
          </div>
        </div>
      </section>

      <MotifDivider />

      <section className="editorial-links" aria-label="Explore Wazzup Falafel">
        {highlights.map((highlight, index) => (
          <article className="editorial-card" key={highlight.to}>
            <div className="editorial-card__image">
              <img
                src={highlight.image}
                width="860"
                height="573"
                alt={highlight.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
            <div className="editorial-card__content">
              <p className="eyebrow">{highlight.eyebrow}</p>
              <h2>{highlight.title}</h2>
              <p>{highlight.copy}</p>
              <Link className="text-link" to={highlight.to}>
                {highlight.action} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="press-ribbon" aria-labelledby="press-ribbon-heading">
        <div className="container">
          <p id="press-ribbon-heading">As seen in</p>
          <div className="press-ribbon__outlets">
            {mediaMentions.slice(0, 5).map((mention) => (
              <span key={mention.outlet}>{mention.outlet}</span>
            ))}
          </div>
          <Link to="/press">Read the stories <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
