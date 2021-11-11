import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let UserData = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Lena" },
  { id: 4, name: "Katya" },
  { id: 5, name: "Vlad" },
  { id: 6, name: "Natasha" },
  { id: 7, name: "Tolya" },
  { id: 8, name: "Petya" },
  { id: 9, name: "Vasya" },
  { id: 10, name: "Sveta" },
  { id: 11, name: "Lena" },
  { id: 12, name: "Katya" },
  { id: 13, name: "Vlad" },
  { id: 14, name: "Natasha" },
  { id: 15, name: "Tolya" },
  { id: 16, name: "Petya" },
];

let MessageData = [
  { id: 1, Message: "Hi" },
  { id: 2, Message: "At what stage is your diploma?" },
  { id: 3, Message: "In developing" },
  { id: 4, Message: "Well done, don't give up, you will succeed" },
  { id: 5, Message: "Yo" },
  { id: 6, Message: "Yo" },
  { id: 7, Message: "Yo" },
  { id: 8, Message: "Yo" },
  { id: 9, Message: "Hi" },
  { id: 10, Message: "At what stage is your diploma?" },
  { id: 11, Message: "In developing" },
  { id: 12, Message: "Well done, don't give up, you will succeed" },
  { id: 13, Message: "Yo" },
  { id: 14, Message: "Yo" },
  { id: 15, Message: "Yo" },
  { id: 16, Message: "Yo" },
];

ReactDOM.render(
  <React.StrictMode>
    <App UserData={UserData} MessageData={MessageData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


