import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={textStyle}>
          <p>© 2024 Trading & Investment Platform. All Rights Reserved.</p>
        </div>
        <div style={socialLinksStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

// Inline styles for simplicity
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  marginTop: '30px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const textStyle = {
  fontSize: '14px',
};

const socialLinksStyle = {
  display: 'flex',
  gap: '15px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  transition: 'color 0.3s',
};

linkStyle[':hover'] = {
  color: '#ff4d4d',
};

export default Footer;
