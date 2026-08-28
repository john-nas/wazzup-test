import { Link } from 'react-router-dom'
import { business } from '../data/business'
import { tirazainIllustrations } from '../data/illustrations'
import { mediaMentions } from '../data/media'
import IllustrationCredit from './IllustrationCredit'
import TatreezDivider from './TatreezDivider'

function Footer() {
  const { address } = business

  return (
    <footer className="site-footer">
      <TatreezDivider pattern="zigzag" dark />
      <div className="container footer-main">
        <div>
          <strong className="footer-name">Wazzup Falafel</strong>
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
                  {mention.outlet}
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
