import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrected import for React 18
import './index.css'; // Ensures Tailwind CSS is loaded
import App from './App';
import 'react-tooltip/dist/react-tooltip.css'


const root = ReactDOM.createRoot(document.getElementById('root')); // Using the new root API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);