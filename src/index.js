import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import React from 'react';
import { render } from 'react-dom'
import './styles/index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import petClinicReducer from './stateHandlers/reducers';
import {getAllVets, getAllPets, getAllAppts} from './stateHandlers/actions'

const loggerMiddleware = createLogger();

const store = createStore(petClinicReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(getAllPets());
store.dispatch(getAllVets());
store.dispatch(getAllAppts());