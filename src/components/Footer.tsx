import { Link } from 'react-router-dom'
import logo from '../assets/images/wazzup-falafel-logo.png'
import { business } from '../data/business'
import { tirazainIllustrations } from '../data/illustrations'
import IllustrationCredit from './IllustrationCredit'

function Footer() {
  const { address } = business

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src={logo} width="480" height="320" alt="Wazzup Falafel" />
          <p>Palestinian street food and neighbourhood hospitality in Northcote.</p>
        </div>

        <div className="footer-links">
          <div>
            <h2>Explore</h2>
            <nav aria-label="Footer navigation">
              <Link to="/menu">Menu</Link>
              <Link to="/story">Our story</Link>
              <Link to="/shop">Shop prototype</Link>
              <Link to="/press">Press</Link>
            </nav>
          </div>

          <div>
            <h2>Visit</h2>
            <address>
              {address.street}<br />
              {address.suburb} {address.region} {address.postcode}
            </address>
            <Link to="/visit">Hours and directions</Link>
          </div>
        </div>
      </div>
      <div className="container footer-credits">
        <IllustrationCredit
          illustrations={[
            tirazainIllustrations.farranehDivider,
            tirazainIllustrations.qalbHeart,
            tirazainIllustrations.doubleAiryFair,
            tirazainIllustrations.reeshFeathers,
            tirazainIllustrations.treeOfLife,
            tirazainIllustrations.oliveBranch,
          ]}
        />
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {business.name}</span>
        <span className="footer-signoff">
          Made for good food and good company.
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
