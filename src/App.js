import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AdminPage from './components/AdminPage';
import CompanyPage from './components/CompanyPage';
import AboutPage from './components/AboutPage';
import RegisterPage from './components/RegisterPage'; // Add a register page if you have one

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/company" component={CompanyPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/register" component={RegisterPage} />
          {/* Add more routes here if needed */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
