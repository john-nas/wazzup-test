import stuffedFalafelImage from '../assets/images/stuffed-falafel.webp'
import IllustrationCredit from '../components/IllustrationCredit'
import PlantBasedBadge from '../components/PlantBasedBadge'
import { tirazainIllustrations } from '../data/illustrations'
import Menu from '../sections/Menu'

function MenuPage() {
  return (
    <>
      <section className="page-masthead menu-masthead" aria-labelledby="menu-page-heading">
        <img
          className="menu-masthead__motif"
          src={tirazainIllustrations.treeOfLife.image}
          width={tirazainIllustrations.treeOfLife.width}
          height={tirazainIllustrations.treeOfLife.height}
          alt="Tree of Life embroidery pattern illustration"
        />
        <div className="container page-masthead__grid">
          <div>
            <p className="eyebrow">Made fresh to order</p>
            <h1 id="menu-page-heading">Falafel comes first.</h1>
            <p>
              A crisp falafel is the foundation of your feast -
              then choose from a table full of authentic Palestinian favourites.
            </p>
            <PlantBasedBadge compact />
          </div>
          <figure className="page-masthead__image">
            <img
              src={stuffedFalafelImage}
              width="860"
              height="573"
              alt="Sesame-covered stuffed falafel in a ceramic bowl"
              fetchPriority="high"
            />
          </figure>
        </div>
        <div className="container">
          <IllustrationCredit
            className="menu-masthead__credit"
            illustrations={[
              tirazainIllustrations.treeOfLife,
              tirazainIllustrations.oliveBranch,
            ]}
          />
        </div>
      </section>
      <Menu />
    </>
  )
}

export default MenuPage
