import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Flutter Developer',
      company: 'Lifosys Digital Systems',
      date: 'Feb 2025 - Present',
      points: [
        'Developed healthcare mobile applications supporting hospital workflows and patient management systems.',
        'Built modules for pharmacy management, appointment booking, EMR records, laboratory workflows, and insurance processing.',
        'Integrated OpenSearch to power fast, scalable search across patient records, medical data, and healthcare workflows.',
        'Integrated secure backend APIs to manage real-time healthcare data and medical records.',
        'Collaborated with backend teams to optimise application performance and data synchronisation.',
        'Product recognised as a Finalist in the Bhashini Domain Innovation Challenge (BDIC 1.0), Digital India.'
      ]
    },
    {
      title: 'Flutter Developer (Part-time)',
      company: 'Trilia Solutions',
      date: 'Dec 2024 - Jan 2025',
      points: [
        'Developed cross-platform mobile applications using Flutter for client-facing products.',
        'Integrated backend APIs and implemented responsive user interfaces.',
        'Collaborated with designers and backend engineers to deliver scalable, production-ready applications.'
      ]
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Edapt',
      date: 'Apr 2024 - Dec 2024',
      points: [
        'Developed full-stack applications using Flutter (frontend) and Node.js (backend).',
        'Built RESTful APIs with JWT authentication and secure data handling.',
        'Implemented state management using Provider and BLoC architecture.',
        'Integrated Firebase services including Authentication, Firestore, and Cloud Functions.'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">Experience <span className="serif">.</span></h2>
          <p className="section-subtitle">
            Professional journey building complex software solutions across startups and digital agencies.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '3rem' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="exp-grid"
              style={{ 
                borderTop: '1px solid var(--border-color)',
                paddingTop: '2rem'
              }}
            >
              {/* Left Column: Date & Details */}
              <div>
                <span style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.9rem', 
                  fontWeight: 500,
                  display: 'block',
                  marginBottom: '1rem'
                }}>
                  {exp.date}
                </span>
                <span style={{ 
                  color: 'var(--text-primary)', 
                  fontSize: '1rem', 
                  fontWeight: 600,
                }}>
                  {exp.company}
                </span>
              </div>

              {/* Right Column: Role & Responsibilities */}
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 600 }}>{exp.title}</h3>

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
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      position: 'relative',
                      paddingLeft: '1.5rem'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.5rem',
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--text-tertiary)'
                      }}></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
