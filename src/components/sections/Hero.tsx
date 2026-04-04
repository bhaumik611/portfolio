'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'

const ROLES = [
  'ML Engineer',
  'Systems Builder',
  'LLM Researcher',
  'Startup Founder',
  'Full-Stack Dev',
]

// ── Particle canvas ──────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = 0, H = 0

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particles
    const COUNT = 80
    const particles = Array.from({ length: COUNT }, () => ({
      x:   Math.random() * W,
      y:   Math.random() * H,
      vx:  (Math.random() - 0.5) * 0.4,
      vy:  (Math.random() - 0.5) * 0.4,
      r:   Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Draw connections
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,255,136,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth   = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,136,${p.opacity})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset:    0,
        zIndex:   0,
        opacity:  0.6,
      }}
    />
  )
}

// ── Typewriter role ───────────────────────────────────────────────
function TypewriterRole() {
  const [index,   setIndex]   = useState(0)
  const [text,    setText]    = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex(i => (i + 1) % ROLES.length)
    } else {
      timeout = setTimeout(() => {
        setText(prev =>
          deleting
            ? prev.slice(0, -1)
            : current.slice(0, prev.length + 1)
        )
      }, deleting ? 40 : 80)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <span style={{ color: 'var(--accent)' }}>
      {text}
      <span style={{
        display:         'inline-block',
        width:           '2px',
        height:          '1em',
        background:      'var(--accent)',
        marginLeft:      '3px',
        verticalAlign:   'middle',
        animation:       'blink 1s step-end infinite',
      }} />
    </span>
  )
}

// ── Main Hero ─────────────────────────────────────────────────────
export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      style={{
        position:       'relative',
        minHeight:      '100vh',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        overflow:       'hidden',
        padding:        '0 24px',
      }}
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Radial gradient center glow */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,136,0.05) 0%, transparent 70%)',
        zIndex:     0,
        pointerEvents: 'none',
      }} />

      {/* Grid overlay */}
      <div style={{
        position:          'absolute',
        inset:             0,
        backgroundImage:   `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize:    '60px 60px',
        zIndex:            0,
        pointerEvents:     'none',
        maskImage:         'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        WebkitMaskImage:   'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
      }} />

      {/* Content */}
      <div style={{
        position:  'relative',
        zIndex:    1,
        maxWidth:  '900px',
        width:     '100%',
        textAlign: 'center',
      }}>

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '32px' }}
        >
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '8px',
            padding:       '6px 16px',
            borderRadius:  '100px',
            border:        '1px solid rgba(0,255,136,0.2)',
            background:    'rgba(0,255,136,0.05)',
            fontFamily:    'var(--font-mono)',
            fontSize:      '12px',
            color:         'var(--accent)',
            letterSpacing: '1px',
          }}>
            <span style={{
              width:        '6px',
              height:       '6px',
              borderRadius: '50%',
              background:   'var(--accent)',
              boxShadow:    '0 0 8px var(--accent)',
              display:      'block',
              animation:    'pulse 2s ease infinite',
            }} />
            Open to Opportunities · Graduating 2026
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(52px, 10vw, 100px)',
            fontWeight:    800,
            letterSpacing: '-3px',
            lineHeight:    0.95,
            marginBottom:  '24px',
            color:         'var(--text)',
          }}
        >
          Bhaumik
          <br />
          <span style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.15)',
            color:            'transparent',
            display:          'block',
          }}>
            Patel
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontFamily:   'var(--font-mono)',
            fontSize:     'clamp(16px, 3vw, 22px)',
            marginBottom: '16px',
            minHeight:    '36px',
          }}
        >
          <TypewriterRole />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontFamily:   'var(--font-body)',
            fontSize:     'clamp(15px, 2.5vw, 19px)',
            color:        'var(--muted)',
            lineHeight:   1.6,
            marginBottom: '48px',
            maxWidth:     '520px',
            margin:       '0 auto 48px',
          }}
        >
          I design systems that{' '}
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>think</span>,{' '}
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>learn</span>, and{' '}
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>scale</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display:        'flex',
            gap:            '12px',
            justifyContent: 'center',
            flexWrap:       'wrap',
            marginBottom:   '64px',
          }}
        >
          {/* Primary */}
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(0,255,136,0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding:      '14px 28px',
              borderRadius: '12px',
              border:       'none',
              background:   'var(--accent)',
              color:        '#000',
              fontFamily:   'var(--font-display)',
              fontSize:     '15px',
              fontWeight:   700,
              cursor:       'pointer',
              letterSpacing:'-0.3px',
            }}
          >
            View Projects →
          </motion.button>

          {/* Secondary */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding:        '14px 28px',
              borderRadius:   '12px',
              border:         '1px solid var(--border)',
              background:     'var(--surface)',
              color:          'var(--text)',
              fontFamily:     'var(--font-display)',
              fontSize:       '15px',
              fontWeight:     600,
              cursor:         'pointer',
              textDecoration: 'none',
              letterSpacing:  '-0.3px',
            }}
          >
            Download Resume
          </motion.a>

          {/* Ghost */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding:      '14px 28px',
              borderRadius: '12px',
              border:       '1px solid var(--border)',
              background:   'transparent',
              color:        'var(--muted)',
              fontFamily:   'var(--font-display)',
              fontSize:     '15px',
              fontWeight:   600,
              cursor:       'pointer',
              letterSpacing:'-0.3px',
            }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}
        >
          {[
            { icon: Github,   href: 'https://github.com/bhaumikpatel',      label: 'GitHub'   },
            { icon: Linkedin, href: 'https://linkedin.com/in/bhaumikpatel', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: 'var(--accent)' }}
              style={{
                color:      'var(--muted)',
                display:    'flex',
                alignItems: 'center',
                gap:        '6px',
                fontFamily: 'var(--font-mono)',
                fontSize:   '12px',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              <Icon size={15} />
              {label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        style={{
          position:  'absolute',
          bottom:    '40px',
          left:      '50%',
          transform: 'translateX(-50%)',
          background:'none',
          border:    'none',
          cursor:    'pointer',
          color:     'var(--muted)',
          display:   'flex',
          flexDirection: 'column',
          alignItems:'center',
          gap:       '6px',
          zIndex:    1,
        }}
      >
        <span style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--accent); }
          50%       { opacity: 0.5; box-shadow: 0 0 16px var(--accent); }
        }
      `}</style>
    </section>
  )
}