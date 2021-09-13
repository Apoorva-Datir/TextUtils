// this is the starting point of any react project,the code written here will be the first to execute when we open the browser
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //here we are importing from App.js but in js the extension .js can be omitted

// The code below is JSX code(HTML in JavaScript)
ReactDOM.render(<App />, document.getElementById("root")); //this id "root" is in the index.html file in the public folder
