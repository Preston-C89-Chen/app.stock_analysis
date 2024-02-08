import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// import { ClerkProvider } from "@clerk/clerk-react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ThemeProvider from './utils/ThemeContext';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import App from './App';
//import store from './redux/store';
import { Provider } from 'react-redux';
import { ApolloAPI } from './api';
{/* <Provider store={store}>
</Provider> */}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <ApolloProvider client={ApolloAPI}>
          <ThemeProvider>
            <Theme>
              <App />
            </Theme>
          </ThemeProvider>
        </ApolloProvider>
    </Router>
  </React.StrictMode>
);
