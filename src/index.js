import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from './components/Main';
import HeaderComponent from './components/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css';
import './stylesheets/animate.css';
import FilterableContactTable from './components/Rutinas';
//import { CONTACTS } from './components/Main';



ReactDOM.render(
  <div>
    <HeaderComponent />
    <App history={browserHistory} />,
    
   
  </div>,
  document.getElementById('root'),
);

 var CONTACTS = [
  {name: 'Tom Jackson', phone: '555-444-333', email: 'tom@gmail.com'},
  {name: 'Mike James', phone: '555-777-888', email: 'mikejames@gmail.com'},
  {name: 'Janet Larson', phone: '555-222-111', email: 'janetlarson@gmail.com'},
  {name: 'Clark Thompson', phone: '555-444-333', email: 'clark123@gmail.com'},
  {name: 'Emma Page', phone: '555-444-333', email: 'emma1page@gmail.com'},
  
]; 