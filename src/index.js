import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allreducers from './reducers';
import {Provider} from 'react-redux';
import App from './containers/app';
// import MockData from './Components/random';

const store = createStore(allreducers);


ReactDOM.render(
  <Provider store = {store}>
    {/* <MockData /> */}
    <App />
  </Provider>,
  document.getElementById('root'));
