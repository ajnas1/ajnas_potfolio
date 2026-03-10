import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Skills() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Grow path animations based on scroll
  const headDraw = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const coreDraw = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const armsDraw = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const legsDraw = useTransform(scrollYProgress, [0.0, 0.3], [0, 1]);

  // Opacity reveals for the skills texts
  const legsOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const coreOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const armsOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const headOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);


  return (
    <section id="skills" className="section" ref={containerRef} style={{ position: 'relative', minHeight: '150vh', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ position: 'sticky', top: '15%', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{ marginBottom: '2rem', textAlign: 'center', zIndex: 10 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--accent-1)', fontSize: '1.2rem', fontFamily: 'Outfit' }}>01.</span>
            <div style={{ height: '1px', width: '50px', background: 'var(--glass-border)' }}></div>
          </div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            <span className="text-gradient">Skill</span> Anatomy
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Scroll down to build.</p>
        </motion.div>

        <div style={{ position: 'relative', width: '100%', maxWidth: '800px', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          {/* Realistically Proportioned Outline Human Figure */}
          <div style={{ position: 'relative', width: '250px', height: '600px', zIndex: 2 }}>
            <svg viewBox="0 0 200 450" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.4))' }}>
              
              {/* Pulsing Nodes at key joints to make it "techy" and alive */}
              <motion.circle cx="100" cy="45" r="4" fill="var(--accent-2)" style={{ opacity: headOpacity }} transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }} animate={{ scale: [1, 1.5, 1], filter: ["blur(0px)", "blur(4px)", "blur(0px)"] }} />
              <motion.circle cx="100" cy="110" r="4" fill="#fff" style={{ opacity: coreOpacity }} transition={{ repeat: Infinity, duration: 2.5, repeatType: "reverse" }} animate={{ scale: [1, 1.5, 1], filter: ["blur(0px)", "blur(4px)", "blur(0px)"] }} />
              <motion.circle cx="65" cy="220" r="4" fill="var(--accent-1)" style={{ opacity: armsOpacity }} transition={{ repeat: Infinity, duration: 2.2, repeatType: "reverse" }} animate={{ scale: [1, 1.5, 1], filter: ["blur(0px)", "blur(4px)", "blur(0px)"] }} />
              <motion.circle cx="135" cy="220" r="4" fill="var(--accent-1)" style={{ opacity: armsOpacity }} transition={{ repeat: Infinity, duration: 2.2, repeatType: "reverse", delay: 1 }} animate={{ scale: [1, 1.5, 1], filter: ["blur(0px)", "blur(4px)", "blur(0px)"] }} />
              <motion.circle cx="100" cy="250" r="4" fill="var(--accent-3)" style={{ opacity: legsOpacity }} transition={{ repeat: Infinity, duration: 2.8, repeatType: "reverse" }} animate={{ scale: [1, 1.5, 1], filter: ["blur(0px)", "blur(4px)", "blur(0px)"] }} />

              {/* Head / Brain (API & Architecture) */}
              <motion.path 
                d="M 100 20 C 112 20 120 30 120 45 C 120 62 108 72 100 72 C 92 72 80 62 80 45 C 80 30 88 20 100 20 Z"
                fill="rgba(112, 0, 255, 0.05)" 
                stroke="var(--accent-2)" 
                strokeWidth="3" 
                style={{ pathLength: headDraw, opacity: headOpacity }} 
              />
              
              {/* Torso/Core (Programming Languages) */}
              <motion.path 
                 d="M 100 72 C 115 72 135 85 140 105 C 145 140 120 250 120 250 L 80 250 C 80 250 55 140 60 105 C 65 85 85 72 100 72 Z"
                 fill="rgba(255, 255, 255, 0.02)" 
                 stroke="#fff" 
                 strokeWidth="2.5" 
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 style={{ pathLength: coreDraw, opacity: coreOpacity }}
              />

              {/* Arms (Tools & Tech) */}
              <motion.path 
                d="M 60 105 C 45 130 35 180 35 230 C 35 250 45 255 50 240 C 55 210 65 170 70 140 M 140 105 C 155 130 165 180 165 230 C 165 250 155 255 150 240 C 145 210 135 170 130 140"
                fill="none" 
                stroke="var(--accent-1)" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: armsDraw, opacity: armsOpacity }} 
              />
              
              {/* Legs (Databases & Cloud) */}
              <motion.path 
                 d="M 80 250 C 75 320 65 410 65 435 C 65 448 85 448 90 435 C 95 410 95 380 100 350 C 105 380 105 410 110 435 C 115 448 135 448 135 435 C 135 410 125 320 120 250"
                 fill="rgba(255, 0, 85, 0.05)" 
                 stroke="var(--accent-3)" 
                 strokeWidth="3" 
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 style={{ pathLength: legsDraw, opacity: legsOpacity }}
              />

            </svg>
          </div>

          {/* Floating Skill Labels */}
          
          {/* Head Label: API & Arch */}
          <motion.div style={{ position: 'absolute', top: '10%', right: '5%', opacity: headOpacity, width: '250px' }}>
            <div className="glass-panel" style={{ padding: '1.2rem', borderColor: 'var(--accent-2)', background: 'rgba(112, 0, 255, 0.1)' }}>
              <h4 style={{ color: 'var(--accent-2)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>The Brain</h4>
              <p style={{ color: '#fff', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>API & Architecture</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {['REST', 'GraphQL', 'JWT', 'OAuth 2'].map(s => <span key={s} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>{s}</span>)}
              </div>
            </div>
            {/* Connector line */}
            <div style={{ position: 'absolute', left: '-50px', top: '30px', width: '50px', height: '1px', background: 'var(--accent-2)' }}></div>
          </motion.div>

          {/* Arms Label: Tools */}
          <motion.div style={{ position: 'absolute', top: '40%', left: '0%', opacity: armsOpacity, width: '220px' }}>
            <div className="glass-panel" style={{ padding: '1.2rem', borderColor: '#fff' }}>
              <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>The Hands</h4>
              <p style={{ color: '#fff', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tools & Technologies</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {['Postman', 'VS Code', 'Git', 'Firebase'].map(s => <span key={s} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>{s}</span>)}
              </div>
            </div>
            {/* Connector line */}
            <div style={{ position: 'absolute', right: '-40px', top: '30px', width: '40px', height: '1px', background: '#fff' }}></div>
          </motion.div>

          {/* Core Label: Languages */}
          <motion.div style={{ position: 'absolute', top: '55%', right: '5%', opacity: coreOpacity, width: '220px' }}>
            <div className="glass-panel" style={{ padding: '1.2rem', borderColor: 'var(--accent-1)', background: 'rgba(0, 240, 255, 0.1)' }}>
              <h4 style={{ color: 'var(--accent-1)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>The Core</h4>
              <p style={{ color: '#fff', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Programming Languages</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {['Dart', 'Python', 'JavaScript'].map(s => <span key={s} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>{s}</span>)}
              </div>
            </div>
             {/* Connector line */}
             <div style={{ position: 'absolute', left: '-80px', top: '30px', width: '80px', height: '1px', background: 'var(--accent-1)' }}></div>
          </motion.div>

          {/* Legs Label: Data & Cloud */}
          <motion.div style={{ position: 'absolute', bottom: '10%', left: '5%', opacity: legsOpacity, width: '250px' }}>
            <div className="glass-panel" style={{ padding: '1.2rem', borderColor: 'var(--accent-3)', background: 'rgba(255, 0, 85, 0.1)' }}>
              <h4 style={{ color: 'var(--accent-3)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>The Foundation</h4>
              <p style={{ color: '#fff', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Databases & Cloud</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {['PostgreSQL', 'AWS', 'OpenSearch', 'Firestore'].map(s => <span key={s} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>{s}</span>)}
              </div>
            </div>
             {/* Connector line */}
             <div style={{ position: 'absolute', right: '-60px', top: '30px', width: '60px', height: '1px', background: 'var(--accent-3)' }}></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
