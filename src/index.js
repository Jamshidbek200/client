import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You can add your global styles here
import App from './App'; // The main App component that includes all your routes
import { BrowserRouter as Router } from 'react-router-dom'; // Router for routing capabilities

// Rendering the App component to the root div
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
