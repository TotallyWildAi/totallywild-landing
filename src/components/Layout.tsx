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
            className="hidden md:block absolute left-6 text-[11px] tracking-wide"
            style={{ color: 'var(--tw-text-tertiary)', letterSpacing: '0.02em' }}
          >
            Brisbane, Australia
            <span aria-hidden="true" className="mx-2 opacity-60">·</span>
            ABN 70 697 524 771
          </p>

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
            <span
              aria-hidden="true"
              className="w-px h-3"
              style={{ background: 'var(--tw-border-primary)' }}
            />
            <a
              href="https://github.com/TotallyWildAi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Totally Wild AI on GitHub"
              className="inline-flex items-center justify-center transition-opacity duration-200 hover:opacity-100"
              style={{ color: 'var(--tw-text-secondary)', opacity: 0.75 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
