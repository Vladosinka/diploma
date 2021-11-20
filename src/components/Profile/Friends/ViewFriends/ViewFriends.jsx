import React from "react";
import styles from "./ViewFriends.module.css";

const ViewFriends = (props) => {
  return (
    <div className={styles.ViewFriends}>
      <div className={styles.imagefriends}>{props.FriendsImage}</div>
      <div className={styles.namefriends}>{props.FriendsName}</div>
    </div>
  );
};

export default ViewFriends;
