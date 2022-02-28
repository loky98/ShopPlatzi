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
// para poder usar rutas se instala
// npm install react-router-dom
// para usar el switch en el react-router-dom toca intalar una libreia mas antigua
// npm install react-router-dom@5.2.0
// para el uso de consulta de APIS intalamos axios
// npm install axios
// plugin para que babel pueda trabajar con axios
// npm install @babel/plugin-transform-runtime

import React from "react"
import ReactDOM from "react-dom";
import App from "./routes/App";

ReactDOM.render(<App />, document.getElementById('app'))
