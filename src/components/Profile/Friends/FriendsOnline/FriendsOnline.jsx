import React from "react";
import styles from "./FriendsOnline.module.css";

const FriendsOnline = (props) => {
  return (
    <div className={styles.FriendsOnline}>
      <div className={styles.imagefriends}>{props.FriendsImage}</div>
      <div className={styles.namefriends}>{props.FriendsName}</div>
    </div>
  );
};

export default FriendsOnline;
