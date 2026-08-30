import { Link } from 'react-router-dom'
import Menu from '../sections/Menu'
import stuffedFalafelImage from '../assets/images/stuffed_falafel.jpg'

function MenuPage() {
  return (
    <>
      <section className="menu-intro" aria-labelledby="menu-page-heading">
        <div className="container menu-intro__layout">
          <div>
            <p className="eyebrow">The menu</p>
            <h1 id="menu-page-heading">Falafel, made fresh.</h1>
            <p>Everything is plant-based. Pick a wrap, a box or one of Ahmad's specials.</p>
            <Link className="button menu-intro__order-link" to="/order">Order pickup</Link>
          </div>
          <figure className="menu-intro__feature">
            <img
              src={stuffedFalafelImage}
              width="447"
              height="447"
              alt="Stuffed falafel held on a fork, showing its filling"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <p className="eyebrow">Wazzup special</p>
              <h2>Get stuffed.</h2>
              <p>Stuffed falafel — onions, sumac and red chilies</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <Menu />
    </>
  )
}

export default MenuPage
