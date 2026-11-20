import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
// CSS
import './index.css';
import './assets/css/theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);