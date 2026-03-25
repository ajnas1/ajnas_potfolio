
import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">Education, Certifications & Awards <span className="serif">.</span></h2>
          <p className="section-subtitle">
            Formal degrees, continued learning modules, and recognitions.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}
        >
          {/* Education */}
          <motion.div
            variants={cardVariants}
            className="bento-panel"
            style={{ padding: '2.5rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Degree</span>
              
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>Bachelor of Computer Applications (BCA)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: 'auto' }}>Mysore University | Online Program</p>
              
              <div style={{ marginTop: '2.5rem' }}>
                <span className="badge">
                  <span className="badge-dot"></span>
                  Currently Pursuing
                </span>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Awards */}
          <motion.div
            variants={cardVariants}
            className="bento-panel"
            style={{ padding: '2.5rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Certifications & Awards</span>

              <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <li style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.5 }}>
                  <span style={{ display: 'block', fontWeight: 600, color: 'var(--text-primary)' }}>Finalist — BDIC 1.0 (2025)</span>
                  <span style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Bhashini Domain Innovation Challenge, Digital India. Recognised for healthcare domain innovation.</span>
                </li>
                <li style={{ width: '100%', height: '1px', background: 'var(--border-color)' }}></li>
                <li style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.5 }}>
                  Edapt Technology Leadership Program
                </li>
                <li style={{ width: '100%', height: '1px', background: 'var(--border-color)' }}></li>
                <li style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.5 }}>
                  15-Day Data Structures and Algorithms Challenge
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
