import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import AppRouter from './AppRouter';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

reportWebVitals();
