import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css';
import App from './App';

// css 样式重置
import "normalize.css"
import "./assets/css/index.less"
// store
import store from "@/store";
// theme
import theme from "@/assets/theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="loading">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
