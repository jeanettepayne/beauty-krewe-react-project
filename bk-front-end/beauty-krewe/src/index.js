import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import brandReducer from './reducers/brandReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import influencerReducer from './reducers/influencerReducer';
import productReducer from './reducers/productReducer';


//store setup, storing data globally
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  brandReducer,
  productReducer,
  influencerReducer
})

// let store = createStore(brandReducer, composeEnhancers(applyMiddleware(thunk)))
// let store = createStore(influencerReducer, composeEnhancers(applyMiddleware(thunk)))
// let store = createStore(productReducer, composeEnhancers(applyMiddleware(thunk)))
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

