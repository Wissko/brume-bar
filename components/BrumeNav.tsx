'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/carte', label: 'La Carte' },
  { href: '/reservation', label: 'Réservation' },
  { href: '/histoire', label: 'Notre Histoire' },
]

export default function BrumeNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 2.5rem',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
          background: scrolled ? 'rgba(10, 8, 4, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontSize: '1.6rem',
              color: 'var(--gold)',
              letterSpacing: '0.1em',
              fontWeight: 400,
            }}
          >
            Brume
          </span>
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '0.625rem',
                  fontWeight: 400,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: pathname === href ? 'var(--gold)' : 'var(--muted)',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  if (pathname !== href) {
                    ;(e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--cream)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== href) {
                    ;(e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--muted)'
                  }
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="nav-mobile-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1px',
              background: 'var(--gold)',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1px',
              background: 'var(--gold)',
              transition: 'opacity 0.3s ease',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1px',
              background: 'var(--gold)',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'rgba(10, 8, 4, 0.97)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontStyle: 'italic',
                  fontSize: '2.5rem',
                  color: pathname === href ? 'var(--gold)' : 'var(--cream)',
                  letterSpacing: '0.05em',
                }}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
