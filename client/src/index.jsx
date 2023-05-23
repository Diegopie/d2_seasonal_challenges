import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalProvider from './context/GlobalContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const loadTest = false;
const container = document.getElementById('app');
const root = createRoot(container);

if (loadTest) {
  setTimeout(() => {
    root.render(
      <React.StrictMode>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </React.StrictMode>
    );
  }, 1600)
} else {
  root.render(
    <React.StrictMode>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </React.StrictMode>
  );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
