import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import Store from "./redux/redux-Store";

let rerenderEntireTree = (State) => {
  ReactDOM.render( 
    <BrowserRouter >
      <App State = {State}
      dispatch = {Store.dispatch.bind(Store)}
      /> 
    </BrowserRouter>,
  document.getElementById('root')
  );
}

rerenderEntireTree(Store.getState ());

Store.subscribe(() => {
  let State = Store.getState ()
  rerenderEntireTree(State)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
