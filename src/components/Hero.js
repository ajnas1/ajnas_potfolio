import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* <div className="badge" style={{ marginBottom: '2rem' }}>
            <div className="badge-dot"></div>
            Available for new opportunities
          </div> */}

          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', 
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            fontWeight: 700
          }}>
            Building <span className="serif" style={{ color: 'var(--text-secondary)' }}>scalable</span><br/>
            backend systems.
          </h1>

          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '3rem', 
            maxWidth: '600px', 
            lineHeight: 1.7 
          }}>
            I'm Ajnas, a Backend & Flutter Developer specialized in designing robust RESTful and GraphQL APIs, optimizing databases, and engineering high-performance cross-platform applications.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }} className="btn-primary">
              View Projects 
            </a>
            <a href="mailto:ajnasashkath@gmail.com" className="btn-secondary" style={{ border: 'none' }}>
              Contact Me <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
