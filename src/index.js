import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MusicApp from './MusicApp';
// import FemomSQIApp from './FemomSQIApp';
// import FemomSQIReactApp from './FemomSQIReactApp';
// import GridApp from './GridApp';
import AllApp from './AllApp';
// import TestThemeApp from './test/ThemeApp';
import PokemonApp from './test/PokemomApp';
import FemomSQITableButton from "./components/FemomSQITableButton";
import reportWebVitals from './reportWebVitals';
import {Router} from "react-router-dom";
import history from "./test/history";
import App from "./App";

// ReactDOM.render(
//       <React.StrictMode>
//         <Router history={history}>
//           <PokemonApp />
//         </Router>
//       </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//
//   // <AllApp></AllApp>,
//   <PokemonApp></PokemonApp>,
//
// document.getElementById('root')
// );

// ReactDOM.render(
//       <React.StrictMode>
//         <Router history={history}>
//           <FemomSQITableButton />
//         </Router>
//       </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
