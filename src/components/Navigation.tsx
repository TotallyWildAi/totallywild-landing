import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [theme, setTheme] = useState<'day' | 'night'>('day')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false)
  }, [location])

  const toggleTheme = () => {
    const newTheme = theme === 'day' ? 'night' : 'day'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <nav className="sticky top-0 z-50 px-6 py-2.5" style={{ background: 'var(--tw-bg-primary)', borderBottom: '0.5px solid var(--tw-border-primary)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={theme === 'day' ? '/mark-day.svg' : '/mark-night.svg'} 
            alt="Totally Wild" 
            className="h-8"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--tw-text-primary)' }}>
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--tw-text-primary)' }}>
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--tw-text-primary)' }}>
            Contact
          </Link>
        </div>

        {/* Right side: Theme toggle + CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-surface-secondary transition-all duration-200"
            aria-label="Toggle theme"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: 'var(--tw-text-primary)' }}>
              {theme === 'day' ? (
                <path d="M10 3V1M10 19V17M17 10H19M1 10H3M15.657 4.343L17.071 2.929M2.929 17.071L4.343 15.657M15.657 15.657L17.071 17.071M2.929 2.929L4.343 4.343M14 10C14 12.209 12.209 14 10 14C7.791 14 6 12.209 6 10C6 7.791 7.791 6 10 6C12.209 6 14 7.791 14 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M17.293 13.293C16.524 13.748 15.636 14 14.688 14C11.374 14 8.688 11.314 8.688 8C8.688 7.052 8.94 6.164 9.395 5.395C6.467 5.895 4.188 8.424 4.188 11.5C4.188 14.952 6.986 17.75 10.438 17.75C13.514 17.75 16.043 15.471 16.543 12.543L17.293 13.293Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
          <Link
            to="/contact"
            className="hidden md:block px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{ background: 'var(--tw-btn-primary-bg)', color: 'var(--tw-btn-primary-text)' }}
          >
            Get Started
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-secondary transition-all duration-200"
            aria-label="Toggle menu"
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
          <Link to="/" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--tw-text-primary)' }}>
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--tw-text-primary)' }}>
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--tw-text-primary)' }}>
            Contact
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-200 hover:opacity-90"
            style={{ background: 'var(--tw-btn-primary-bg)', color: 'var(--tw-btn-primary-text)' }}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
