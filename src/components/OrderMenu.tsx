import { menu } from '../data/menu'
import { orderingItemImages } from '../data/ordering'
import type { BasketQuantities } from '../types/order'
import { formatPrice } from '../utils/formatPrice'

type OrderMenuProps = {
  basket: BasketQuantities
  onAdd: (itemId: string) => void
  onDecrease: (itemId: string) => void
  onIncrease: (itemId: string) => void
  onRemove: (itemId: string) => void
}

function OrderMenu({
  basket,
  onAdd,
  onDecrease,
  onIncrease,
  onRemove,
}: OrderMenuProps) {
  return (
    <div className="order-menu" aria-label="Pickup menu">
      {menu.categories.map((category) => (
        <section className="order-category" key={category.id} aria-labelledby={`order-${category.id}`}>
          <h2 id={`order-${category.id}`}>{category.name}</h2>
          <ul>
            {category.items.map((item) => {
              const quantity = basket[item.id] ?? 0
              const previewImage = item.image ?? orderingItemImages[item.id]

              return (
                <li
                  className={`order-item${previewImage ? ' order-item--with-preview' : ''}`}
                  key={item.id}
                >
                  {previewImage ? (
                    <details className="order-item__preview">
                      <summary>
                        <span className="order-item__name">{item.name}</span>
                        <strong>{formatPrice(item.priceInCents, menu.currency)}</strong>
                        <span className="menu-item-chevron" aria-hidden="true" />
                      </summary>
                      <div className="order-item__preview-content">
                        <img
                          src={previewImage.src}
                          width={previewImage.width}
                          height={previewImage.height}
                          alt={previewImage.alt}
                          loading="lazy"
                          decoding="async"
                        />
                        {item.description && <p>{item.description}</p>}
                      </div>
                    </details>
                  ) : (
                    <>
                      <span className="order-item__name">{item.name}</span>
                      <strong>{formatPrice(item.priceInCents, menu.currency)}</strong>
                    </>
                  )}

                  {quantity === 0 ? (
                    <button
                      className="order-item__add"
                      type="button"
                      onClick={() => onAdd(item.id)}
                    >
                      Add
                    </button>
                  ) : (
                    <div className="order-item__selected">
                      <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                        <button
                          type="button"
                          aria-label={`Decrease ${item.name} quantity`}
                          onClick={() => onDecrease(item.id)}
                        >
                          −
                        </button>
                        <output aria-live="polite">{quantity}</output>
                        <button
                          type="button"
                          aria-label={`Increase ${item.name} quantity`}
                          onClick={() => onIncrease(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="order-item__remove"
                        type="button"
                        onClick={() => onRemove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default OrderMenu
