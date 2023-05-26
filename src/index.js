import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// API key
// AIzaSyBexni8XnlLQ1HHavU2QD7Nh1BeDj2VqI4;
// https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite&key=AIzaSyBexni8XnlLQ1HHavU2QD7Nh1BeDj2VqI4
