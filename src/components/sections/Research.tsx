'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, Shield, ExternalLink } from 'lucide-react'
import { researchItems as items } from '@/data/research'

export default function Research() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const patents  = items.filter(i => i.type === 'Patent')
  const papers   = items.filter(i => i.type === 'Research')

  return (
    <section id="research" className="section" ref={ref}
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
          // research & patents
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(32px, 5vw, 52px)',
            fontWeight:    800,
            letterSpacing: '-1.5px',
            lineHeight:    1.1,
            marginBottom:  '16px',
          }}
        >
          Ideas worth{' '}
          <span className="text-gradient">protecting.</span>
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
            marginBottom: '72px',
            maxWidth:     '520px',
          }}
        >
          Research that ships and ideas that get filed.
          Three patents, two papers under review — all built around real problems.
        </motion.p>

        {/* Patents block */}
        <SubSection
          label="Patents Filed"
          count={patents.length}
          inView={inView}
          delay={0.25}
        />

        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap:                 '16px',
          marginBottom:        '64px',
        }}>
          {patents.map((item, i) => (
            <ResearchCard
              key={item.title}
              item={item}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Papers block */}
        <SubSection
          label="Research Papers"
          count={papers.length}
          inView={inView}
          delay={0.3}
        />

        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap:                 '16px',
        }}>
          {papers.map((item, i) => (
            <ResearchCard
              key={item.title}
              item={item}
              index={i + patents.length}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Sub-section label ─────────────────────────────────────────────
function SubSection({
  label, count, inView, delay,
}: {
  label:  string
  count:  number
  inView: boolean
  delay:  number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{
        display:      'flex',
        alignItems:   'center',
        gap:          '12px',
        marginBottom: '24px',
      }}
    >
      <p style={{
        fontFamily:    'var(--font-display)',
        fontSize:      '18px',
        fontWeight:    700,
        color:         'var(--text)',
      }}>
        {label}
      </p>
      <span style={{
        padding:      '2px 10px',
        borderRadius: '100px',
        background:   'rgba(0,255,136,0.08)',
        border:       '1px solid rgba(0,255,136,0.2)',
        fontFamily:   'var(--font-mono)',
        fontSize:     '11px',
        color:        'var(--accent)',
      }}>
        {count}
      </span>
      <div style={{
        flex:       1,
        height:     '1px',
        background: 'var(--border)',
      }} />
    </motion.div>
  )
}

// ── Card ──────────────────────────────────────────────────────────
function ResearchCard({
  item, index, inView,
}: {
  item:   typeof items[0]
  index:  number
  inView: boolean
}) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.3 + index * 0.08 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass"
      style={{
        padding:      '26px',
        borderRadius: '18px',
        border:       '1px solid var(--border)',
        position:     'relative',
        overflow:     'hidden',
        cursor:       'default',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position:      'absolute',
        inset:         0,
        background:    item.glow,
        opacity:       0.5,
        pointerEvents: 'none',
        borderRadius:  '18px',
      }} />

      {/* Top row */}
      <div style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        marginBottom:   '20px',
      }}>
        {/* Icon + type */}
        <div style={{
          display:        'flex',
          alignItems:     'center',
          gap:            '8px',
        }}>
          <div style={{
            width:          '36px',
            height:         '36px',
            borderRadius:   '10px',
            background:     `${item.color}12`,
            border:         `1px solid ${item.color}25`,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            color:          item.color,
          }}>
            <Icon size={16} />
          </div>
          <span style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '11px',
            color:         item.color,
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}>
            {item.type}
          </span>
        </div>

        {/* Tag + year */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            padding:       '3px 10px',
            borderRadius:  '100px',
            border:        `1px solid ${item.color}30`,
            fontFamily:    'var(--font-mono)',
            fontSize:      '9px',
            color:         item.color,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            background:    `${item.color}10`,
          }}>
            {item.tag}
          </span>
          <span style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '11px',
            color:         'var(--muted)',
          }}>
            {item.year}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily:   'var(--font-display)',
        fontSize:     '17px',
        fontWeight:   700,
        color:        'var(--text)',
        lineHeight:   1.3,
        marginBottom: '10px',
        letterSpacing:'-0.3px',
      }}>
        {item.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily:   'var(--font-body)',
        fontSize:     '13px',
        color:        'var(--muted)',
        lineHeight:   1.7,
        marginBottom: '20px',
      }}>
        {item.desc}
      </p>

      {/* Field tag */}
      <div style={{
        paddingTop:  '16px',
        borderTop:   '1px solid var(--border)',
        display:     'flex',
        alignItems:  'center',
        justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '10px',
          color:         'var(--muted)',
          letterSpacing: '0.5px',
        }}>
          {item.field}
        </span>
        <ExternalLink size={13} color="var(--muted)" />
      </div>

      {/* Bottom accent */}
      <div style={{
        position:     'absolute',
        bottom:       0,
        left:         0,
        right:        0,
        height:       '2px',
        background:   `linear-gradient(90deg, ${item.color}, transparent)`,
        borderRadius: '0 0 18px 18px',
      }} />
    </motion.div>
  )
}