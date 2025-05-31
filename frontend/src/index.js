import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; // ★ 追加！

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter> {/* ★ App を HashRouter で包む！ */}
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();