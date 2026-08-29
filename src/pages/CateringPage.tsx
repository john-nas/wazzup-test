import { Link } from 'react-router-dom'
import cateringImage from '../assets/images/catering-food-truck.webp'
import CateringEnquiryForm from '../components/CateringEnquiryForm'
import PageMetadata from '../components/PageMetadata'
import TatreezDivider from '../components/TatreezDivider'
import { cateringEventTypes, cateringMetadata } from '../data/catering'
import '../styles/catering.css'

function CateringPage() {
  return (
    <>
      <PageMetadata {...cateringMetadata} />

      <section className="catering-hero" aria-labelledby="catering-heading">
        <div className="catering-hero__media">
          <img
            src={cateringImage}
            width="3100"
            height="2480"
            alt="Ahmad standing in front of the original Wazzup Falafel food truck"
            fetchPriority="high"
          />
        </div>
        <div className="catering-hero__content">
          <p className="eyebrow eyebrow--light">Catering &amp; events</p>
          <h1 id="catering-heading">Bring Wazzup to the party.</h1>
          <p>
            Palestinian falafel, made fresh for parties, workplaces, weddings
            and events around Melbourne/Naarm.
          </p>
          <a className="button" href="#catering-enquiry">Ask about your event</a>
        </div>
      </section>

      <TatreezDivider pattern="walls" />

      <section className="catering-overview section" aria-labelledby="catering-overview-heading">
        <div className="container catering-overview__grid">
          <div className="catering-overview__intro">
            <p className="eyebrow">From the food truck</p>
            <h2 id="catering-overview-heading">Wazzup started on wheels.</h2>
            <p>
              Wazzup began as a food truck in 2019. If you are considering Wazzup
              for an event, send through the details and the team can confirm what
              is currently possible.
            </p>
          </div>

          <div className="catering-event-types">
            <h2>What are you planning?</h2>
            <p>Event enquiries might include:</p>
            <ul>
              {cateringEventTypes.map((eventType) => (
                <li key={eventType}>{eventType}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="catering-food section" aria-labelledby="catering-food-heading">
        <div className="container catering-food__inner">
          <p className="eyebrow">The food</p>
          <h2 id="catering-food-heading">Falafel made the Wazzup way.</h2>
          <p>
            Wazzup makes Palestinian falafel with its secret 21-spice blend. Pita
            is made fresh each morning, and the falafel mix, hummus, tahini and
            condiments are prepared in-house. Everything on the current menu is
            plant-based.
          </p>
          <Link className="text-link" to="/menu">See the menu</Link>
        </div>
      </section>

      <section
        className="catering-enquiry section"
        id="catering-enquiry"
        aria-labelledby="catering-enquiry-heading"
      >
        <div className="container catering-enquiry__layout">
          <header className="catering-enquiry__intro">
            <p className="eyebrow">Catering enquiry</p>
            <h2 id="catering-enquiry-heading">Tell us about your event.</h2>
            <p>
              Share the basics and the Wazzup team can let you know what may be
              possible. Submitting this form is not a booking.
            </p>
          </header>
          <CateringEnquiryForm />
        </div>
      </section>
    </>
  )
}

export default CateringPage
