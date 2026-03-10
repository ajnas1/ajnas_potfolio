import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--gradient-accent)',
          transformOrigin: '0%',
          zIndex: 1000,
        }}
      />
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}
        style={{ 
          paddingLeft: '40px', 
          paddingRight: '40px', 
          width: '100%', 
          boxSizing: 'border-box',
          background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
          <motion.a 
            href="#home" 
            className="logo" 
            style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.05em' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AJNAS<span className="text-gradient">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                style={{ 
                  color: 'var(--text-secondary)', 
                  fontWeight: 600, 
                  fontSize: '0.9rem', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s' 
                }} 
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.textShadow = '0 0 10px rgba(255,255,255,0.5)';
                }} 
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.textShadow = 'none';
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social / Contact Header */}
          <div style={{ display: 'flex', gap: '1.2rem' }} className="hidden-mobile">
            {[
              { icon: <Github size={20} />, url: 'https://github.com/Ajnas' },
              { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/AjnasAshkath' },
              { icon: <Mail size={20} />, url: 'mailto:ajnasashkath@gmail.com' }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.url} 
                target={social.url.startsWith('http') ? "_blank" : "_self"} 
                rel="noreferrer" 
                style={{ 
                  color: 'var(--text-primary)',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '10px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                whileHover={{ 
                  scale: 1.1, 
                  background: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(255,255,255,0.3)',
                  boxShadow: '0 0 15px rgba(255,255,255,0.2)'
                }}
                whileTap={{ scale: 0.9 }}
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
