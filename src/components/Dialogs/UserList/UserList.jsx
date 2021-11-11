import React from "react";
import styles from "./UserList.module.css";
import User from "./User/User";

const UserList = (props) => {
  
  let UserElements = props.UserData.map((u) => (
    <User NameUser={u.name} UserId={u.id} />
  ));

  return (
    <div className={styles.item}>
      <div className={styles.user}>{UserElements}</div>
    </div>
  );
};

export default UserList;
