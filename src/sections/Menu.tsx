import { menu } from '../data/menu'
import { menuGallery } from '../data/menuGallery'
import { formatPrice } from '../utils/formatPrice'

function Menu() {
  return (
    <section className="menu-section section" id="menu" aria-labelledby="menu-heading">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we’re serving</p>
            <h2 id="menu-heading">The menu</h2>
          </div>
          <p>Falafel made fresh, served generously and ready to share.</p>
        </div>

        <div className="menu-showcase">
          <div className="menu-showcase__heading">
            <h3>Main characters</h3>
            <span>Swipe to explore</span>
          </div>
          <div
            className="menu-showcase__rail"
            role="region"
            aria-label="Featured food from the menu"
            tabIndex={0}
          >
            {menuGallery.map((image, index) => (
              <figure className="menu-showcase__item" key={image.menuItemId}>
                <img
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span>{String(index + 1).padStart(2, '0')} / {String(menuGallery.length).padStart(2, '0')}</span>
                  <strong>{image.title}</strong>
                  <p>{image.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="menu-grid">
          {menu.categories.map((category) => (
            <article className="menu-category" key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item.id}>
                    <span>{item.name}</span>
                    <strong>{formatPrice(item.priceInCents, menu.currency)}</strong>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="data-note">{menu.priceNote}</p>
      </div>
    </section>
  )
}

export default Menu
