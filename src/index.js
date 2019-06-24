import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from './components/Main';
import HeaderComponent from './components/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css';
import './stylesheets/animate.css';

ReactDOM.render(
  <div>
    <HeaderComponent />
    <App history={browserHistory} />
  
  </div>,
  document.getElementById('root')
);
