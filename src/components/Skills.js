import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, GitBranch, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={20} />,
      skills: ['Python', 'JavaScript', 'Dart']
    },
    {
      title: 'API & Architecture',
      icon: <Layout size={20} />,
      skills: ['RESTful APIs', 'GraphQL', 'RBAC', 'JWT Authentication', 'OAuth 2.0']
    },
    {
      title: 'Databases & Search',
      icon: <Database size={20} />,
      skills: ['PostgreSQL', 'OpenSearch', 'Firestore', 'Hive', 'MongoDB']
    },
    {
      title: 'Cloud & DevOps',
      icon: <GitBranch size={20} />,
      skills: ['AWS', 'Git', 'GitHub', 'GitLab']
    },
    {
      title: 'Tools',
      icon: <Wrench size={20} />,
      skills: ['Postman', 'VS Code', 'Firebase', 'Swagger', 'Antigravity']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">Technical Expertise <span className="serif">.</span></h2>
          <p className="section-subtitle">
            A specialized toolkit focused on building scalable, resilient backend architectures and performant cross-platform applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bento-panel"
              style={{ padding: '2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                <div style={{ color: 'var(--text-secondary)' }}>{category.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{category.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map(skill => (
                  <span key={skill} style={{
                    padding: '6px 14px',
                    background: 'var(--bg-color)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '100px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)'
                  }}>
                    {skill}
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
