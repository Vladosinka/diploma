import React from "react";
import styles from "./MessageList.module.css";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";

const MessageList = (props) => { debugger;

  let MessageElements = props.MessageData.map((m) => (
    <Message Message={m.Message} />
  ));

  return (
    <div className={styles.MessageList}>
      <div className={styles.Message}>{MessageElements}</div>
      <AddMessage
            newMessageText={props.newMessageText}
            AddMessage={props.AddMessage}
            onMessageChange={props.onMessageChange}
       />
    </div>
  );
};

export default MessageList;
