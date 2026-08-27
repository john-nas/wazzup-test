import interiorDetailsImage from '../assets/images/interior-memorabilia.webp'
import openKitchenImage from '../assets/images/open-kitchen.webp'
import OurStory from '../sections/OurStory'
import MotifDivider from '../components/MotifDivider'

function StoryPage() {
  return (
    <>
      <OurStory />
      <MotifDivider />

      <section className="details-section section" aria-labelledby="details-heading">
        <div className="container details-grid">
          <div className="details-copy">
            <p className="eyebrow">Look around</p>
            <h2 id="details-heading">The walls have something to say.</h2>
            <p>
              Framed Palestinian artwork litter the walls, photo memorabilia showcasing both
              local artists and highlighting palastinian voices. You'll feel at home with the
              with Ahmad's cozy hopitality.
            </p>
            <p>
              At the centre the open kitchen: where the food is made fresh with
              heart and soul and always with a freindly smile.
            </p>
          </div>

          <div className="details-gallery">
            <figure className="details-gallery__wide">
              <img
                src={interiorDetailsImage}
                width="860"
                height="573"
                alt="Customers dining beside framed Palestinian artwork at Wazzup Falafel"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Artwork, timber and a room made for gathering.</figcaption>
            </figure>
            <figure className="details-gallery__small">
              <img
                src={openKitchenImage}
                width="860"
                height="573"
                alt="The open kitchen and timber counter at Wazzup Falafel"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}

export default StoryPage
