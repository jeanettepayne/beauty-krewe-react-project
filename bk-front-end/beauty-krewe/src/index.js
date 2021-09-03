import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import brandReducer from './reducers/brandReducer';
import { BrowserRouter as Router } from 'react-router-dom';

//store setup, storing data globally
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(brandReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      {/* <Header /> */}
      {/* <Footer /> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);

