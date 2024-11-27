import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
  return (
    <nav style={navbarStyle}>
      <div style={brandStyle}>
        <h1>Trading & Investment</h1>
      </div>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
        <li style={liStyle}><Link to="/about" style={linkStyle}>About</Link></li>
        {user ? (
          <>
            <li style={liStyle}><Link to="/profile" style={linkStyle}>Profile</Link></li>
            {user.role === 'admin' && (
              <li style={liStyle}><Link to="/admin" style={linkStyle}>Admin</Link></li>
            )}
            <li style={liStyle}>
              <button onClick={logout} style={buttonStyle}>Logout</button>
            </li>
          </>
        ) : (
          <li style={liStyle}><Link to="/login" style={linkStyle}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

// Inline styles for simplicity
const navbarStyle = {
  background: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
};

const brandStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  margin: '0',
  padding: '0',
};

const liStyle = {
  margin: '0 15px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: '18px',
};

const buttonStyle = {
  backgroundColor: '#ff4d4d',
  border: 'none',
  padding: '8px 15px',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#fff',
};

export default Navbar;
