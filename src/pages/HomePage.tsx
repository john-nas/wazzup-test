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
              alt="Wazzup Falafel owner Ahmad Alalaea in the Northcote restaurant"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="home-ahmad__copy">
            <p className="eyebrow">Come in hungry</p>
            <h2 id="home-ahmad-heading">Ahmad will probably say hello.</h2>
            <p>
              There is a good chance the first thing you eat will be a hot falafel
              Ahmad hands you across the counter. He likes people to taste it fresh.
            </p>
            <p>
              Everything is made here, from the falafel and hummus to the salads
              and sauces. Order at the counter and eat it while it is hot.
            </p>
            <Link className="text-link" to="/story">Meet Ahmad</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
