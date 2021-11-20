import React from "react";
import styles from "./MessageList.module.css";
import Message from "./Message/Message";
import AddMessageContainer from "./AddMessage/AddMessageContainer";

const MessageList = (props) => {
  let state = props.Store.getState().MessagePage;

  let MessageElements = state.MessageData.map((m) => (
    <Message Message={m.Message} />
  ));

  return (
    <div className={styles.MessageList}>
      <div className={styles.Message}>{MessageElements}</div>
      <AddMessageContainer Store={props.Store} />
    </div>
  );
};

export default MessageList;
