import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthContextProvider } from "context/authContext"; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider> 
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
