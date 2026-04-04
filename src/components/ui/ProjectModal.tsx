'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, Github, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react'
import type { Project } from '@/data/projects'

export default function ProjectModal({
  project,
  onCloseAction,
}: {
  project: Project
  onCloseAction: () => void
}) {
  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Esc to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseAction()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onCloseAction])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onCloseAction}
        style={{
          position:       'fixed',
          inset:          0,
          overflow:       'hidden',
          background:     'rgba(0,0,0,0.85)',
          zIndex:         200,
          backdropFilter: 'blur(8px)',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          padding:        '24px',
        }}
      >
        {/* Modal — stop click propagation */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          exit={{ opacity: 0,    y: 20, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          style={{
            width:        'min(760px, 100%)',
            maxHeight:    '88vh',
            overflowY:    'auto',
            zIndex:       201,
            background:   'var(--bg)',
            borderRadius: '24px',
            border:       `1px solid ${project.color}30`,
            scrollbarWidth: 'thin',
            scrollbarColor: `${project.color} transparent`,
            position:     'relative',
          }}
        >
        {/* Top accent bar */}
        <div style={{
          height:     '3px',
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
          borderRadius: '24px 24px 0 0',
        }} />

        {/* GIF / Preview banner */}
        <div style={{
          width:           '100%',
          height:          '220px',
          background:      `linear-gradient(135deg, ${project.color}10, ${project.glow})`,
          borderBottom:    `1px solid ${project.color}20`,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          position:        'relative',
          overflow:        'hidden',
        }}>
          {/* Animated grid bg */}
          <div style={{
            position:        'absolute',
            inset:           0,
            backgroundImage: `
              linear-gradient(${project.color}15 1px, transparent 1px),
              linear-gradient(90deg, ${project.color}15 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
            opacity:        0.4,
          }} />

          {/* Center content */}
          <div style={{
            position:  'relative',
            textAlign: 'center',
            zIndex:    1,
          }}>
            <div style={{
              width:          '64px',
              height:         '64px',
              borderRadius:   '18px',
              background:     `${project.color}20`,
              border:         `1px solid ${project.color}40`,
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              margin:         '0 auto 12px',
              fontSize:       '28px',
            }}>
              🚀
            </div>
            <p style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '11px',
              color:         project.color,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              {project.title}
            </p>
          </div>
        </div>

        <div style={{ padding: '36px' }}>

          {/* Header */}
          <div style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'flex-start',
            marginBottom:   '28px',
          }}>
            <div>
              <span style={{
                display:       'inline-block',
                padding:       '3px 12px',
                borderRadius:  '100px',
                border:        `1px solid ${project.color}30`,
                fontFamily:    'var(--font-mono)',
                fontSize:      '10px',
                color:         project.color,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                background:    `${project.color}10`,
                marginBottom:  '12px',
              }}>
                {project.category}
              </span>
              <h2 style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(24px, 4vw, 36px)',
                fontWeight:    800,
                letterSpacing: '-1px',
                lineHeight:    1.1,
                color:         'var(--text)',
                marginBottom:  '8px',
              }}>
                {project.title}
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '15px',
                color:      'var(--muted)',
              }}>
                {project.tagline}
              </p>
            </div>

            {/* Close */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onCloseAction}
              style={{
                width:          '40px',
                height:         '40px',
                borderRadius:   '12px',
                border:         '1px solid var(--border)',
                background:     'var(--surface-2)',
                color:          'var(--muted)',
                cursor:         'pointer',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                flexShrink:     0,
                marginLeft:     '16px',
              }}
            >
              <X size={16} />
            </motion.button>
          </div>

          {/* Stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
            {project.stack.map(tech => (
              <span key={tech} style={{
                padding:      '5px 14px',
                borderRadius: '8px',
                background:   'var(--surface-2)',
                border:       '1px solid var(--border)',
                fontFamily:   'var(--font-mono)',
                fontSize:     '12px',
                color:        'var(--muted)',
              }}>
                {tech}
              </span>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '32px' }} />

          {/* Description */}
          <ModalSection label="Overview">
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '15px',
              color:      'var(--muted)',
              lineHeight: 1.8,
            }}>
              {project.description}
            </p>
          </ModalSection>

          {/* Problem */}
          <ModalSection label="Problem Statement">
            <div style={{
              padding:      '20px',
              borderRadius: '12px',
              border:       '1px solid rgba(255,100,100,0.15)',
              background:   'rgba(255,100,100,0.04)',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '14px',
                color:      'var(--muted)',
                lineHeight: 1.8,
              }}>
                {project.problem}
              </p>
            </div>
          </ModalSection>

          {/* Approach */}
          <ModalSection label="Approach & Architecture">
            <div style={{
              padding:      '20px',
              borderRadius: '12px',
              border:       `1px solid ${project.color}20`,
              background:   `${project.color}05`,
            }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '14px',
                color:      'var(--muted)',
                lineHeight: 1.8,
              }}>
                {project.approach}
              </p>
            </div>
          </ModalSection>

          {/* Achievements */}
          <ModalSection label="Key Achievements">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                >
                  <CheckCircle
                    size={16}
                    style={{ color: project.color, marginTop: '2px', flexShrink: 0 }}
                  />
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '14px',
                    color:      'var(--muted)',
                    lineHeight: 1.6,
                  }}>
                    {a}
                  </p>
                </motion.div>
              ))}
            </div>
          </ModalSection>

          {/* Challenges */}
          <ModalSection label="Challenges Faced">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.challenges.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <AlertCircle
                    size={16}
                    style={{ color: '#f59e0b', marginTop: '2px', flexShrink: 0 }}
                  />
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '14px',
                    color:      'var(--muted)',
                    lineHeight: 1.6,
                  }}>
                    {c}
                  </p>
                </div>
              ))}
            </div>
          </ModalSection>

          {/* Links */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display:        'flex',
                alignItems:     'center',
                gap:            '8px',
                padding:        '12px 22px',
                borderRadius:   '12px',
                border:         '1px solid var(--border)',
                background:     'var(--surface-2)',
                color:          'var(--text)',
                fontFamily:     'var(--font-display)',
                fontSize:       '14px',
                fontWeight:     600,
                textDecoration: 'none',
                cursor:         'pointer',
              }}
            >
              <Github size={16} /> View Code
            </motion.a>

            {project.demo !== '#' && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display:        'flex',
                  alignItems:     'center',
                  gap:            '8px',
                  padding:        '12px 22px',
                  borderRadius:   '12px',
                  border:         'none',
                  background:     project.color,
                  color:          '#000',
                  fontFamily:     'var(--font-display)',
                  fontSize:       '14px',
                  fontWeight:     700,
                  textDecoration: 'none',
                  cursor:         'pointer',
                }}
              >
                <ExternalLink size={16} /> Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
    </>
  )
}

function ModalSection({
  label,
  children,
}: {
  label:    string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <p style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      '11px',
        color:         'var(--accent)',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom:  '12px',
      }}>
        {label}
      </p>
      {children}
    </div>
  )
}