'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Star, Zap, Award } from 'lucide-react'
import { achievements } from '@/data/achievements'

export default function Achievements() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="section" ref={ref}
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
          // achievements
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
            marginBottom:  '64px',
          }}
        >
          Wins that{' '}
          <span className="text-gradient">matter.</span>
        </motion.h2>

        {/* Cards grid */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                 '20px',
        }}>
          {achievements.map((a, i) => (
            <AchievementCard key={a.title} item={a} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementCard({
  item, index, inView,
}: {
  item: typeof achievements[0]
  index: number
  inView: boolean
}) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass"
      style={{
        padding:      '32px',
        borderRadius: '20px',
        position:     'relative',
        overflow:     'hidden',
        cursor:       'default',
        border:       '1px solid var(--border)',
      }}
    >
      {/* Glow bg on hover handled via JS */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: item.glow,
        opacity:    0.4,
        borderRadius: '20px',
        pointerEvents: 'none',
      }} />

      {/* Top row */}
      <div style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'flex-start',
        marginBottom:   '24px',
      }}>
        {/* Icon */}
        <div style={{
          width:          '48px',
          height:         '48px',
          borderRadius:   '14px',
          background:     'rgba(255,255,255,0.04)',
          border:         `1px solid ${item.color}30`,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          color:          item.color,
          flexShrink:     0,
        }}>
          <Icon size={22} />
        </div>

        {/* Tag badge */}
        <span style={{
          padding:       '4px 12px',
          borderRadius:  '100px',
          border:        `1px solid ${item.color}40`,
          fontFamily:    'var(--font-mono)',
          fontSize:      '10px',
          color:         item.color,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          background:    `${item.color}10`,
        }}>
          {item.tag}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily:   'var(--font-display)',
        fontSize:     '20px',
        fontWeight:   700,
        marginBottom: '12px',
        lineHeight:   1.2,
        color:        'var(--text)',
      }}>
        {item.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily:   'var(--font-body)',
        fontSize:     '14px',
        color:        'var(--muted)',
        lineHeight:   1.7,
        marginBottom: '28px',
      }}>
        {item.desc}
      </p>

      {/* Bottom metric */}
      <div style={{
        paddingTop:  '20px',
        borderTop:   '1px solid var(--border)',
        display:     'flex',
        alignItems:  'baseline',
        gap:         '8px',
      }}>
        <span style={{
          fontFamily:    'var(--font-display)',
          fontSize:      '32px',
          fontWeight:    800,
          color:         item.color,
          letterSpacing: '-1px',
          lineHeight:    1,
        }}>
          {item.metric}
        </span>
        <span style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '11px',
          color:         'var(--muted)',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          {item.metricLabel}
        </span>
      </div>

      {/* Corner accent line */}
      <div style={{
        position:     'absolute',
        bottom:       0,
        left:         0,
        right:        0,
        height:       '2px',
        background:   `linear-gradient(90deg, ${item.color}, transparent)`,
        borderRadius: '0 0 20px 20px',
      }} />
    </motion.div>
  )
}