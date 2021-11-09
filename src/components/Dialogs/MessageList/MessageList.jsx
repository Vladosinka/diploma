import React from "react";
import styles from "./MessageList.module.css";
import Message from "./Message/Message";

const MessageList = (props) => {
  
  let MessageData = [
    { id: 1, Message: "Hi" },
    { id: 2, Message: "At what stage is your diploma?" },
    { id: 3, Message: "In developing" },
    { id: 4, Message: "Well done, don't give up, you will succeed" },
    { id: 5, Message: "Yo" },
    { id: 6, Message: "Yo" },
    { id: 7, Message: "Yo" },
    { id: 8, Message: "Yo" },
  ];

  let MessageElements = MessageData.map((m) => <Message Message={m.Message} />);

  return <div className={styles.item}>{MessageElements}</div>;
};

export default MessageList;
