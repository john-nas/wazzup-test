import { business } from '../data/business'

function Visit() {
  const { address } = business
  const instagram = business.socials.find((social) => social.platform === 'Instagram')

  return (
    <section className="visit-section section" id="location" aria-labelledby="visit-heading">
      <div className="container visit-grid">
        <div className="hours-card">
          <p className="eyebrow">Plan your visit</p>
          <h2 id="visit-heading">Opening hours</h2>
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

        <div className="visit-intro">
          <p className="eyebrow">Find us</p>
          <h2>We're on High Street.</h2>
          <address>
            {address.street}<br />
            {address.suburb} {address.region} {address.postcode}
          </address>
          <a className="button" href={address.mapUrl} target="_blank" rel="noreferrer">
            Get directions
          </a>

          {instagram && (
            <a className="visit-instagram" href={instagram.url} target="_blank" rel="noreferrer">
              See what's cooking on Instagram
            </a>
          )}
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
