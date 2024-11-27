import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyPage = () => {
  const { companyName } = useParams(); // Get the company name from the URL

  const getCompanyInfo = (name) => {
    // You can fetch data from an API here. For now, we use static data.
    const companies = {
      vanguard: {
        name: 'Vanguard',
        description: 'Vanguard is a leader in investment management, known for its low-cost mutual funds and ETFs.',
        founded: '1975',
        headquarters: 'Malvern, Pennsylvania, USA',
        services: ['Mutual Funds', 'ETFs', 'Financial Planning'],
      },
      statestreet: {
        name: 'State Street',
        description: 'State Street provides investment management services to institutions and individuals globally.',
        founded: '1792',
        headquarters: 'Boston, Massachusetts, USA',
        services: ['Investment Management', 'Private Equity', 'Research'],
      },
      blackrock: {
        name: 'BlackRock',
        description: 'BlackRock is one of the largest asset managers globally, offering a wide range of investment solutions.',
        founded: '1988',
        headquarters: 'New York City, New York, USA',
        services: ['Asset Management', 'Risk Management', 'Advisory'],
      },
    };
    return companies[name.toLowerCase()];
  };

  const company = getCompanyInfo(companyName);

  return (
    <div style={companyPageStyle}>
      <section style={introSectionStyle}>
        <h1 style={headingStyle}>{company.name}</h1>
        <p style={paraStyle}>{company.description}</p>
      </section>

      <section style={detailsSectionStyle}>
        <h2 style={headingStyle}>Company Details</h2>
        <p><strong>Founded:</strong> {company.founded}</p>
        <p><strong>Headquarters:</strong> {company.headquarters}</p>
        <h3>Services Offered:</h3>
        <ul>
          {company.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>

      <section style={ctaSectionStyle}>
        <p style={ctaTextStyle}>Learn more about {company.name} and explore investment opportunities.</p>
        <button style={ctaButtonStyle}>Start Investing</button>
      </section>
    </div>
  );
};

// Inline styles for simplicity
const companyPageStyle = {
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

const detailsSectionStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  marginTop: '30px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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

export default CompanyPage;
