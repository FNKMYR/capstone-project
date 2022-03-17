import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import GlobalStyles from './GlobalStyles.js';
import Theme from './Theme.js';

ReactDOM.render(
  <BrowserRouter>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
