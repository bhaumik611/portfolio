'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Users, Zap, ExternalLink } from 'lucide-react'
import { experiences } from '@/data/experience'

export default function Experience() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section" ref={ref}
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
          // experience
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
            marginBottom:  '80px',
          }}
        >
          Where I've{' '}
          <span className="text-gradient">created impact.</span>
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>

          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
            style={{
              position:        'absolute',
              left:            '23px',
              top:             0,
              bottom:          0,
              width:           '1px',
              background:      'linear-gradient(180deg, var(--accent), var(--accent-2), transparent)',
              transformOrigin: 'top',
            }}
          />

          {/* Entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.company}
                exp={exp}
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  exp, index, inView,
}: {
  exp: typeof experiences[0]
  index: number
  inView: boolean
}) {
  const Icon = exp.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
      style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}
    >
      {/* Timeline node */}
      <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: 0.4 + index * 0.15,
            type: 'spring',
            stiffness: 300,
          }}
          style={{
            width:          '48px',
            height:         '48px',
            borderRadius:   '14px',
            background:     exp.glow,
            border:         `1px solid ${exp.color}40`,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            color:          exp.color,
            boxShadow:      `0 0 20px ${exp.color}20`,
          }}
        >
          <Icon size={20} />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="glass"
        style={{
          flex:         1,
          padding:      '28px 32px',
          borderRadius: '20px',
          border:       '1px solid var(--border)',
          position:     'relative',
          overflow:     'hidden',
        }}
      >
        {/* Top accent */}
        <div style={{
          position:   'absolute',
          top:        0,
          left:       0,
          right:      0,
          height:     '2px',
          background: `linear-gradient(90deg, ${exp.color}, transparent)`,
        }} />

        {/* Header */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'flex-start',
          flexWrap:       'wrap',
          gap:            '12px',
          marginBottom:   '16px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
              <h3 style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '22px',
                fontWeight:    800,
                color:         'var(--text)',
                letterSpacing: '-0.5px',
              }}>
                {exp.role}
              </h3>
              
              <a
                href={exp.link}
                style={{
                  color:  'var(--muted)',
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <ExternalLink size={14} />
              </a>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '15px',
              color:      exp.color,
              fontWeight: 600,
            }}>
              {exp.company}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
            <span style={{
              padding:       '4px 12px',
              borderRadius:  '100px',
              border:        `1px solid ${exp.color}30`,
              fontFamily:    'var(--font-mono)',
              fontSize:      '10px',
              color:         exp.color,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              background:    `${exp.color}10`,
            }}>
              {exp.type}
            </span>
            <span style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '11px',
              color:         'var(--muted)',
              letterSpacing: '0.5px',
            }}>
              {exp.period}
            </span>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontFamily:   'var(--font-body)',
          fontSize:     '14px',
          color:        'var(--muted)',
          lineHeight:   1.75,
          marginBottom: '20px',
        }}>
          {exp.desc}
        </p>

        {/* Points */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {exp.points.map((point, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.15 + j * 0.06 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
            >
              <span style={{
                width:        '5px',
                height:       '5px',
                borderRadius: '50%',
                background:   exp.color,
                marginTop:    '7px',
                flexShrink:   0,
                boxShadow:    `0 0 6px ${exp.color}`,
              }} />
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '13px',
                color:      'var(--muted)',
                lineHeight: 1.6,
              }}>
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}