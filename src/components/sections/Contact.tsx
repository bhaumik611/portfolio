'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin, Mail, Send, ArrowRight } from 'lucide-react'

const socials = [
  {
    icon:  Github,
    label: 'GitHub',
    handle: '@bhaumikpatel',
    href:  'https://github.com/bhaumikpatel',
    color: '#f0f0f0',
  },
  {
    icon:  Linkedin,
    label: 'LinkedIn',
    handle: 'Bhaumik Patel',
    href:  'https://linkedin.com/in/bhaumikpatel',
    color: '#0ea5e9',
  },
  {
    icon:  Mail,
    label: 'Email',
    handle: 'bhaumik@example.com',
    href:  'mailto:bhaumik@example.com',
    color: 'var(--accent)',
  },
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [errors, setErrors]   = useState<Record<string, string>>({})
  const [status, setStatus]   = useState<'idle' | 'sending' | 'sent'>('idle')

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim())                          e.name    = 'Name is required'
    if (!form.email.trim())                         e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email))     e.email   = 'Invalid email'
    if (!form.message.trim())                       e.message = 'Message is required'
    else if (form.message.trim().length < 20)       e.message = 'Too short — say more'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1800)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name])
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  return (
    <section id="contact" className="section" ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}>

      <div className="mesh-bg" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '12px',
            color:         'var(--accent)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom:  '16px',
          }}
        >
          // contact
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(32px, 5vw, 56px)',
            fontWeight:    800,
            letterSpacing: '-1.5px',
            lineHeight:    1.1,
            marginBottom:  '16px',
            maxWidth:      '600px',
          }}
        >
          Let's build something{' '}
          <span className="text-gradient">impactful.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily:   'var(--font-body)',
            fontSize:     '16px',
            color:        'var(--muted)',
            lineHeight:   1.7,
            marginBottom: '64px',
            maxWidth:     '480px',
          }}
        >
          Open to research collaborations, startup ideas, internships,
          and anything interesting. If you're building something that matters — reach out.
        </motion.p>

        {/* Two column */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '48px',
          alignItems:          'start',
        }}>

          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass"
            style={{ padding: '36px', borderRadius: '20px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Name */}
              <div>
                <label style={{
                  display:       'block',
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--muted)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom:  '8px',
                }}>
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={{
                    width:        '100%',
                    padding:      '12px 16px',
                    borderRadius: '10px',
                    border:       errors.name
                      ? '1px solid #ff4444'
                      : '1px solid var(--border)',
                    background:   'var(--surface-2)',
                    color:        'var(--text)',
                    fontFamily:   'var(--font-body)',
                    fontSize:     '14px',
                    outline:      'none',
                    transition:   'border-color 0.2s ease',
                  }}
                  onFocus={e =>
                    (e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)')}
                  onBlur={e =>
                    (e.currentTarget.style.borderColor =
                      errors.name ? '#ff4444' : 'var(--border)')}
                />
                {errors.name && (
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize:   '11px',
                    color:      '#ff4444',
                    marginTop:  '6px',
                  }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label style={{
                  display:       'block',
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--muted)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom:  '8px',
                }}>
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={{
                    width:        '100%',
                    padding:      '12px 16px',
                    borderRadius: '10px',
                    border:       errors.email
                      ? '1px solid #ff4444'
                      : '1px solid var(--border)',
                    background:   'var(--surface-2)',
                    color:        'var(--text)',
                    fontFamily:   'var(--font-body)',
                    fontSize:     '14px',
                    outline:      'none',
                    transition:   'border-color 0.2s ease',
                  }}
                  onFocus={e =>
                    (e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)')}
                  onBlur={e =>
                    (e.currentTarget.style.borderColor =
                      errors.email ? '#ff4444' : 'var(--border)')}
                />
                {errors.email && (
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize:   '11px',
                    color:      '#ff4444',
                    marginTop:  '6px',
                  }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label style={{
                  display:       'block',
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--muted)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom:  '8px',
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are you building?"
                  rows={5}
                  style={{
                    width:        '100%',
                    padding:      '12px 16px',
                    borderRadius: '10px',
                    border:       errors.message
                      ? '1px solid #ff4444'
                      : '1px solid var(--border)',
                    background:   'var(--surface-2)',
                    color:        'var(--text)',
                    fontFamily:   'var(--font-body)',
                    fontSize:     '14px',
                    outline:      'none',
                    resize:       'vertical',
                    transition:   'border-color 0.2s ease',
                    minHeight:    '120px',
                  }}
                  onFocus={e =>
                    (e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)')}
                  onBlur={e =>
                    (e.currentTarget.style.borderColor =
                      errors.message ? '#ff4444' : 'var(--border)')}
                />
                {errors.message && (
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize:   '11px',
                    color:      '#ff4444',
                    marginTop:  '6px',
                  }}>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              ```
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleSubmit}
                                disabled={status === 'sending' || status === 'sent'}
                                style={{
                                  padding:        '14px 24px',
                                  borderRadius:   '12px',
                                  background:     status === 'sent'
                                    ? 'rgba(0,255,136,0.15)'
                                    : 'var(--accent)',
                                  color:          status === 'sent' ? 'var(--accent)' : '#000',
                                  fontFamily:     'var(--font-display)',
                                  fontSize:       '15px',
                                  fontWeight:     700,
                                  cursor:         status === 'idle' ? 'pointer' : 'default',
                                  display:        'flex',
                                  alignItems:     'center',
                                  justifyContent: 'center',
                                  gap:            '8px',
                                  transition:     'all 0.3s ease',
                                  border:         status === 'sent'
                                    ? '1px solid rgba(0,255,136,0.3)'
                                    : 'none',
                                }}
                              >
                {status === 'idle' && (
                  <><Send size={16} /> Send Message</>
                )}
                {status === 'sending' && (
                  <><Spinner /> Sending...</>
                )}
                {status === 'sent' && (
                  <><span>✓</span> Message Sent!</>
                )}
              </motion.button>

            </div>
          </motion.div>

          {/* Right — socials + info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >

            {/* Social cards */}
            {socials.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="glass"
                  style={{
                    padding:        '20px 24px',
                    borderRadius:   '14px',
                    display:        'flex',
                    alignItems:     'center',
                    gap:            '16px',
                    textDecoration: 'none',
                    border:         '1px solid var(--border)',
                    transition:     'border-color 0.2s ease',
                    cursor:         'pointer',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.borderColor = `${s.color}40`)}
                  onMouseLeave={e =>
                    (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div style={{
                    width:          '44px',
                    height:         '44px',
                    borderRadius:   '12px',
                    background:     `${s.color}12`,
                    border:         `1px solid ${s.color}25`,
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    color:          s.color,
                    flexShrink:     0,
                  }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily:   'var(--font-display)',
                      fontSize:     '15px',
                      fontWeight:   700,
                      color:        'var(--text)',
                      marginBottom: '2px',
                    }}>
                      {s.label}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize:   '12px',
                      color:      'var(--muted)',
                    }}>
                      {s.handle}
                    </p>
                  </div>
                  <ArrowRight size={16} color="var(--muted)" />
                </motion.a>
              )
            })}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass"
              style={{
                padding:      '24px',
                borderRadius: '14px',
                marginTop:    '8px',
                borderLeft:   '2px solid var(--accent)',
              }}
            >
              <div style={{
                display:      'flex',
                alignItems:   'center',
                gap:          '10px',
                marginBottom: '10px',
              }}>
                <span style={{
                  width:        '8px',
                  height:       '8px',
                  borderRadius: '50%',
                  background:   'var(--accent)',
                  boxShadow:    '0 0 8px var(--accent)',
                  display:      'block',
                  flexShrink:   0,
                }} />
                <span style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--accent)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}>
                  Available for opportunities
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '13px',
                color:      'var(--muted)',
                lineHeight: 1.6,
              }}>
                Open to internships, research roles, and founding team positions.
                Graduating mid-2026 — let's talk early.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
      style={{ animation: 'spin 0.8s linear infinite' }}>
      <circle cx="8" cy="8" r="6" stroke="currentColor"
        strokeWidth="2" strokeDasharray="28" strokeDashoffset="10"
        strokeLinecap="round" />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  )
}