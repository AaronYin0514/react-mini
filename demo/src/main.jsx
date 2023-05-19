import React from 'react'
// import ReactDOM from 'react-dom/client'
import { ReactDOM } from "../which-react";
// import App from './App.jsx'
import './index.css'

const jsx = (
  <div className="border">
    <h1>react</h1>
    <a href="https://github.com/bubucuo/mini-react">mini react</a>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(jsx)
