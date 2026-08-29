import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import CreditsPage from './pages/CreditsPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import StoryPage from './pages/StoryPage'
import VisitPage from './pages/VisitPage'

function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/credits" element={<CreditsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
