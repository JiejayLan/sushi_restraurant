import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Routes from "./Routes";
import './index.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render( Routes , document.getElementById('root'));

registerServiceWorker();