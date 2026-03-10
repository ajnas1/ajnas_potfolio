import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 0',
      borderTop: '1px solid var(--border-color)',
      background: 'var(--bg-secondary)',
      textAlign: 'center',
      marginTop: '4rem'
    }}>
      <div className="container">
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          &copy; {new Date().getFullYear()} Ajnas Ashkath. All rights reserved.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.7 }}>
          Built with React & Framer Motion
        </p>
      </div>
    </footer>
  );
}
