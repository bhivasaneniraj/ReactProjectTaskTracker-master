import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppProvider} from './Context/context.js'
import {CookiesProvider} from 'react-cookie'



ReactDOM.render (
  
  <>
  <AppProvider>
    <CookiesProvider>
  <App />
  </CookiesProvider>
 </AppProvider>
 </>
,
    document.getElementById('root')
);








