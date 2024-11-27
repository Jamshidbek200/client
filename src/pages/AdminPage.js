import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AdminPage = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com', status: 'Active' },
    { id: 2, username: 'user2', email: 'user2@example.com', status: 'Inactive' },
    { id: 3, username: 'user3', email: 'user3@example.com', status: 'Active' },
  ]);

  const [platformStats, setPlatformStats] = useState({
    totalUsers: 1200,
    activeUsers: 950,
    totalInvested: '$4,500,000',
  });

  const history = useHistory();

  const handleLogout = () => {
    // Redirect to login page upon logout
    history.push('/login');
  };

  return (
    <div style={adminPageStyle}>
      <section style={dashboardSectionStyle}>
        <h1 style={headingStyle}>Admin Dashboard</h1>
        <div style={statsContainerStyle}>
          <div style={statsCardStyle}>
            <h3>Total Users</h3>
            <p>{platformStats.totalUsers}</p>
          </div>
          <div style={statsCardStyle}>
            <h3>Active Users</h3>
            <p>{platformStats.activeUsers}</p>
          </div>
          <div style={statsCardStyle}>
            <h3>Total Invested</h3>
            <p>{platformStats.totalInvested}</p>
          </div>
        </div>
      </section>

      <section style={userManagementSectionStyle}>
        <h2 style={headingStyle}>User Management</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={logoutSectionStyle}>
        <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
      </section>
    </div>
  );
};

// Inline styles for simplicity
const adminPageStyle = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f4',
  padding: '40px 20px',
  minHeight: '100vh',
};

const dashboardSectionStyle = {
  backgroundColor: '#fff',
  padding: '40px 20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: '30px',
  borderRadius: '8px',
};

const headingStyle = {
  fontSize: '32px',
  marginBottom: '20px',
  textAlign: 'center',
};

const statsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  gap: '20px',
};

const statsCardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  textAlign: 'center',
  width: '30%',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

const userManagementSectionStyle = {
  backgroundColor: '#fff',
  padding: '40px 20px',
  marginTop: '30px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const logoutSectionStyle = {
  textAlign: 'center',
  marginTop: '30px',
};

const logoutButtonStyle = {
  backgroundColor: '#ff4d4d',
  color: '#fff',
  padding: '12px 20px',
  border: 'none',
  fontSize: '18px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default AdminPage;
