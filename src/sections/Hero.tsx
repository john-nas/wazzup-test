import heroImage from '../assets/images/falafel-feast.webp'
import MotifDivider from '../components/MotifDivider'
import PlantBasedBadge from '../components/PlantBasedBadge'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__media">
        <img
          src={heroImage}
          width="2500"
          height="3333"
          alt="A generous Palestinian falafel plate with hummus, pita, vegetables and sauces"
          fetchPriority="high"
        />
        <p className="hero__caption">
          <span className="hero__caption-translation">Welcome · Marhaba</span>
        </p>
      </div>

      <MotifDivider />

      <div className="container hero__content">
        <div>
          <p className="eyebrow">Palestinian street food · Northcote</p>
          <h1 id="hero-heading">
            Falafel with a <em>whole lot of soul.</em>
          </h1>
        </div>
        <div className="hero__intro-group">
          <p className="hero__intro">
            Crisp, herb-packed falafel, generous plates and Palestinian
            hospitality—made fresh for the whole neighbourhood.
          </p>
          <div className="hero__plant-row">
            <PlantBasedBadge />
            <a
              href="https://www.happycow.net/reviews/wazzup-falafel-northcote-402957"
              target="_blank"
              rel="noreferrer"
            >
              HappyCow community reviews <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
