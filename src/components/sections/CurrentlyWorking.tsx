'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CurrentlyWorking() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const capabilities = [
    'Query pipeline that retrieves relevant context and generates grounded responses',
    'Structured outputs with confidence scoring, source attribution, and hallucination risk estimation',
    'Document ingestion pipeline supporting multi-file uploads and preprocessing for retrieval',
  ]

  const engineering = [
    'Improving retrieval quality using better ranking and chunking strategies',
    'Exploring methods to quantify and reduce hallucinations in LLM responses',
    'Optimizing system performance for handling larger document collections',
  ]

  const whyProject = [
    'Most LLM systems generate answers without verifying correctness',
    'This project focuses on making AI responses traceable, explainable, and trustworthy',
  ]

  return (
    <section id="currently-working" className="section" ref={ref}
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
          // currently working on
        </motion.p>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >

          {/* Project title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(32px, 5vw, 48px)',
                fontWeight:    800,
                letterSpacing: '-1.5px',
                lineHeight:    1.1,
                marginBottom:  '12px',
              }}
            >
              Retrieval-Augmented{' '}
              <span className="text-gradient">Generation (RAG)</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                fontFamily:   'var(--font-body)',
                fontSize:     '16px',
                color:        'var(--muted)',
                marginBottom: '32px',
              }}
            >
              Developing a robust backend using FastAPI that enables reliable question answering over user-provided documents.
            </motion.p>

            {/* Core Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ marginBottom: '32px' }}
            >
              <p style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '12px',
                color:         'var(--accent)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom:  '14px',
                fontWeight:    600,
              }}>
                🔹 Core Capabilities
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {capabilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.05 }}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '15px',
                      color:      'var(--text)',
                      lineHeight: 1.6,
                      marginBottom: '10px',
                      paddingLeft: '20px',
                      position:   'relative',
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left:     0,
                      color:    'var(--accent)',
                    }}>
                      •
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Engineering Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ marginBottom: '32px' }}
            >
              <p style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '12px',
                color:         'var(--accent)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom:  '14px',
                fontWeight:    600,
              }}>
                🔹 Engineering Focus
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {engineering.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.05 }}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '15px',
                      color:      'var(--text)',
                      lineHeight: 1.6,
                      marginBottom: '10px',
                      paddingLeft: '20px',
                      position:   'relative',
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left:     0,
                      color:    'var(--accent)',
                    }}>
                      •
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Why This Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass"
              style={{
                padding:      '24px',
                borderRadius: '16px',
                borderLeft:   '2px solid var(--accent)',
              }}
            >
              <p style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '12px',
                color:         'var(--accent)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom:  '14px',
                fontWeight:    600,
              }}>
                🎯 Why This Project
              </p>
              {whyProject.map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.65 + i * 0.05 }}
                  style={{
                    fontFamily:   'var(--font-body)',
                    fontSize:     '15px',
                    color:        i === 0 ? 'var(--text)' : 'var(--muted)',
                    lineHeight:   1.7,
                    marginBottom: i < whyProject.length - 1 ? '12px' : 0,
                  }}
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>

          </motion.div>

        </div>

    </section>
  )
}