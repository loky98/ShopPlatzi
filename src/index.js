// se inicia con git, npm y se intala la libreria de React con:
// npm install react react-dom
// se intala la librbreria de babel con 
// npm install @babel/core @babel/preset-env @babel/preset-react
// se installa la libreria de webpack com:
// npm install webpack webpack-cli webpack-dev-server 
// tambien se intala loader y plugin de webpack para html com:
// npm install babel-loader html-loader html-webpack-plugin
// intalar plugins para css con:
// npm install mini-css-extract-plugin css-loader style-loader sass sass-loader -D
// instalar lo que falta de sas con:
// npm install sass-loader -D

import React from "react"
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById('app'))
