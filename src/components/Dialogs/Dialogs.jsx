import React from "react";
import styles from "./Dialogs.module.css";
import MessageList from "./MessageList/MessageList";
import UserList from "./UserList/UserList";

const Dialogs = (props) => {
  return (
      <div className={styles.flex}>
        <UserList 
        Store={props.Store}
        />
        <MessageList
          Store={props.Store}
          dispatch={props.dispatch}
        />
      </div>
  );
};

export default Dialogs;
