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
          AddMessage={props.AddMessage}
          newMessageText={props.newMessageText}
          updateNewMessageText={props.updateNewMessageText}
        />
      </div>
    </div>
  );
};

export default MessageList;
