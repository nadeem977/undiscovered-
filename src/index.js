import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SnackbarProvider } from 'notistack';
import { AppContextProvider } from './context/CreateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <AppContextProvider>
    <App />
      </AppContextProvider>
    </SnackbarProvider>
  </React.StrictMode>
);

 