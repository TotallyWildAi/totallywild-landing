import { Outlet, Link } from 'react-router-dom'
import Navigation from './Navigation'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pb-12">
        <Outlet />
      </main>
      <footer
        className="fixed bottom-0 left-0 right-0 z-40"
        style={{
          background: 'color-mix(in srgb, var(--tw-bg-primary) 72%, transparent)',
          backdropFilter: 'blur(16px) saturate(140%)',
          WebkitBackdropFilter: 'blur(16px) saturate(140%)',
        }}
      >
        {/* hairline gradient top border */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, var(--tw-border-primary) 20%, var(--tw-border-accent) 50%, var(--tw-border-primary) 80%, transparent 100%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 h-10 flex items-center justify-end">
          <p
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 text-[11px] tracking-wide"
            style={{ color: 'var(--tw-text-tertiary)', letterSpacing: '0.02em' }}
          >
            © 2026 Totally Wild AI
          </p>

          <nav className="flex items-center gap-5 text-[11px]" style={{ letterSpacing: '0.02em' }}>
            <Link
              to="/about"
              className="uppercase tracking-wider transition-colors duration-200 hover:opacity-100"
              style={{ color: 'var(--tw-text-secondary)', opacity: 0.75 }}
            >
              About
            </Link>
            <span
              aria-hidden="true"
              className="w-px h-3"
              style={{ background: 'var(--tw-border-primary)' }}
            />
            <Link
              to="/contact"
              className="uppercase tracking-wider transition-colors duration-200 hover:opacity-100"
              style={{ color: 'var(--tw-text-secondary)', opacity: 0.75 }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
