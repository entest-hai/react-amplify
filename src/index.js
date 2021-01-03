import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MusicApp from './MusicApp';
// import FemomSQIApp from './FemomSQIApp';
import FemomSQIReactApp from './FemomSQIReactApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
    <FemomSQIReactApp />,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
