import signImage from '../assets/images/restaurant-sign.webp'
import MediaMentions from '../sections/MediaMentions'

function PressPage() {
  return (
    <>
      <section className="page-masthead press-masthead" aria-labelledby="press-page-heading">
        <div className="container page-masthead__grid">
          <div>
            <p className="eyebrow">Stories and reviews</p>
            <h1 id="press-page-heading">Word gets around.</h1>
            <p>
              Visits, conversations and reviews from Melbourne/Naarm food writers,
              local publications and the wider falafel-loving community.
            </p>
          </div>
          <figure className="page-masthead__image">
            <img
              src={signImage}
              width="860"
              height="573"
              alt="The Wazzup Falafel sign hanging inside the restaurant"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>
      <MediaMentions />
    </>
  )
}

export default PressPage
