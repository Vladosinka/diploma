import React from "react";
import styles from "./Friends.module.css";

const Friends = () => {
  return (
    <div className={styles.Friends}>
      <div className={styles.title}>Friends</div>
      <div className={styles.amountfriends}></div>
      <div className={styles.title}>Friends only</div>
      <div className={styles.amountfriends}></div>
    </div>
  );
};

export default Friends;
