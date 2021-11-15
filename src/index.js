import reportWebVitals from './reportWebVitals';
import State, {subscribe} from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/State';
import { addMessage } from './redux/State';
import { BrowserRouter } from "react-router-dom";
import { updateNewPostText } from "./redux/State";

let rerenderEntireTree= (State) => {
ReactDOM.render(
  <BrowserRouter>
    <App State={State} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
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
