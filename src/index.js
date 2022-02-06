/*
latest feeature to js is import key word allowing us to stop using the below code

var React = require("react");
var ReactDOM = require("react-dom");
*/

// New way to import
import React from "react";
import ReactDOM from "react-dom";

/* 
  react works by creating JSX files, files where we have html in the body of js file
  Html is picked up by a compiler and gets converted/compiled into actual js
  the compiler comes from the included react module

  in react module there is a thing called babel and that is a js compiler
  It takes js like es6,7,8 and compiles it to a version of js a browser can understand
  this includes compiling jsx down to js
*/

/*
  takes 3 inputs "what to show", "where to show it",
  optional call back - "when render function has completed"

  render can only take 1 html element, to allow us to have multiple elements displayed 
  we can wrap them inside of a div elemment
*/

ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);

// Example of js to represent what we have created above
/*
 * var h1 = document.createElement("h1");
 * h1.innerHTML = "Hello World";
 * document.getElementById("root").appendChild(h1);
 */
