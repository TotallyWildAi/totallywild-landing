import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoLockup from './LogoLockup'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/creators', label: 'For Creators' },
  { to: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false)
  }, [location])

  return (
    <nav
      className="sticky top-0 z-50 px-6 py-2.5"
      style={{
        background: 'rgba(248, 251, 250, 0.96)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '0.5px solid var(--tw-border-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" style={{ textDecoration: 'none' }}>
          <LogoLockup />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: location.pathname === link.to ? 'var(--tw-text-primary)' : 'var(--tw-text-tertiary)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--tw-text-primary)' }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  location.pathname === link.to ? 'var(--tw-text-primary)' : 'var(--tw-text-tertiary)'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: CTA + mobile menu button */}
        <div className="flex items-center gap-4">
          <a
            href="https://app.totallywild.ai/"
            className="hidden md:block px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{ background: 'var(--tw-btn-primary-bg)', color: 'var(--tw-btn-primary-text)' }}
          >
            Get Started <span className="btn-arrow">→</span>
          </a>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-200"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--tw-text-primary)' }}>
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 flex flex-col gap-4" style={{ borderTop: '0.5px solid var(--tw-border-primary)' }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: 'var(--tw-text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.totallywild.ai/"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-200 hover:opacity-90"
            style={{ background: 'var(--tw-btn-primary-bg)', color: 'var(--tw-btn-primary-text)' }}
          >
            Get Started <span className="btn-arrow">→</span>
          </a>
          {/* Legal links — sit below the primary CTA in a secondary row so
              they're easy to find on mobile without competing with the
              main nav items. */}
          <div
            className="pt-3 mt-1 flex items-center gap-4 text-xs"
            style={{ borderTop: '0.5px solid var(--tw-border-primary)' }}
          >
            <Link
              to="/terms"
              className="uppercase tracking-wider hover:opacity-100 transition-opacity"
              style={{ color: 'var(--tw-text-secondary)', opacity: 0.75 }}
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="uppercase tracking-wider hover:opacity-100 transition-opacity"
              style={{ color: 'var(--tw-text-secondary)', opacity: 0.75 }}
            >
              Privacy
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
