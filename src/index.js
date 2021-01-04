import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MusicApp from './MusicApp';
// import FemomSQIApp from './FemomSQIApp';
// import FemomSQIReactApp from './FemomSQIReactApp';
// import GridApp from './GridApp';
import AllApp from './AllApp';
// import TestThemeApp from './test/ThemeApp';
// import PokemonApp from './test/PokemomApp';
import reportWebVitals from './reportWebVitals';
// import {Router} from "react-router-dom";
// import {createBrowserHistory} from "history"; 
// const history = createBrowserHistory();

// ReactDOM.render(
//       <React.StrictMode>
//         <Router history={history}>
//           <PokemonApp />
//         </Router>
//       </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  
  <AllApp></AllApp>,
  
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
