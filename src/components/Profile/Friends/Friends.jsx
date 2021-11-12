import React from "react";
import styles from "./Friends.module.css";
import ViewFriends from "./ViewFriends/ViewFriends";

const Friends = (props) => {

  let FriendsElements = props.FriendsData.map((p) => (
    <ViewFriends
      FriendsName={p.FriendsName}
      FriendsImage={p.FriendsImage}
    />
  ));

  return (
    <div className={styles.Friends}>
      <div className={styles.title}>Friends</div>
      <div className={styles.amountfriends}>{FriendsElements}</div>
      <div className={styles.title}>Friends only</div>
      <div className={styles.amountfriends}></div>
    </div>
  );
};

export default Friends;
