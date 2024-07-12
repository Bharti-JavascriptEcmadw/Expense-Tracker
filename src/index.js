import ReactDom from "react-dom/client";
import React from 'react'
import "./index.css"
import App from "./App";
const root= ReactDom.createRoot(document.getElementById('root'));
root.render(
  <App></App>
);  

// ReactDom.render(
//   <App/>,
//   document.getElementById('root')
// );