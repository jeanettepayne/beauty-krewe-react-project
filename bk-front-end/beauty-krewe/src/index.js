import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

