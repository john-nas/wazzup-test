import PhotoGallery from '../components/PhotoGallery'
import { galleryImages } from '../data/gallery'
import '../styles/gallery.css'

function GalleryPage() {
  return (
    <section className="gallery-page" aria-labelledby="gallery-heading">
      <header className="container gallery-page__intro">
        <p className="eyebrow">Gallery</p>
        <h1 id="gallery-heading">Food, people and place.</h1>
        <p>A look at the food and the Northcote shop.</p>
      </header>
      <PhotoGallery images={galleryImages} />
    </section>
  )
}

export default GalleryPage
