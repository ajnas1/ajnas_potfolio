import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 0',
      borderTop: '1px solid var(--border-color)',
      background: 'var(--bg-color)',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <div className="container">
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
          &copy; {new Date().getFullYear()} Ajnas Ashkath. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
