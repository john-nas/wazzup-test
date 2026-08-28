import { business } from '../data/business'

function Visit() {
  const { address } = business
  const instagram = business.socials.find((social) => social.platform === 'Instagram')
  const today = new Intl.DateTimeFormat('en-AU', {
    weekday: 'long',
    timeZone: 'Australia/Melbourne',
  }).format(new Date())

  return (
    <section className="visit-section section" id="location" aria-labelledby="visit-heading">
      <div className="container visit-grid">
        <div className="hours-card">
          <p className="eyebrow">Plan your visit</p>
          <h2 id="visit-heading">Opening hours</h2>
          <dl>
            {business.openingHours.map((entry) => {
              const isToday = entry.day === today
              const rowClassName = [entry.isClosed && 'is-closed', isToday && 'is-today']
                .filter(Boolean)
                .join(' ')

              return (
                <div className={rowClassName || undefined} key={entry.day}>
                  <dt aria-current={isToday ? 'date' : undefined}>
                    {entry.day}{isToday && ' · Today'}
                  </dt>
                  <dd>{entry.hours}</dd>
                </div>
              )
            })}
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

      </div>
    </section>
  )
}

export default Visit
