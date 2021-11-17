import React from "react";
import styles from "./MessageList.module.css";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";

const MessageList = (props) => {
  let MessageElements = props.MessageData.map((m) => (
    <Message Message={m.Message} />
  ));

  return (
    <div>
      <div className={styles.MessageList}>
        <div className={styles.Message}>{MessageElements}</div>
        <AddMessage
          dispatch={props.dispatch}
          newMessageText={props.newMessageText}
        />
      </div>
    </div>
  );
};

export default MessageList;
