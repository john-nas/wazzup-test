import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { tirazainIllustrations } from '../data/illustrations'
import { mediaMentions } from '../data/media'
import footerLogo from '../assets/images/wazzup_falafel_logo2.jpg'
import IllustrationCredit from './IllustrationCredit'
import TatreezDivider from './TatreezDivider'

function Footer() {
  const { address } = business

  return (
    <footer className="site-footer">
      <TatreezDivider pattern="zigzag" dark />
      <div className="container footer-main">
        <div>
          <img
            className="footer-name"
            src={footerLogo}
            width="410"
            height="92"
            alt="Wazzup Falafel"
            loading="lazy"
            decoding="async"
          />
          <address>
            {address.street}, {address.suburb} {address.region} {address.postcode}
          </address>
        </div>
        <nav aria-label="Footer navigation">
          <Link to="/menu">Menu</Link>
          <Link to="/visit">Hours & directions</Link>
          <Link to="/story">Our story</Link>
          <a href={business.socials[1].url} target="_blank" rel="noreferrer">Instagram</a>
        </nav>
      </div>
      <section className="footer-press" aria-labelledby="footer-press-heading">
        <div className="container footer-press__inner">
          <h2 id="footer-press-heading">As seen on</h2>
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
                    className={`footer-press__logo footer-press__logo--${mention.id}`}
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
        </div>
      </section>
      <div className="container footer-attribution">
        <IllustrationCredit
          illustrations={[
            tirazainIllustrations.tilesOfBethlehem,
            tirazainIllustrations.wallsOfJerusalem,
            tirazainIllustrations.zigzag,
          ]}
        />
      </div>
      <div className="container footer-bottom">
        <span>Copyright {new Date().getFullYear()} {business.name}</span>
        <span className="footer-signoff">
          Fresh food, made in Northcote.
          <svg
            className="footer-watermelon"
            viewBox="0 0 80 58"
            aria-hidden="true"
            focusable="false"
          >
            <path className="footer-watermelon__rind" d="M4 8 Q40 72 76 8 Z" />
            <path className="footer-watermelon__flesh" d="M10 10 Q40 59 70 10 Z" />
            <path className="footer-watermelon__pith" d="M8 11 Q40 66 72 11" />
            <ellipse className="footer-watermelon__seed" cx="27" cy="24" rx="2" ry="3.5" transform="rotate(-24 27 24)" />
            <ellipse className="footer-watermelon__seed" cx="40" cy="31" rx="2" ry="3.5" />
            <ellipse className="footer-watermelon__seed" cx="53" cy="24" rx="2" ry="3.5" transform="rotate(24 53 24)" />
          </svg>
        </span>
      </div>
    </footer>
  )
}

export default Footer
