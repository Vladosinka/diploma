import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import State, { updateNewPostText, updateNewMessageText, addPost, AddMessage, subscribe } from "./redux/State";

let rerenderEntireTree= (State) => {
ReactDOM.render(
  <BrowserRouter>
    <App State={State} addPost={addPost} AddMessage={AddMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
  </BrowserRouter>,
  document.getElementById('root')
);
}

rerenderEntireTree(State);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
