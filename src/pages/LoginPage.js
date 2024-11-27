import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Example of login validation (you can replace it with actual authentication logic)
    if (email === 'user@example.com' && password === 'password123') {
      // Redirect to home page after successful login
      history.push('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div style={loginPageStyle}>
      <section style={formSectionStyle}>
        <h1 style={headingStyle}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={inputContainerStyle}>
            <label htmlFor="email" style={labelStyle}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="password" style={labelStyle}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          {error && <p style={errorMessageStyle}>{error}</p>}
          <button type="submit" style={submitButtonStyle}>Log In</button>
        </form>
        <p style={registerLinkStyle}>
          Don't have an account? <a href="/register" style={linkStyle}>Register here</a>
        </p>
      </section>
    </div>
  );
};

// Inline styles for simplicity
const loginPageStyle = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f4',
  padding: '40px 20px',
  minHeight: '100vh',
};

const formSectionStyle = {
  backgroundColor: '#fff',
  padding: '40px 20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  width: '400px',
  margin: 'auto',
  borderRadius: '8px',
};

const headingStyle = {
  fontSize: '32px',
  marginBottom: '20px',
  textAlign: 'center',
};

const inputContainerStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  fontSize: '18px',
  marginBottom: '5px',
  display: 'block',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const errorMessageStyle = {
  color: '#ff4d4d',
  fontSize: '16px',
  textAlign: 'center',
  marginBottom: '10px',
};

const submitButtonStyle = {
  backgroundColor: '#ff4d4d',
  color: '#fff',
  padding: '12px 20px',
  border: 'none',
  fontSize: '18px',
  borderRadius: '4px',
  width: '100%',
  cursor: 'pointer',
};

const registerLinkStyle = {
  textAlign: 'center',
  marginTop: '20px',
  fontSize: '16px',
};

const linkStyle = {
  color: '#ff4d4d',
  textDecoration: 'none',
};

export default LoginPage;
