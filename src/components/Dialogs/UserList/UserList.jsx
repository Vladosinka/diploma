import React from "react";
import styles from "./UserList.module.css";
import User from "./User/User";

const UserList = (props) => {
  
  let UserData = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Sveta" },
    { id: 3, name: "Lena" },
    { id: 4, name: "Katya" },
    { id: 5, name: "Vlad" },
    { id: 6, name: "Natasha" },
    { id: 7, name: "Tolya" },
    { id: 8, name: "Petya" },
    { id: 9, name: "Vasya" },
    { id: 10, name: "Sveta" },
    { id: 11, name: "Lena" },
    { id: 12, name: "Katya" },
    { id: 13, name: "Vlad" },
    { id: 14, name: "Natasha" },
    { id: 15, name: "Tolya" },
    { id: 16, name: "Petya" },
  ];

  let UserElements = UserData.map((u) => (
    <User NameUser={u.name} UserId={u.id} />
  ));

  return (
    <div className={styles.item}>
      <div className={styles.user}>{UserElements}</div>
    </div>
  );
};

export default UserList;
