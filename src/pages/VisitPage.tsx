import storefrontImage from '../assets/images/northcote-storefront.webp'
import Visit from '../sections/Visit'
import MotifDivider from '../components/MotifDivider'

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
          <p className="eyebrow">Northcote, Melbourne/Naarm</p>
          <h1 id="visit-page-heading">Meet you on High Street.</h1>
        </div>
      </section>
      <MotifDivider />
      <Visit />
    </>
  )
}

export default VisitPage
