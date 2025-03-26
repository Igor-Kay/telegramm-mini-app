import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <script src="https://telegram.org/js/telegram-web-app.js?56"></script>
    
    <script>
      let tg = window.Telegram.WebApp;

      tg.expand();
    </script>

    <App />
  </React.StrictMode>
)
