import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import ThemeProvider from './utils/ThemeContext';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import ApolloAPI from './api/apolloClient';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
          <ApolloProvider client={ApolloAPI}>
            <ThemeProvider>
              <Theme>
                <App />
              </Theme>
            </ThemeProvider>
          </ApolloProvider>
        </Provider>
    </Router>
  </React.StrictMode>
);
