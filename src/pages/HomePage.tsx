import { Link } from 'react-router-dom'
import ownerImage from '../assets/images/owner-ahmad.webp'
import TatreezDivider from '../components/TatreezDivider'
import Hero from '../sections/Hero'

function HomePage() {
  return (
    <>
      <Hero />
      <TatreezDivider pattern="walls" />

      <section className="home-ahmad section" aria-labelledby="home-ahmad-heading">
        <div className="container home-ahmad__grid">
          <figure className="home-ahmad__image">
            <img
              src={ownerImage}
              width="860"
              height="573"
              alt="Wazzup Falafel chef and co-owner Ahmad Al Alaea in the Northcote restaurant"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="home-ahmad__copy">
            <p className="eyebrow">Come in hungry</p>
            <h2 id="home-ahmad-heading">Ahmad will probably say hello.</h2>
            <p>
              When he spots a new face the first thing you eat will be a hot falafel
              Ahmad hands you across the counter.
            </p>
            <p>
              The falafel mix is blended in house with Wazzup's secret 21-spice blend.
              Hummus, tahini, condiments and pita are all made fresh every morning.
            </p>
            <Link className="text-link" to="/story">Meet Ahmad</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
