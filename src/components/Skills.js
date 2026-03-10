import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Skills() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Dart']
    },
    {
      title: 'API & Architecture',
      skills: ['RESTful APIs', 'GraphQL', 'RBAC', 'JWT', 'OAuth 2.0', 'Middleware']
    },
    {
      title: 'Databases & Search',
      skills: ['PostgreSQL', 'OpenSearch', 'Firestore', 'Hive']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Git', 'GitHub', 'GitLab']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Postman', 'VS Code', 'Firebase', 'Swagger']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="skills" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <motion.div 
        className="ambient-shape shape-3" 
        style={{ 
          scale,
          position: 'absolute', 
          right: '-10%', 
          top: '20%', 
          filter: 'blur(120px)', 
          opacity: 0.3 
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent-1)', fontSize: '1.2rem', fontFamily: 'Outfit' }}>01.</span>
            <div style={{ height: '1px', width: '50px', background: 'var(--glass-border)' }}></div>
          </div>
          <h2 className="section-title">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { type: "spring", stiffness: 400 },
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                borderColor: 'var(--accent-2)'
              }}
              className="glass-panel"
              style={{ padding: '2.5rem', transition: 'border-color 0.3s' }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '2rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {category.skills.map(skill => (
                  <motion.span 
                    key={skill} 
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-2)', color: '#fff' }}
                    style={{
                      padding: '10px 18px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '100px',
                      fontSize: '0.9rem',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      cursor: 'default',
                      boxShadow: 'inset 0 0 10px rgba(255,255,255,0.02)'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
