import { useEffect, useState } from 'react'

// Subscribe to <html data-theme="..."> changes so any component on a
// paper-layout page can swap palettes when the user toggles theme in
// Navigation.tsx. SSR-safe: starts as 'day' during prerender, syncs on
// client mount.
export function useDocumentTheme(): 'day' | 'night' {
  const [theme, setTheme] = useState<'day' | 'night'>('day')
  useEffect(() => {
    const html = document.documentElement
    const read = () =>
      setTheme(html.dataset.theme === 'night' ? 'night' : 'day')
    read()
    const obs = new MutationObserver(read)
    obs.observe(html, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])
  return theme
}

// ParticleCloud colour palettes tuned for the warm-paper page background.
// Used by /creators, /about, /contact — anywhere the background canvas
// needs to match the warm shell that floats on top of it.
export const PARTICLE_THEMES = {
  day: {
    bgColor: '#fafaf7',
    particleColor: '60, 52, 137',
    linkColor: '110, 92, 204',
    glowColor: '155, 142, 232',
  },
  night: {
    bgColor: '#161513',
    particleColor: '255, 255, 255',
    linkColor: '155, 142, 232',
    glowColor: '110, 92, 204',
  },
} as const
