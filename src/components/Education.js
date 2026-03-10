import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      {/* Background shape */}
      <div className="ambient-shape shape-1" style={{ position: 'absolute', bottom: '-10%', right: '-10%', filter: 'blur(150px)', zIndex: 0, opacity: 0.2 }}></div>

      <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent-1)', fontSize: '1.2rem', fontFamily: 'Outfit' }}>04.</span>
            <div style={{ height: '1px', width: '50px', background: 'var(--glass-border)' }}></div>
          </div>
          <h2 className="section-title">
            Education <span className="text-gradient">& Certs</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          {/* Education */}
          <motion.div
            variants={cardVariants}
            className="glass-panel"
            whileHover={{ scale: 1.02 }}
            style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden', borderRight: '10px solid var(--accent-1)' }}
          >
            <div style={{ position: 'absolute', right: '-10px', top: '10px', opacity: 0.03, transition: 'transform 0.5s', ':hover': { transform: 'scale(1.1) rotate(5deg)' } }}>
              <GraduationCap size={250} />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '16px', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '16px', color: 'var(--accent-1)' }}>
                <GraduationCap size={32} />
              </div>
              <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', fontFamily: 'Outfit' }}>Education</h3>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '0.02em' }}>Bachelor of Computer Applications (BCA)</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'Space Grotesk' }}>Mysore University | Online Program</p>
              
              <div style={{ 
                display: 'inline-block', 
                padding: '8px 20px', 
                background: 'transparent', 
                border: '1px solid var(--accent-1)',
                borderRadius: '100px', 
                color: 'var(--accent-1)', 
                fontSize: '0.9rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-1)', borderRadius: '50%', marginRight: '10px', boxShadow: '0 0 10px var(--accent-1)' }}></span>
                Currently Pursuing
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={cardVariants}
            className="glass-panel"
            whileHover={{ scale: 1.02 }}
            style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden', borderRight: '10px solid var(--accent-2)' }}
          >
            <div style={{ position: 'absolute', right: '-10px', top: '10px', opacity: 0.03 }}>
              <Award size={250} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '16px', background: 'rgba(112, 0, 255, 0.1)', borderRadius: '16px', color: 'var(--accent-2)' }}>
                <Award size={32} />
              </div>
              <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', fontFamily: 'Outfit' }}>Certifications & Training</h3>
            </div>

            <ul style={{ 
              listStyleType: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              <li style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--accent-2)', transform: 'rotate(45deg)' }}></span>
                Edapt Technology Leadership Program
              </li>
              <li style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--accent-2)', transform: 'rotate(45deg)' }}></span>
                15-Day Data Structures and Algorithms Challenge
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
