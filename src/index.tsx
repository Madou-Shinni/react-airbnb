import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from  "react-router-dom"

import './index.css';
import App from './App';

// css 样式重置
import "normalize.css"
import "./assets/index.less"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
