import React from "react";
import styles from "./Dialogs.module.css";
import MessageListContainer from "./MessageList/MessageListContainer";
import UserListContainer from "./UserList/UserListContainer";

const Dialogs = (props) => {
  return (
    <div className={styles.flex}>
      <UserListContainer/>
      <MessageListContainer/>
    </div>
  );
};

export default Dialogs;
