import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const drawLine = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  const experiences = [
    {
      title: 'Flutter Developer',
      company: 'Lifosys Digital Systems',
      date: 'Feb 2025 - Present',
      points: [
        'Designed scalable backend APIs using Python (FastAPI) for secure document management.',
        'Built APIs with robust request validation, authentication, and error handling.',
        'Integrated PostgreSQL and OpenSearch for advanced querying and performance optimization.',
        'Developed JWT-based secure access control across full-stack architecture.'
      ]
    },
    {
      title: 'Flutter Developer (Part-Time)',
      company: 'Trilia Solutions',
      date: 'Dec 2024 - Jan 2025',
      points: [
        'Developed seamless mobile applications using the Flutter framework.',
        'Implemented advanced state management and real-time backend synchronization.'
      ]
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Edapt',
      date: 'Apr 2024 - Dec 2024',
      points: [
        'Built full-stack applications with Flutter (Frontend) and Node.js (Backend).',
        'Learned robust routing, middleware, and API structure using Express.js.',
        'Integrated Firebase Authentication and Firestore for state and database management.'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent-1)', fontSize: '1.2rem', fontFamily: 'Outfit' }}>02.</span>
            <div style={{ height: '1px', width: '50px', background: 'var(--glass-border)' }}></div>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative', marginTop: '4rem' }}>
          {/* Animated SVG Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'var(--glass-border)',
            zIndex: 0
          }}></div>
          
          <motion.div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            height: drawLine,
            width: '2px',
            background: 'var(--gradient-accent)',
            boxShadow: 'var(--shadow-glow)',
            zIndex: 1
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, type: 'spring' }}
                style={{ position: 'relative', paddingLeft: '80px' }}
              >
                {/* Timeline node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                  style={{
                    position: 'absolute',
                    left: '11px',
                    top: '20px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'var(--bg-color)',
                    border: '4px solid var(--accent-1)',
                    zIndex: 2,
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.5)'
                  }}
                />

                <motion.div 
                  className="glass-panel" 
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.02)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ padding: '3rem', borderLeft: '1px solid var(--accent-2)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem', gap: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>{exp.title}</h3>
                      <p style={{ color: 'var(--accent-1)', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{exp.company}</p>
                    </div>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      padding: '8px 16px', 
                      background: 'rgba(255,255,255,0.03)', 
                      borderRadius: '100px',
                      color: 'var(--text-secondary)',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 500,
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                      {exp.date}
                    </span>
                  </div>

                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: 0, 
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    {exp.points.map((point, i) => (
                      <li key={i} style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '1.05rem',
                        position: 'relative',
                        paddingLeft: '24px',
                        lineHeight: 1.6
                      }}>
                        <span style={{
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '12px',
                          width: '8px',
                          height: '2px',
                          background: 'var(--accent-2)'
                        }}></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
