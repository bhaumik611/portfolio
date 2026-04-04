'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const socials = [
  { icon: Github,   href: 'https://github.com/bhaumikpatel',   label: 'GitHub'   },
  { icon: Linkedin, href: 'https://linkedin.com/in/bhaumikpatel', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:bhaumik@example.com',         label: 'Email'    },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop:  '1px solid var(--border)',
      padding:    '48px 24px',
      position:   'relative',
    }}>
      <div style={{
        maxWidth:       '1200px',
        margin:         '0 auto',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        flexWrap:       'wrap',
        gap:            '24px',
      }}>

        {/* Left */}
        <div>
          <p style={{
            fontFamily:  'var(--font-display)',
            fontWeight:  700,
            fontSize:    '18px',
            marginBottom:'4px',
          }}>
            Bhaumik Patel<span style={{ color: 'var(--accent)' }}>.</span>
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize:   '12px',
            color:      'var(--muted)',
          }}>
            Building systems that think, learn, and scale.
          </p>
        </div>

        {/* Socials */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width:        '40px',
                height:       '40px',
                borderRadius: '10px',
                border:       '1px solid var(--border)',
                background:   'var(--surface)',
                display:      'flex',
                alignItems:   'center',
                justifyContent: 'center',
                color:        'var(--muted)',
                transition:   'color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color        = 'var(--accent)'
                el.style.borderColor  = 'rgba(0,255,136,0.3)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color        = 'var(--muted)'
                el.style.borderColor  = 'var(--border)'
              }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        {/* Back to top */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display:      'flex',
            alignItems:   'center',
            gap:          '8px',
            background:   'none',
            border:       '1px solid var(--border)',
            borderRadius: '10px',
            padding:      '10px 16px',
            color:        'var(--muted)',
            cursor:       'pointer',
            fontFamily:   'var(--font-mono)',
            fontSize:     '12px',
            transition:   'all 0.2s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.color       = 'var(--accent)'
            el.style.borderColor = 'rgba(0,255,136,0.3)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.color       = 'var(--muted)'
            el.style.borderColor = 'var(--border)'
          }}
        >
          <ArrowUp size={14} />
          back_to_top
        </motion.button>
      </div>

      {/* Copyright */}
      <p style={{
        textAlign:  'center',
        marginTop:  '40px',
        color:      'var(--muted)',
        fontFamily: 'var(--font-mono)',
        fontSize:   '11px',
        opacity:    0.5,
      }}>
        © {new Date().getFullYear()} Bhaumik Patel — Crafted with intent.
      </p>
    </footer>
  )
}