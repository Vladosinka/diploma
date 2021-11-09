import React from "react";
import styles from "./MessageList.module.css";
import Message from "./Message/Message";

const MessageList = (props) => {
  return (
    <div className={styles.item}>
      <Message Message="Hi" />
      <Message Message="At what stage is your diploma?" />
      <Message Message="In developing)" />
    </div>
  );
};

export default MessageList;
