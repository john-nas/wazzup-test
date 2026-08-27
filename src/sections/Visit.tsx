import { business } from '../data/business'

function Visit() {
  const { address } = business

  return (
    <section className="visit-section section" id="location" aria-labelledby="visit-heading">
      <div className="container visit-grid">
        <div className="visit-intro">
          <p className="eyebrow">Come say hello</p>
          <h2 id="visit-heading">Find us in Northcote</h2>
          <address>
            {address.street}<br />
            {address.suburb} {address.region} {address.postcode}
          </address>
          <a className="button" href={address.mapUrl} target="_blank" rel="noreferrer">
            Get directions
          </a>

          <div className="social-links" aria-label="Social media">
            {business.socials.map((social) => (
              <a href={social.url} key={social.platform} target="_blank" rel="noreferrer">
                {social.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hours-card">
          <h3>Opening hours</h3>
          <dl>
            {business.openingHours.map((entry) => (
              <div className={entry.isClosed ? 'is-closed' : undefined} key={entry.day}>
                <dt>{entry.day}</dt>
                <dd>{entry.hours}</dd>
              </div>
            ))}
          </dl>
          <p className="data-note">Hours may vary on public holidays.</p>
        </div>

        <div className="map-embed">
          <iframe
            src={address.mapEmbedUrl}
            title="Google Map showing Wazzup Falafel on High Street in Northcote"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Visit
