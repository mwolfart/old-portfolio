import React from "react";
import ReactDOM from "react-dom";
import "./styles/themes/theme3.scss";
import "./index.css";
//import App from './App';
import * as serviceWorker from "./serviceWorker";

import { MainCanvas } from './components/MainCanvas';

ReactDOM.render(<MainCanvas />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
