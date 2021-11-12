import React from "react";
import styles from "./ViewFriends.module.css";

const ViewFriends = (props) => {
  return (
    <div className={styles.ViewFriends}>
        <div>{props.FriendsName}</div>
        <div>{props.FriendsImage}</div>
    </div>
  );
};

export default ViewFriends;
