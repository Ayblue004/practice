 import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import { Robots }  from './Robot.js';
 import App from './container/App';
 import reportWebVitals from './reportWebVitals';
 import 'tachyons';
 ReactDOM.render(
 	<App  Robots = {Robots} />
 	, document.getElementById("root"));
 reportWebVitals();
