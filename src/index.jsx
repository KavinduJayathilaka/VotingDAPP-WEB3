import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import i18n from '../src/utilities/i18n';
import { I18nextProvider } from 'react-i18next'


ReactDOM.render(
  <BrowserRouter>
   <I18nextProvider i18n={i18n}>
   <App />
   </I18nextProvider> 
  </BrowserRouter>,
  document.getElementById("root")
);