import { Link } from 'react-router-dom'
import heroImage from '../assets/images/falafel-feast.webp'
import { business } from '../data/business'

const melbourneWeekday = new Intl.DateTimeFormat('en-AU', {
  timeZone: 'Australia/Melbourne',
  weekday: 'long',
})

function Hero() {
  const { address } = business
  const today = melbourneWeekday.format(new Date())
  const todaysHours = business.openingHours.find((entry) => entry.day === today)

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
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__content">
        <p className="eyebrow eyebrow--light">Palestinian street food in Northcote</p>
        <h1 id="hero-heading">Fresh falafel. No fuss.</h1>
        <p className="hero__intro">
          Made in house and fried to order. Eat it while it's hot.
        </p>

        <div className="hero__actions">
          <Link className="button" to="/menu">See the menu</Link>
          <a className="button button--secondary" href={address.mapUrl} target="_blank" rel="noreferrer">
            Get directions
          </a>
        </div>

        <div className="hero__quick-info" aria-label="Address and opening hours">
          <address>
            <span>Find us</span>
            <strong>{address.street}, {address.suburb}</strong>
          </address>
          <div>
            <span>Today's hours</span>
            <p><strong>{today}</strong> {todaysHours?.hours ?? 'Check with us'}</p>
          </div>
          <Link className="hero__hours-link" to="/visit">Full hours</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
