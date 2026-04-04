'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = [
    'Initializing systems...',
    'Loading intelligence...',
    'Mounting components...',
    'Ready.',
  ]

  useEffect(() => {
    // Progress bar
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 18
      })
    }, 120)

    // Phase text
    const p1 = setTimeout(() => setPhase(1), 400)
    const p2 = setTimeout(() => setPhase(2), 900)
    const p3 = setTimeout(() => setPhase(3), 1400)

    // Hide
    const hide = setTimeout(() => setVisible(false), 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(p1)
      clearTimeout(p2)
      clearTimeout(p3)
      clearTimeout(hide)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position:       'fixed',
            inset:          0,
            zIndex:         1000,
            background:     'var(--bg)',
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            justifyContent: 'center',
            gap:            '32px',
          }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1   }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '48px',
              fontWeight:    800,
              letterSpacing: '-2px',
              lineHeight:    1,
              color:         'var(--text)',
            }}>
              BP<span style={{ color: 'var(--accent)' }}>.</span>
            </p>
          </motion.div>

          {/* Progress track */}
          <div style={{ width: '200px' }}>
            <div style={{
              height:       '2px',
              borderRadius: '1px',
              background:   'var(--surface-2)',
              overflow:     'hidden',
              marginBottom: '12px',
            }}>
              <motion.div
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
                style={{
                  height:     '100%',
                  background: 'var(--accent)',
                  borderRadius:'1px',
                  boxShadow:  '0 0 8px var(--accent)',
                }}
              />
            </div>

            {/* Phase text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={phase}
                initial={{ opacity: 0, y: 4  }}
                animate={{ opacity: 1, y: 0  }}
                exit={{ opacity: 0,    y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '11px',
                  color:         'var(--muted)',
                  letterSpacing: '1px',
                  textAlign:     'center',
                }}
              >
                {phases[phase]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}