'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedCursor() {
  const [pos,       setPos]       = useState({ x: -100, y: -100 })
  const [trail,     setTrail]     = useState({ x: -100, y: -100 })
  const [clicking,  setClicking]  = useState(false)
  const [hovering,  setHovering]  = useState(false)
  const [hidden,    setHidden]    = useState(false)
  const [isMobile,  setIsMobile]  = useState(false)
  const rafRef = useRef<number>()

  useEffect(() => {
    // Skip on mobile/touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true)
      return
    }

    let mx = -100, my = -100
    let tx = -100, ty = -100

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      setPos({ x: mx, y: my })

      // Check if hovering interactive element
      const el = document.elementFromPoint(mx, my)
      const isInteractive = el?.closest(
        'a, button, [role="button"], input, textarea, select, label'
      )
      setHovering(!!isInteractive)
    }

    const onDown  = () => setClicking(true)
    const onUp    = () => setClicking(false)
    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    // Smooth trail via RAF
    const animate = () => {
      tx += (mx - tx) * 0.12
      ty += (my - ty) * 0.12
      setTrail({ x: tx, y: ty })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    window.addEventListener('mousemove',  onMove)
    window.addEventListener('mousedown',  onDown)
    window.addEventListener('mouseup',    onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mousedown',  onDown)
      window.removeEventListener('mouseup',    onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Hide default cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      <AnimatePresence>
        {!hidden && (
          <>
            {/* Dot — snaps instantly */}
            <motion.div
              animate={{
                x:       pos.x - 4,
                y:       pos.y - 4,
                scale:   clicking ? 0.5 : 1,
                opacity: hidden ? 0 : 1,
              }}
              transition={{ duration: 0, type: 'tween' }}
              style={{
                position:     'fixed',
                top:          0,
                left:         0,
                width:        '8px',
                height:       '8px',
                borderRadius: '50%',
                background:   'var(--accent)',
                zIndex:       9999,
                pointerEvents:'none',
                boxShadow:    '0 0 6px var(--accent)',
              }}
            />

            {/* Ring — trails behind */}
            <motion.div
              animate={{
                x:       trail.x - (hovering ? 20 : 14),
                y:       trail.y - (hovering ? 20 : 14),
                scale:   clicking ? 0.7 : hovering ? 1.4 : 1,
                opacity: hidden ? 0 : hovering ? 0.6 : 0.35,
                borderColor: hovering ? 'var(--accent)' : 'rgba(255,255,255,0.5)',
              }}
              transition={{ duration: 0, type: 'tween' }}
              style={{
                position:     'fixed',
                top:          0,
                left:         0,
                width:        '28px',
                height:       '28px',
                borderRadius: '50%',
                border:       '1px solid rgba(255,255,255,0.5)',
                zIndex:       9998,
                pointerEvents:'none',
              }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}