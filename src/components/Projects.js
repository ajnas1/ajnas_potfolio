import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Smartphone, Globe, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Healthcare Management',
      subtitle: 'Unified Hospital Solution',
      description: 'Developed Flutter modules for EMR, pharmacy systems, appointment booking, lab reports, and insurance workflows within a unified hospital management solution.',
      tags: ['Flutter', 'Healthcare', 'EMR'],
      icon: <Smartphone size={24} />
    },
    {
      title: 'Healthcare Search',
      subtitle: 'OpenSearch Integration',
      description: 'Integrated OpenSearch into the healthcare platform to enable fast, indexed search across patient records, prescriptions, and clinical data — improving retrieval speed significantly.',
      tags: ['OpenSearch', 'Performance'],
      icon: <Globe size={24} />
    },
    {
      title: 'Shared Locker',
      subtitle: 'Secure Patient Data Storage',
      description: 'Built a role-based platform enabling healthcare providers to securely store and access patient medical records with strict RBAC controls.',
      tags: ['Flutter', 'Security', 'RBAC'],
      icon: <Smartphone size={24} />
    },
    {
      title: 'Diagnize',
      subtitle: 'Doctor Consultation Platform',
      description: 'Implemented a doctor-patient communication system with digital prescription generation and appointment scheduling.',
      tags: ['Flutter', 'Healthcare'],
      icon: <Smartphone size={24} />
    },
    {
      title: 'Summaryz',
      subtitle: 'Discharge Summary Generator',
      description: 'Developed automated generation of structured hospital discharge summaries, reducing manual documentation time.',
      tags: ['Automation', 'Healthcare'],
      icon: <Globe size={24} /> 
    },
    {
      title: 'SellOps',
      subtitle: 'SaaS Platform',
      description: 'Architected and deployed a multi-tenant backend using Node.js, Express, and PostgreSQL. Features secure JWT/OAuth 2.0 authentication and utilized Docker containerization spread across a highly scalable AWS production environment.',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
      icon: <FolderGit2 size={24} />
    },
    {
      title: 'Hostel Management',
      subtitle: 'Multi-tenant architecture',
      description: 'Designed a comprehensive FastAPI (Python) backend handling secure tenant isolation, room allocations, payment tracking, and integrated RESTful resources synced with a relational PostgreSQL schema.',
      tags: ['Python', 'FastAPI', 'PostgreSQL'],
      icon: <FolderGit2 size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Selected Work <span className="serif">.</span></h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Recent projects covering distributed backend architectures to modern performant frontends.
            </p>
          </motion.div>
          
          <motion.a 
            href="https://github.com/ajnas1" 
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="btn-secondary"
            style={{ borderRadius: '100px', padding: '10px 20px', fontSize: '0.9rem' }}
          >
            View GitHub <ArrowUpRight size={16} />
          </motion.a>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bento-panel"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--text-secondary)' }}>
                  {project.icon}
                </div>
                <ArrowUpRight size={20} color="var(--border-hover)" />
              </div>

              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.25rem', fontWeight: 600 }}>{project.title}</h3>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 500 }}>{project.subtitle}</p>

                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '2rem'
                }}>
                  {project.description}
                </p>
              </div>

              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                marginTop: 'auto',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)'
              }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500
                  }}>
                    {tag} {i < project.tags.length - 1 && <span style={{ color: 'var(--border-hover)', margin: '0 4px' }}>•</span>}
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
