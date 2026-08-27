import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/wazzup-falafel-logo.png'

const navigationItems = [
  { label: 'Home', to: '/', mobileOnly: true },
  { label: 'Menu', to: '/menu' },
  { label: 'Our story', to: '/story' },
  { label: 'Visit', to: '/visit' },
  { label: 'Shop', to: '/shop' },
]

function Header() {
  const { pathname } = useLocation()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateHeader = () => {
      const scrolled = window.scrollY > 72
      setHasScrolled(scrolled)
      if (scrolled) setMenuOpen(false)
    }

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const isExpanded = pathname === '/' && !hasScrolled

  return (
    <header className={`site-header site-header--${isExpanded ? 'expanded' : 'compact'}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="container site-header__inner">
        <NavLink className="brand" to="/" aria-label="Wazzup Falafel, home">
          <img className="brand__logo" src={logo} width="480" height="320" alt="" />
        </NavLink>

        <button
          className="brand-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <img className="brand__logo" src={logo} width="480" height="320" alt="" />
          <span className="brand-toggle__label">{menuOpen ? 'Close' : 'Explore'}</span>
        </button>

        <nav
          className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <ul className="site-nav__list">
            {navigationItems.map((item) => (
              <li className={item.mobileOnly ? 'site-nav__home' : undefined} key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => isActive ? 'is-active' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
