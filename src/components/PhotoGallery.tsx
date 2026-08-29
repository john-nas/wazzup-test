import { useRef, useState } from 'react'
import type { GalleryImage } from '../types/content'

type PhotoGalleryProps = {
  images: readonly GalleryImage[]
}

function PhotoGallery({ images }: PhotoGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastTriggerRef = useRef<HTMLButtonElement>(null)
  const swipeStartXRef = useRef<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentImage = images[currentIndex]

  const openImage = (index: number, trigger: HTMLButtonElement) => {
    setCurrentIndex(index)
    lastTriggerRef.current = trigger

    const dialog = dialogRef.current
    if (!dialog?.open) dialog?.showModal()

    requestAnimationFrame(() => closeButtonRef.current?.focus())
  }

  const moveBy = (offset: number) => {
    setCurrentIndex((index) => (index + offset + images.length) % images.length)
  }

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      moveBy(-1)
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      moveBy(1)
    }
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    swipeStartXRef.current = event.clientX
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (swipeStartXRef.current === null) return

    const distance = event.clientX - swipeStartXRef.current
    swipeStartXRef.current = null

    if (Math.abs(distance) < 50) return
    moveBy(distance > 0 ? -1 : 1)
  }

  return (
    <>
      <div className="photo-gallery">
        <ul className="photo-gallery__grid" aria-label="Wazzup Falafel photographs">
          {images.map((image, index) => (
            <li className="photo-gallery__item" key={image.id}>
              <button
                type="button"
                aria-label={`Open photo: ${image.caption}`}
                onClick={(event) => openImage(index, event.currentTarget)}
              >
                <img
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt=""
                  loading={index < 3 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  decoding="async"
                  style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        className="photo-viewer"
        ref={dialogRef}
        aria-labelledby="photo-viewer-caption"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        onClose={() => lastTriggerRef.current?.focus()}
        onKeyDown={handleDialogKeyDown}
      >
        <div className="photo-viewer__inner">
          <button
            className="photo-viewer__close"
            ref={closeButtonRef}
            type="button"
            aria-label="Close full-screen photo"
            onClick={() => dialogRef.current?.close()}
          >
            Close <span aria-hidden="true">×</span>
          </button>

          <div
            className="photo-viewer__media"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => { swipeStartXRef.current = null }}
          >
            <img
              src={currentImage.src}
              width={currentImage.width}
              height={currentImage.height}
              alt={currentImage.alt}
              decoding="async"
            />
          </div>

          <div className="photo-viewer__footer">
            <div className="photo-viewer__caption" aria-live="polite" aria-atomic="true">
              <span>{currentIndex + 1} / {images.length}</span>
              <p id="photo-viewer-caption">{currentImage.caption}</p>
            </div>
            <div className="photo-viewer__navigation">
              <button type="button" aria-label="Show previous photo" onClick={() => moveBy(-1)}>
                <span aria-hidden="true">←</span>
              </button>
              <button type="button" aria-label="Show next photo" onClick={() => moveBy(1)}>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default PhotoGallery
