import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <>
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: 'var(--text-primary)',
          transformOrigin: '0%',
          zIndex: 1000,
        }}
      />
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 50,
          transition: 'all 0.3s ease',
          paddingTop: scrolled ? '1rem' : '2rem',
          paddingBottom: scrolled ? '1rem' : '2rem',
          background: scrolled ? 'var(--bg-secondary)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.a 
            href="#home" 
            style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}
          >
            Ajnas Ashkath
          </motion.a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                style={{ 
                  color: 'var(--text-secondary)', 
                  fontWeight: 500, 
                  fontSize: '0.9rem', 
                  transition: 'color 0.2s' 
                }} 
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} 
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1rem' }} className="hidden-mobile">
            {[
              { icon: <Github size={18} />, url: 'https://github.com/Ajnas' },
              { icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/AjnasAshkath' },
              { icon: <Mail size={18} />, url: 'mailto:ajnasashkath@gmail.com' }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.url} 
                target={social.url.startsWith('http') ? "_blank" : "_self"} 
                rel="noreferrer" 
                style={{ 
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  borderRadius: '8px',
                  transition: 'background 0.2s, color 0.2s'
                }}
                whileHover={{ background: 'var(--border-color)', color: 'var(--text-primary)' }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
