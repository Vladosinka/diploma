import React from "react";
import styles from "./MessageList.module.css";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";

const MessageList = (props) => {
  let state = props.Store.getState().MessagePage

  let MessageElements = state.MessageData.map((m) => (
    <Message Message={m.Message} />
  ));

  return (
      <div className={styles.MessageList}>
        <div className={styles.Message}>{MessageElements}</div>
        <AddMessage
          dispatch={props.dispatch}
          Store={props.Store}
        />
      </div>
  );
};

export default MessageList;
