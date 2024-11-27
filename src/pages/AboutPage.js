import React from 'react';

const AboutPage = () => {
  return (
    <div style={aboutPageStyle}>
      <section style={introSectionStyle}>
        <h1 style={headingStyle}>About Our Platform</h1>
        <p style={paraStyle}>
          Welcome to the leading trading and investment platform, where we empower individuals and institutions
          to make informed financial decisions. Our platform offers state-of-the-art tools, expert insights, and a secure
          environment for maximizing your investment potential.
        </p>
      </section>

      <section style={missionSectionStyle}>
        <h2 style={headingStyle}>Our Mission</h2>
        <p style={paraStyle}>
          Our mission is to make trading and investing accessible to everyone. We aim to provide our users with the
          knowledge, tools, and resources they need to grow their wealth securely and sustainably. Whether you’re new to
          investing or an experienced trader, our platform is here to support your financial journey.
        </p>
      </section>

      <section style={valuesSectionStyle}>
        <h2 style={headingStyle}>Our Core Values</h2>
        <ul style={valuesListStyle}>
          <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in everything we do.</li>
          <li><strong>Innovation:</strong> We continuously innovate to offer the latest in trading and investment technologies.</li>
          <li><strong>Customer Focus:</strong> We put our customers’ needs at the forefront of our platform's design and development.</li>
          <li><strong>Security:</strong> We ensure your data and investments are protected with top-level encryption and security protocols.</li>
        </ul>
      </section>

      <section style={teamSectionStyle}>
        <h2 style={headingStyle}>Meet Our Team</h2>
        <div style={teamContainerStyle}>
          <div style={teamMemberCardStyle}>
            <img src="https://via.placeholder.com/150" alt="CEO" style={teamMemberImageStyle} />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>John has over 20 years of experience in financial markets and technology.</p>
          </div>
          <div style={teamMemberCardStyle}>
            <img src="https://via.placeholder.com/150" alt="COO" style={teamMemberImageStyle} />
            <h3>Jane Smith</h3>
            <p>COO</p>
            <p>Jane leads operations and ensures our platform runs smoothly for users worldwide.</p>
          </div>
          <div style={teamMemberCardStyle}>
            <img src="https://via.placeholder.com/150" alt="CTO" style={teamMemberImageStyle} />
            <h3>Richard Lee</h3>
            <p>CTO</p>
            <p>Richard is responsible for the development and innovation of our platform's technology stack.</p>
          </div>
        </div>
      </section>

      <section style={ctaSectionStyle}>
        <p style={ctaTextStyle}>Want to learn more? Join us today and start your trading journey.</p>
        <button style={ctaButtonStyle}>Join Now</button>
      </section>
    </div>
  );
};

// Inline styles for simplicity
const aboutPageStyle = {
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

const missionSectionStyle = {
  backgroundColor: '#fff',
  padding: '40px 20px',
  marginTop: '30px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const valuesSectionStyle = {
  backgroundColor: '#fff',
  padding: '40px 20px',
  marginTop: '30px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const valuesListStyle = {
  fontSize: '18px',
  marginTop: '20px',
  lineHeight: '1.8',
};

const teamSectionStyle = {
  backgroundColor: '#fff',
  padding: '40px 20px',
  marginTop: '30px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const teamContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  gap: '30px',
};

const teamMemberCardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  textAlign: 'center',
  width: '30%',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

const teamMemberImageStyle = {
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  marginBottom: '10px',
};

const ctaSectionStyle = {
  backgroundColor: '#ff4d4d',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  marginTop: '30px',
};

const ctaTextStyle = {
  fontSize: '20px',
  marginBottom: '20px',
};

const ctaButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#fff',
  color: '#ff4d4d',
  border: 'none',
  borderRadius: '5px',
  fontSize: '18px',
  cursor: 'pointer',
};

export default AboutPage;
