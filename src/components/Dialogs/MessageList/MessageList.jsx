import React from "react";
import styles from "./MessageList.module.css";
import Message from "./Message/Message";

const MessageList = (props) => {
  
  let MessageElements = props.MessageData.map((m) => <Message Message={m.Message} />);

  return <div className={styles.item}>{MessageElements}</div>;
};

export default MessageList;
