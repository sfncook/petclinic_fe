import React from 'react';
import { render } from 'react-dom'
import './styles/index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import petClinicReducer from './stateHandlers/reducers';

const store = createStore(petClinicReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
