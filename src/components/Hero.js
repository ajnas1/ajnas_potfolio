import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="home"
      className="section"
      ref={sectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        overflow: 'hidden'
      }}
    >
      {/* Background Hover Reveal Layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/ajnas3.png)',
          backgroundPosition: 'right bottom',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(100%)',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: isHovered ? 1 : 0.2,
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle 80px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 200%)`
            : 'none',
          maskImage: isHovered
            ? `radial-gradient(circle 80px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 200%)`
            : 'none',
        }}
        animate={{ opacity: isHovered ? 1 : 0.2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      <div className="container" style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: '1 1 500px', maxWidth: '650px' }}
        >
          <h1 style={{
            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            fontWeight: 700
          }}>
            Building <span className="serif" style={{ color: 'var(--text-secondary)' }}>scalable</span><br />
            backend systems.
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '650px',
            lineHeight: 1.8
          }}>
            Full Stack Developer with 1+ year of experience building scalable mobile and backend systems using Flutter, Node.js, and FastAPI. Specialized in healthcare platforms (EMR, pharmacy, lab, insurance) with expertise in OpenSearch, secure APIs (JWT/OAuth), PostgreSQL, and Docker; contributed to an award-winning Digital India (BDIC 1.0) healthcare product.
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
