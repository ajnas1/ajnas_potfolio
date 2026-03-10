import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div style={{ maxWidth: '900px', margin: '0', y: y1, opacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <span style={{ 
              display: 'inline-block', 
              padding: '8px 20px', 
              borderRadius: '100px', 
              background: 'rgba(255, 255, 255, 0.05)', 
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              border: '1px solid var(--glass-border)',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#00f0ff', borderRadius: '50%', marginRight: '10px', boxShadow: '0 0 10px #00f0ff' }}></span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            style={{ 
              fontSize: 'clamp(4rem, 8vw, 7rem)', 
              marginBottom: '1rem',
              lineHeight: 0.9,
              textTransform: 'uppercase'
            }}
          >
            I build <br/>
            <span className="text-gradient">Robust Systems</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2rem',
              marginTop: '2rem',
              marginBottom: '3rem' 
            }}
          >
            <div style={{ height: '2px', width: '100px', background: 'var(--glass-border)' }}></div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 400, fontFamily: 'Space Grotesk, sans-serif' }}>
              Ajnas Ashkath — Backend & Flutter Developer
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', lineHeight: 1.8 }}
          >
            Designing and engineering scalable RESTful and GraphQL APIs. Passionate about building secure, high-performance architecture and seamless cross-platform experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn-primary">
              Explore Work <ArrowRight size={20} />
            </a>
            <a href="mailto:ajnasashkath@gmail.com" className="btn-secondary">
              <Mail size={20} /> Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero typography watermark */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          right: '-5%', 
          bottom: '10%', 
          fontSize: '20vw', 
          fontWeight: 800, 
          fontFamily: 'Outfit, sans-serif',
          color: 'rgba(255,255,255,0.02)',
          lineHeight: 0.8,
          zIndex: 0,
          userSelect: 'none',
          y: y2
        }}
      >
        DEV.
      </motion.div>
    </section>
  );
}
