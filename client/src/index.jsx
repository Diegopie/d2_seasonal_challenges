import React from 'react';
import ReactDOM from 'react-dom';
import GlobalProvider from './context/GlobalContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const loadTest = false;

if (loadTest) {
  setTimeout(() => {
    ReactDOM.render(
      <React.StrictMode>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }, 1600)
} else {
  ReactDOM.render(
    <React.StrictMode>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
