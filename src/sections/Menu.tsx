import { menu } from '../data/menu'
import { formatPrice } from '../utils/formatPrice'

function Menu() {
  return (
    <section className="menu-section" id="menu" aria-label="Wazzup Falafel menu">
      <div className="container">
        <div className="menu-grid">
          {menu.categories.map((category) => (
            <article className="menu-category" key={category.id}>
              <h2>{category.name}</h2>
              <ul>
                {category.items.map((item) => {
                  const isExpandable = Boolean(item.description || item.image)
                  const price = formatPrice(item.priceInCents, menu.currency)

                  return (
                    <li
                      className={isExpandable ? 'menu-item menu-item--expandable' : 'menu-item menu-item--simple'}
                      key={item.id}
                    >
                      {isExpandable ? (
                        <details>
                          <summary>
                            <span className="menu-item-name">{item.name}</span>
                            <strong>{price}</strong>
                            <span className="menu-item-chevron" aria-hidden="true" />
                          </summary>
                          <div className="menu-item-details">
                            {item.image && (
                              <img
                                src={item.image.src}
                                width={item.image.width}
                                height={item.image.height}
                                alt={item.image.alt}
                                loading="lazy"
                                decoding="async"
                              />
                            )}
                            {item.description && <p>{item.description}</p>}
                          </div>
                        </details>
                      ) : (
                        <>
                          <span className="menu-item-name">{item.name}</span>
                          <strong>{price}</strong>
                        </>
                      )}
                    </li>
                  )
                })}
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
