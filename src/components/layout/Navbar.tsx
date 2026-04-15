'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Code } from 'lucide-react'

const navLinks = [
  { label: 'About',        href: '#about'        },
  { label: 'Skills',       href: '#skills'       },
  { label: 'Projects',     href: '#projects'     },
  { label: 'Experience',   href: '#experience'   },
  { label: 'Research',     href: '#research'     },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact'      },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [scrolled,       setScrolled]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('')
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [mounted,        setMounted]        = useState(false)

  useEffect(() => { setMounted(true) }, [])

  /* scroll → shrink navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* highlight active section */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          right:           0,
          zIndex:          100,
          padding:         scrolled ? '12px 0' : '22px 0',
          background:      scrolled
            ? 'rgba(8,8,8,0.85)'
            : 'transparent',
          backdropFilter:  scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom:    scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition:      'padding 0.4s ease, background 0.4s ease',
        }}
      >
        <div style={{
          maxWidth:      '1200px',
          margin:        '0 auto',
          padding:       '0 24px',
          display:       'flex',
          alignItems:    'center',
          justifyContent:'between',
          gap:           '32px',
        }}>

          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{
              fontFamily:  'var(--font-display)',
              fontWeight:  800,
              fontSize:    '20px',
              letterSpacing: '-0.5px',
              color:       'var(--text)',
              textDecoration: 'none',
              flexShrink:  0,
            }}
          >
            <Code size={16} style={{ marginRight: '6px' }} />
            BP<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
               className="hidden-mobile">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    background:    'none',
                    border:        'none',
                    cursor:        'pointer',
                    padding:       '6px 14px',
                    borderRadius:  '8px',
                    fontFamily:    'var(--font-body)',
                    fontSize:      '13.5px',
                    fontWeight:    isActive ? 600 : 400,
                    color:         isActive ? 'var(--accent)' : 'var(--muted)',
                    transition:    'all 0.2s ease',
                    position:      'relative',
                  }}
                  onMouseEnter={e => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color = 'var(--text)'
                  }}
                  onMouseLeave={e => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color = 'var(--muted)'
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      style={{
                        position:   'absolute',
                        inset:      0,
                        background: 'rgba(0,255,136,0.08)',
                        borderRadius: '8px',
                        border:     '1px solid rgba(0,255,136,0.15)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

            {/* Theme toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                style={{
                  width:        '38px',
                  height:       '38px',
                  borderRadius: '10px',
                  border:       '1px solid var(--border)',
                  background:   'var(--surface)',
                  color:        'var(--text)',
                  cursor:       'pointer',
                  display:      'flex',
                  alignItems:   'center',
                  justifyContent: 'center',
                }}
              >
                {theme === 'dark'
                  ? <Sun  size={15} />
                  : <Moon size={15} />}
              </motion.button>
            )}

            {/* Resume CTA */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden-mobile"
              style={{
                padding:      '8px 18px',
                borderRadius: '10px',
                border:       '1px solid var(--accent)',
                background:   'transparent',
                color:        'var(--accent)',
                fontFamily:   'var(--font-mono)',
                fontSize:     '12px',
                fontWeight:   500,
                cursor:       'pointer',
                textDecoration: 'none',
                letterSpacing: '0.5px',
                transition:   'background 0.2s ease',
              }}
              onMouseEnter={e =>
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,136,0.08)'}
              onMouseLeave={e =>
                (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              resume.pdf
            </motion.a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="show-mobile"
              style={{
                background: 'none',
                border:     'none',
                color:      'var(--text)',
                cursor:     'pointer',
                padding:    '4px',
              }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position:   'fixed',
              top:        '70px',
              left:       '16px',
              right:      '16px',
              zIndex:     99,
              background: 'var(--surface)',
              border:     '1px solid var(--border)',
              borderRadius: '16px',
              padding:    '16px',
              display:    'flex',
              flexDirection: 'column',
              gap:        '4px',
              backdropFilter: 'blur(24px)',
            }}
          >
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  background:    'none',
                  border:        'none',
                  cursor:        'pointer',
                  padding:       '12px 16px',
                  borderRadius:  '10px',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '15px',
                  fontWeight:    activeSection === link.href.slice(1) ? 600 : 400,
                  color:         activeSection === link.href.slice(1)
                    ? 'var(--accent)'
                    : 'var(--text)',
                  textAlign:     'left',
                }}
              >
                {link.label}
              </button>
            ))}
            
            <a
              href="/resume.pdf"
              download
              style={{
                marginTop:    '8px',
                padding:      '12px 16px',
                borderRadius: '10px',
                border:       '1px solid var(--accent)',
                color:        'var(--accent)',
                fontFamily:   'var(--font-mono)',
                fontSize:     '13px',
                textAlign:    'center',
                textDecoration: 'none',
              }}
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile   { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </>
  )
}