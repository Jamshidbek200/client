import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={homePageStyle}>
      <section style={introSectionStyle}>
        <h1 style={headingStyle}>Welcome to the Trading & Investment Platform</h1>
        <p style={paraStyle}>
          Your one-stop solution for trading, investments, and financial growth.
          We offer access to the latest trends, insights, and tools for making informed financial decisions.
        </p>
        <div style={ctaStyle}>
          <Link to="/about" style={ctaButtonStyle}>Learn More About Us</Link>
        </div>
      </section>

      <section style={servicesSectionStyle}>
        <h2 style={headingStyle}>Our Services</h2>
        <div style={servicesContainerStyle}>
          <div style={serviceCardStyle}>
            <h3>Trading</h3>
            <p>
              Trade with ease using our platform's advanced features, real-time charts, and comprehensive tools.
            </p>
            <Link to="/trading" style={linkStyle}>Start Trading</Link>
          </div>
          <div style={serviceCardStyle}>
            <h3>Investment</h3>
            <p>
              Invest wisely with our expert recommendations, real-time market analysis, and secure investment options.
            </p>
            <Link to="/investment" style={linkStyle}>Start Investing</Link>
          </div>
        </div>
      </section>

      <section style={featuredCompaniesSectionStyle}>
        <h2 style={headingStyle}>Featured Investment Companies</h2>
        <div style={companiesContainerStyle}>
          <div style={companyCardStyle}>
            <h3>Vanguard</h3>
            <p>Vanguard is a leader in investment management, known for its low-cost mutual funds and ETFs.</p>
          </div>
          <div style={companyCardStyle}>
            <h3>State Street</h3>
            <p>State Street provides investment management services to institutions and individuals globally.</p>
          </div>
          <div style={companyCardStyle}>
            <h3>BlackRock</h3>
            <p>BlackRock is one of the largest asset managers globally, offering a wide range of investment solutions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Inline styles for simplicity
const homePageStyle = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f4',
  padding: '20px',
};

const introSectionStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '40px 20px',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '36px',
  marginBottom: '20px',
};

const paraStyle = {
  fontSize: '18px',
  marginBottom: '20px',
};

const ctaStyle = {
  marginTop: '20px',
};

const ctaButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#ff4d4d',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
};

const servicesSectionStyle = {
  margin: '40px 0',
  textAlign: 'center',
};

const servicesContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
};

const serviceCardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  width: '40%',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

const linkStyle = {
  display: 'inline-block',
  marginTop: '10px',
  color: '#ff4d4d',
  textDecoration: 'none',
  fontSize: '18px',
};

const featuredCompaniesSectionStyle = {
  margin: '40px 0',
  textAlign: 'center',
};

const companiesContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  gap: '20px',
};

const companyCardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  width: '30%',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

export default HomePage;
