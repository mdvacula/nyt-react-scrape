import React from 'react';

import ReactDOM from 'react-dom';
import App from './App.js';

import './semantic/dist/semantic.min.css';

import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
