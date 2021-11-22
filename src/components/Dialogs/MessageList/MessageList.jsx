import React from "react";
import styles from "./MessageList.module.css";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";

const MessageList = (props) => {

  let MessageElements = props.MessagePage.MessageData.map((m) => (
    <Message Message={m.Message} key={m.id} />
  ));

  return (
    <div className={styles.MessageList}>
      <div className={styles.Message}>{MessageElements}</div>
      <AddMessage
            newMessageText={props.MessagePage.newMessageText}
            AddMessage={props.AddMessage}
            onMessageChange={props.onMessageChange}
       />
    </div>
  );
};

export default MessageList;
