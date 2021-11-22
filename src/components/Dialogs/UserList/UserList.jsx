import React from "react";
import styles from "./UserList.module.css";
import User from "./User/User";

const UserList = (props) => {

  let UserElements = props.MessagePage.UserData.map((u) => (
    <User
      key={u.id}
      UserImage={u.UserImage}
      NameUser={u.name}
      Lastname={u.Lastname}
      UserId={u.id}
    />
  ));

  return <div className={styles.item}>{UserElements}</div>;
};

export default UserList;
