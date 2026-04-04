'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '8.33', label: 'CGPA', suffix: '' },
  { value: '3',    label: 'Patents Filed', suffix: '+' },
  { value: '85',   label: 'Teams Beaten', suffix: '+' },
  { value: '2',    label: 'Startups Built', suffix: '' },
]

const tags = [
  'Machine Learning', 'NLP', 'Full-Stack', 'Systems Design',
  'Research', 'Patents', 'LLMs', 'Startups',
]

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section" ref={ref}
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
            marginBottom:  '24px',
          }}
        >
          // about me
        </motion.p>

        {/* Two column layout */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '80px',
          alignItems:          'start',
        }}>

          {/* Left — narrative */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(32px, 5vw, 52px)',
                fontWeight:    800,
                lineHeight:    1.1,
                letterSpacing: '-1.5px',
                marginBottom:  '32px',
              }}
            >
              Not just a student.{' '}
              <span className="text-gradient">A builder.</span>
            </motion.h2>

            {[
              `I'm Bhaumik — a Computer Engineering student at PDEU, Gandhinagar, graduating in 2026. But honestly, the degree is just the backdrop. What actually defines me is what I've been building on the side.`,
              `I co-founded Tatvam AI, an LLM startup focused on making AI actually work for Indian languages — not as a side project, but as a real product with real users. I've filed 3 patents, led a 500+ member finance club, and shipped systems ranging from multi-model intent routers to GNN-based materials science pipelines.`,
              `My obsession sits at the intersection of ML depth and systems thinking. I don't just train models — I architect the infrastructure around them, the APIs on top of them, and the products that make them useful. Research, engineering, and product — I refuse to pick just one.`,
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     '16px',
                  lineHeight:   1.8,
                  color:        i === 0 ? 'var(--text)' : 'var(--muted)',
                  marginBottom: '20px',
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}
            >
              {tags.map(tag => (
                <span key={tag} style={{
                  padding:      '5px 14px',
                  borderRadius: '100px',
                  border:       '1px solid var(--border)',
                  fontFamily:   'var(--font-mono)',
                  fontSize:     '11px',
                  color:        'var(--muted)',
                  background:   'var(--surface)',
                  letterSpacing:'0.5px',
                }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats + visual */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                display:             'grid',
                gridTemplateColumns: '1fr 1fr',
                gap:                 '16px',
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="glass"
                  style={{
                    padding:      '28px 24px',
                    borderRadius: '16px',
                    position:     'relative',
                    overflow:     'hidden',
                  }}
                >
                  {/* Glow dot */}
                  <div style={{
                    position:     'absolute',
                    top:          '12px',
                    right:        '12px',
                    width:        '6px',
                    height:       '6px',
                    borderRadius: '50%',
                    background:   'var(--accent)',
                    boxShadow:    '0 0 8px var(--accent)',
                  }} />

                  <p style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '40px',
                    fontWeight:    800,
                    color:         'var(--text)',
                    lineHeight:    1,
                    marginBottom:  '8px',
                    letterSpacing: '-1px',
                  }}>
                    {stat.value}
                    <span style={{ color: 'var(--accent)', fontSize: '28px' }}>
                      {stat.suffix}
                    </span>
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize:   '11px',
                    color:      'var(--muted)',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Currently building card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="glass"
              style={{
                padding:      '24px',
                borderRadius: '16px',
                borderLeft:   '2px solid var(--accent)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                {/* Pulse dot */}
                <span style={{ position: 'relative', display: 'inline-flex' }}>
                  <span style={{
                    width: '8px', height: '8px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'block',
                  }} />
                  <span style={{
                    position: 'absolute', inset: 0,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                    opacity: 0.4,
                  }} />
                </span>
                <span style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--accent)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}>
                  Currently Building
                </span>
              </div>

              <p style={{
                fontFamily:   'var(--font-display)',
                fontSize:     '18px',
                fontWeight:   700,
                marginBottom: '6px',
              }}>
                Adaptive RAG Evaluation Framework
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '13px',
                color:      'var(--muted)',
                lineHeight: 1.6,
              }}>
                Comparing Naive RAG, HyDE, Re-ranking & Multi-query strategies
                with LLM-as-judge scoring. FastAPI + Next.js + Ollama.
              </p>
            </motion.div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="glass"
              style={{ padding: '24px', borderRadius: '16px' }}
            >
              <p style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '11px',
                color:         'var(--muted)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom:  '12px',
              }}>
                Education
              </p>
              <p style={{
                fontFamily:   'var(--font-display)',
                fontSize:     '16px',
                fontWeight:   700,
                marginBottom: '4px',
              }}>
                B.Tech Computer Engineering
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '14px',
                color:      'var(--muted)',
              }}>
                Pandit Deendayal Energy University, Gandhinagar
              </p>
              <div style={{
                display:    'flex',
                gap:        '16px',
                marginTop:  '12px',
              }}>
                {[
                  { k: 'Batch', v: '2026' },
                  { k: 'CGPA',  v: '8.33' },
                ].map(({ k, v }) => (
                  <div key={k}>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize:   '10px',
                      color:      'var(--muted)',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}>{k}</p>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize:   '18px',
                      fontWeight: 700,
                      color:      'var(--accent)',
                    }}>{v}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  )
}