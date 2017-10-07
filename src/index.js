import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux';
import { fromJS } from 'immutable';

const initialState = fromJS(window.__INITIAL_STATE__);

import Home from './components/home/Entities.container'
// Add Bootstrap and custom styles
import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/main.scss';

import configureStore from './redux/common/configureStore';
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);