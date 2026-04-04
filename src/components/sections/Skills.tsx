'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { categories } from '@/data/skills'

export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [active, setActive] = useState(categories[0].id)

  const current = categories.find(c => c.id === active)!

  return (
    <section id="skills" className="section" ref={ref}
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
          // skills
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
          What I work{' '}
          <span className="text-gradient">with.</span>
        </motion.h2>

        {/* Layout */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                 '40px',
          alignItems:          'start',
        }}>

          {/* Left — category tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            {categories.map((cat, i) => {
              const isActive = cat.id === active
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  style={{
                    display:     'flex',
                    alignItems:  'center',
                    gap:         '14px',
                    padding:     '18px 22px',
                    borderRadius:'14px',
                    border:      isActive
                      ? `1px solid ${cat.color}40`
                      : '1px solid var(--border)',
                    background:  isActive
                      ? `${cat.color}08`
                      : 'transparent',
                    cursor:      'pointer',
                    textAlign:   'left',
                    transition:  'all 0.25s ease',
                    position:    'relative',
                    overflow:    'hidden',
                  }}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-bar"
                      style={{
                        position:     'absolute',
                        left:         0,
                        top:          '20%',
                        bottom:       '20%',
                        width:        '3px',
                        background:   cat.color,
                        borderRadius: '0 2px 2px 0',
                        boxShadow:    `0 0 10px ${cat.color}`,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Tag */}
                  <span style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '11px',
                    color:         isActive ? cat.color : 'var(--muted)',
                    letterSpacing: '1px',
                    transition:    'color 0.2s ease',
                  }}>
                    {cat.tag}
                  </span>

                  {/* Label */}
                  <span style={{
                    fontFamily:  'var(--font-display)',
                    fontSize:    '17px',
                    fontWeight:  700,
                    color:       isActive ? 'var(--text)' : 'var(--muted)',
                    transition:  'color 0.2s ease',
                    letterSpacing: '-0.3px',
                  }}>
                    {cat.label}
                  </span>

                  {/* Count pill */}
                  <span style={{
                    marginLeft:   'auto',
                    padding:      '2px 8px',
                    borderRadius: '100px',
                    background:   isActive ? `${cat.color}15` : 'var(--surface-2)',
                    fontFamily:   'var(--font-mono)',
                    fontSize:     '11px',
                    color:        isActive ? cat.color : 'var(--muted)',
                    transition:   'all 0.2s ease',
                  }}>
                    {cat.skills.length}
                  </span>
                </motion.button>
              )
            })}

            {/* Summary card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass"
              style={{
                padding:      '20px',
                borderRadius: '14px',
                marginTop:    '8px',
                borderLeft:   '2px solid var(--accent)',
              }}
            >
              <p style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '10px',
                color:         'var(--accent)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom:  '8px',
              }}>
                Stack depth
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '13px',
                color:      'var(--muted)',
                lineHeight: 1.6,
              }}>
                {categories.reduce((acc, c) => acc + c.skills.length, 0)}+ technologies
                across {categories.length} domains — from model training
                to production deployment.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — skill bars */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0,   x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
            >
              {current.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={i}
                  color={current.color}
                  inView={inView}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function SkillBar({
  skill, index, color, inView,
}: {
  skill:  { name: string; level: number; note: string }
  index:  number
  color:  string
  inView: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1,  y: 0  }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass"
      style={{
        padding:      '18px 22px',
        borderRadius: '12px',
        border:       hovered
          ? `1px solid ${color}30`
          : '1px solid var(--border)',
        transition:   'border-color 0.2s ease',
        cursor:       'default',
      }}
    >
      {/* Name + level */}
      <div style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        marginBottom:   '10px',
      }}>
        <span style={{
          fontFamily:  'var(--font-display)',
          fontSize:    '15px',
          fontWeight:  600,
          color:       hovered ? 'var(--text)' : 'var(--text)',
          letterSpacing: '-0.2px',
        }}>
          {skill.name}
        </span>
        <span style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '12px',
          color:         hovered ? color : 'var(--muted)',
          transition:    'color 0.2s ease',
          letterSpacing: '0.5px',
        }}>
          {skill.level}%
        </span>
      </div>

      {/* Bar track */}
      <div style={{
        height:       '4px',
        borderRadius: '2px',
        background:   'var(--surface-2)',
        overflow:     'hidden',
        marginBottom: hovered ? '10px' : '0',
        transition:   'margin 0.2s ease',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height:       '100%',
            borderRadius: '2px',
            background:   `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow:    hovered ? `0 0 8px ${color}60` : 'none',
            transition:   'box-shadow 0.2s ease',
          }}
        />
      </div>

      {/* Note on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0,   height: 0     }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily:  'var(--font-mono)',
              fontSize:    '11px',
              color:       'var(--muted)',
              letterSpacing:'0.3px',
              overflow:    'hidden',
            }}
          >
            → {skill.note}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}