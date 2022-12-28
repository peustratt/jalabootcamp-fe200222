import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './layout/main';
import {BrowserRouter as Router} from 'react-router-dom'
import '../src/css/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>
);