import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/State';
import { addMessage } from './redux/State';
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree= (State) => {
ReactDOM.render(
  <BrowserRouter>
    <App State={State} addPost={addPost} addMessage={addMessage}/>
  </BrowserRouter>,
  document.getElementById('root')
);
}

