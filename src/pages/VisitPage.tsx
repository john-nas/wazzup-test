import storefrontImage from '../assets/images/northcote-storefront.webp'
import Visit from '../sections/Visit'

function VisitPage() {
  return (
    <>
      <section className="visit-masthead" aria-labelledby="visit-page-heading">
        <img
          src={storefrontImage}
          width="860"
          height="573"
          alt="The Wazzup Falafel storefront on High Street in Northcote"
          fetchPriority="high"
        />
        <div className="visit-masthead__overlay">
          <p className="eyebrow eyebrow--light">343 High Street, Northcote</p>
          <h1 id="visit-page-heading">Come by for a falafel.</h1>
        </div>
      </section>
      <Visit />
    </>
  )
}

export default VisitPage
