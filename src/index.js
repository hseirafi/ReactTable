import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';

import './index.css';
const prop = {};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route {...prop} path="/" component={Main}/>
  </Router>,
  document.getElementById('root')
);
