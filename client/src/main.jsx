import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Theme>
          <div>update</div>
          <App />
        </Theme>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
