import { Outlet, Link } from 'react-router-dom'
import Navigation from './Navigation'
import LogoLockup from './LogoLockup'

const FOOTER_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/terms', label: 'Terms' },
  { to: '/privacy', label: 'Privacy' },
]

const footerLinkStyle = {
  fontSize: '0.76rem',
  color: 'rgba(255, 255, 255, 0.45)',
  textDecoration: 'none',
} as const

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer
        className="flex items-center justify-between flex-wrap gap-4"
        style={{
          background: 'var(--tw-grad-footer)',
          borderTop: '0.5px solid rgba(255, 255, 255, 0.08)',
          padding: '2.5rem 6vw',
        }}
      >
        <LogoLockup variant="footer" />

        <nav className="flex items-center gap-6 flex-wrap">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors duration-200 hover:text-white/80"
              style={footerLinkStyle}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/TotallyWildAi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Totally Wild AI on GitHub"
            className="inline-flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
            style={{ color: 'rgba(255, 255, 255, 0.45)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
        </nav>

        <p style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.4)', margin: 0 }}>
          © 2026 Totally Wild AI · Brisbane, Australia · ABN 70 697 524 771
        </p>
      </footer>
    </div>
  )
}
