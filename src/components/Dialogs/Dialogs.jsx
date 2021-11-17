import React from "react";
import styles from "./Dialogs.module.css";
import MessageList from "./MessageList/MessageList";
import UserList from "./UserList/UserList";

const Dialogs = (props) => {
  return (
      <div className={styles.flex}>
        <UserList UserData={props.MessagePage.UserData} />
        <MessageList
          MessageData={props.MessagePage.MessageData}
          newMessageText={props.MessagePage.newMessageText}
          dispatch={props.dispatch}
        />
      </div>
  );
};

export default Dialogs;
