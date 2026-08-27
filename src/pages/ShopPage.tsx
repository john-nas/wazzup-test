import IllustrationCredit from '../components/IllustrationCredit'
import MotifDivider from '../components/MotifDivider'
import { tirazainIllustrations } from '../data/illustrations'
import { shop } from '../data/shop'
import { formatPrice } from '../utils/formatPrice'

function ShopPage() {
  return (
    <>
      <section className="shop-masthead page-masthead" aria-labelledby="shop-heading">
        <img
          className="shop-masthead__motif"
          src={tirazainIllustrations.qalbHeart.image}
          width={tirazainIllustrations.qalbHeart.width}
          height={tirazainIllustrations.qalbHeart.height}
          alt=""
        />
        <div className="container shop-masthead__content">
          <p className="eyebrow">A small future shop</p>
          <h1 id="shop-heading">Take a little Wazzup with you.</h1>
          <p>
            A prototype collection of useful things for falafel people—made to
            test what a future in-store and online range could feel like.
          </p>
        </div>
      </section>

      <MotifDivider />

      <section className="shop-section section" aria-label="Prototype merchandise">
        <div className="container">
          <div className="shop-grid">
            {shop.products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className={`product-card__visual product-card__visual--${product.treatment}`}>
                  <img
                    src={product.image}
                    width={product.imageWidth}
                    height={product.imageHeight}
                    alt={product.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>Concept</span>
                </div>
                <div className="product-card__content">
                  <div>
                    <h2>{product.name}</h2>
                    <strong>{formatPrice(product.priceInCents, shop.currency)}</strong>
                  </div>
                  <p>{product.description}</p>
                  <button type="button" disabled>Coming soon</button>
                </div>
              </article>
            ))}
          </div>
          <p className="data-note shop-note">{shop.notice}</p>
          <IllustrationCredit
            illustrations={[
              tirazainIllustrations.qalbHeart,
              tirazainIllustrations.treeOfLife,
              tirazainIllustrations.oliveBranch,
            ]}
          />
        </div>
      </section>
    </>
  )
}

export default ShopPage
