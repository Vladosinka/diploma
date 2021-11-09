import React from "react";
import styles from "./UserList.module.css";
import User from "./User/User";

const UserList = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.user}>
        <User NameUser="Vasya" UserId="1" />
        <User NameUser="Sveta" UserId="2" />
        <User NameUser="Lena" UserId="3" />
        <User NameUser="Katya" UserId="4" />
        <User NameUser="Vlad" UserId="5" />
        <User NameUser="Natasha" UserId="6" />
        <User NameUser="Tolya" UserId="7" />
        <User NameUser="Petya" UserId="8" />
      </div>
    </div>
  );
};

export default UserList;
