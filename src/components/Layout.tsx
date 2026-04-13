import { Outlet, Link } from 'react-router-dom'
import Navigation from './Navigation'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="py-8 px-6" style={{ borderTop: '0.5px solid var(--tw-border-primary)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/logo-muted.svg" alt="Totally Wild" className="h-6" />
          <p className="text-sm" style={{ color: 'var(--tw-text-tertiary)' }}>
            © 2026 Totally Wild AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/about" className="text-sm hover:text-brand transition-colors duration-150" style={{ color: 'var(--tw-text-secondary)' }}>About</Link>
            <Link to="/contact" className="text-sm hover:text-brand transition-colors duration-150" style={{ color: 'var(--tw-text-secondary)' }}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
