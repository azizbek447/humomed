import './main.css';
import './locales/i18next.js';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <App />
);
