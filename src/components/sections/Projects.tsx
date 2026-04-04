'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '@/data/projects'
import ProjectModal from '@/components/ui/ProjectModal'
import { ArrowUpRight } from 'lucide-react'

const FILTERS = ['All', 'Startup', 'ML Systems', 'Research', 'Patent', 'Full-Stack']

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [filter,   setFilter]   = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section" ref={ref}
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
          // projects
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
          Things I've{' '}
          <span className="text-gradient">shipped.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily:   'var(--font-body)',
            fontSize:     '16px',
            color:        'var(--muted)',
            marginBottom: '40px',
          }}
        >
          Click any project to see the full breakdown — problem, architecture, and impact.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            display:    'flex',
            gap:        '8px',
            flexWrap:   'wrap',
            marginBottom:'48px',
          }}
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding:      '7px 18px',
                borderRadius: '100px',
                border:       filter === f
                  ? '1px solid rgba(0,255,136,0.4)'
                  : '1px solid var(--border)',
                background:   filter === f
                  ? 'rgba(0,255,136,0.08)'
                  : 'transparent',
                color:        filter === f ? 'var(--accent)' : 'var(--muted)',
                fontFamily:   'var(--font-mono)',
                fontSize:     '12px',
                cursor:       'pointer',
                transition:   'all 0.2s ease',
                letterSpacing:'0.5px',
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap:                 '20px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
                onClick={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onCloseAction={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({
  project, index, inView, onClick,
}: {
  project:  Project
  index:    number
  inView:   boolean
  onClick:  () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1,  y: 0  }}
      exit={{ opacity: 0,    scale: 0.95 }}
      transition={{ duration: 0.5, delay: inView ? index * 0.08 : 0 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass"
      style={{
        padding:      '28px',
        borderRadius: '20px',
        cursor:       'pointer',
        border:       hovered
          ? `1px solid ${project.color}40`
          : '1px solid var(--border)',
        position:     'relative',
        overflow:     'hidden',
        transition:   'border-color 0.3s ease',
      }}
    >
      {/* Glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position:      'absolute',
          inset:         0,
          background:    project.glow,
          pointerEvents: 'none',
          borderRadius:  '20px',
        }}
      />

      {/* Top row */}
      <div style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'flex-start',
        marginBottom:   '16px',
      }}>
        <span style={{
          padding:       '4px 12px',
          borderRadius:  '100px',
          border:        `1px solid ${project.color}30`,
          fontFamily:    'var(--font-mono)',
          fontSize:      '10px',
          color:         project.color,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          background:    `${project.color}10`,
        }}>
          {project.category}
        </span>

        <motion.div
          animate={{
            opacity:   hovered ? 1 : 0.3,
            rotate:    hovered ? 0 : -45,
            color:     hovered ? project.color : 'var(--muted)',
          }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily:    'var(--font-display)',
        fontSize:      '22px',
        fontWeight:    800,
        letterSpacing: '-0.5px',
        marginBottom:  '8px',
        color:         'var(--text)',
        transition:    'color 0.2s ease',
      }}>
        {project.title}
      </h3>

      {/* Tagline */}
      <p style={{
        fontFamily:   'var(--font-body)',
        fontSize:     '14px',
        color:        'var(--muted)',
        lineHeight:   1.6,
        marginBottom: '24px',
      }}>
        {project.tagline}
      </p>

      {/* Stack tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.stack.map(tech => (
          <span key={tech} style={{
            padding:      '3px 10px',
            borderRadius: '6px',
            background:   'var(--surface-2)',
            border:       '1px solid var(--border)',
            fontFamily:   'var(--font-mono)',
            fontSize:     '10px',
            color:        'var(--muted)',
            letterSpacing:'0.3px',
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom accent */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position:        'absolute',
          bottom:          0,
          left:            0,
          right:           0,
          height:          '2px',
          background:      `linear-gradient(90deg, ${project.color}, transparent)`,
          transformOrigin: 'left',
          borderRadius:    '0 0 20px 20px',
        }}
      />
    </motion.div>
  )
}