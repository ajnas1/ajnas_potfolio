import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Smartphone, Globe } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Oxygen',
      subtitle: 'Performant Web/Flutter App',
      points: [
        'Developed application prioritizing cross-platform capabilities.',
        'Resolved critical browser caching issues by implementing custom Service Workers.',
        'Fixed Chromium-based horizontal scrolling bugs for a seamless user experience.'
      ],
      tags: ['Flutter', 'Service Worker', 'Performance', 'Web'],
      icon: <Globe size={24} />
    },
    {
      title: 'Summary',
      subtitle: 'Transcription & Processing',
      points: [
        'Developed a feature-rich text field with HTML rendering capabilities.',
        'Implemented live transcription features utilizing JavaScript to process real-time audio data.',
        'Integrated seamlessly into the broader application architecture.'
      ],
      tags: ['Flutter', 'JavaScript', 'HTML', 'Live Transcription'],
      icon: <Smartphone size={24} />
    },
    {
      title: 'SharedLocker',
      subtitle: 'Secure Mobile Application',
      points: [
        'Designed and built a Flutter-based mobile application focusing on secure data access.',
        'Ensured intuitive UI/UX for seamless locker sharing and management.'
      ],
      tags: ['Flutter', 'Mobile App', 'UI/UX'],
      icon: <Smartphone size={24} />
    },
    {
      title: 'Diagnize',
      subtitle: 'Healthcare/Diagnostics',
      points: [
        'Developed mobile application using Flutter framework.',
        'Focused on responsive design and reliable performance.'
      ],
      tags: ['Flutter', 'Mobile App', 'Healthcare'],
      icon: <Smartphone size={24} />
    },
    {
      title: 'SellOps',
      subtitle: 'SaaS Platform',
      points: [
        'Designed backend architecture using Node.js and Express.js.',
        'Implemented secure authentication using JWT and Google OAuth 2.0.',
        'Deployed backend services on AWS, ensuring production readiness.'
      ],
      tags: ['Node.js', 'Express', 'PostgreSQL', 'AWS'],
      icon: <FolderGit2 size={24} />
    },
    {
      title: 'Hostel Management',
      subtitle: 'Multi-tenant architecture',
      points: [
        'Built multi-tenant backend architecture using Python (FastAPI).',
        'Implemented authentication, room allocation, payment tracking.',
        'Designed RESTful APIs integrated with PostgreSQL.'
      ],
      tags: ['Python', 'FastAPI', 'PostgreSQL'],
      icon: <FolderGit2 size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    },
    hover: {
      y: -15,
      scale: 1.02,
      rotateX: 10,
      rotateY: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      {/* Background shape */}
      <div className="ambient-shape shape-2" style={{ position: 'absolute', top: '10%', left: '-10%', filter: 'blur(150px)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent-1)', fontSize: '1.2rem', fontFamily: 'Outfit' }}>03.</span>
            <div style={{ height: '1px', width: '50px', background: 'var(--glass-border)' }}></div>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', perspective: '1000px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="glass-panel"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
                cursor: 'none' /* Custom cursors are cool for gaming/tech themes but let's just leave it pointer */
              }}
            >
              {/* Decorative radiant glow */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '5px',
                background: 'var(--gradient-accent)',
                opacity: 0.8
              }}></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', zIndex: 1 }}>
                <div style={{
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  color: 'var(--accent-1)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.1)'
                }}>
                  {project.icon}
                </div>
              </div>

              <div style={{ zIndex: 1, flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{project.subtitle}</p>

                <ul style={{ 
                  listStyleType: 'none', 
                  padding: 0, 
                  margin: '0 0 2rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem'
                }}>
                  {project.points.map((point, i) => (
                    <li key={i} style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '0.95rem',
                      position: 'relative',
                      paddingLeft: '20px',
                      lineHeight: 1.6
                    }}>
                      <span style={{
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '10px',
                        width: '6px',
                        height: '6px',
                        borderRadius: '1px',
                        background: 'var(--accent-2)',
                        transform: 'rotate(45deg)'
                      }}></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.8rem',
                marginTop: 'auto',
                zIndex: 1,
                paddingTop: '2rem',
                borderTop: '1px dashed rgba(255,255,255,0.1)'
              }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{
                    fontSize: '0.8rem',
                    color: 'var(--accent-1)',
                    background: 'rgba(0, 240, 255, 0.05)',
                    padding: '6px 14px',
                    borderRadius: '4px',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
