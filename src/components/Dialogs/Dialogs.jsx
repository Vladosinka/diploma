import React from "react";
import styles from "./Dialogs.module.css";
import MessageList from "./MessageList/MessageList";
import UserList from "./UserList/UserList";

const Dialogs = (props) => {
  return (
    <div className={styles.item}>
      
      <div className={styles.flex}>
        <UserList UserData={props.State.UserData} />
        <MessageList MessageData={props.State.MessageData} />
      </div>
    </div>
  );
};

export default Dialogs;
