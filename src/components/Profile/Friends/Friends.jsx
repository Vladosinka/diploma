import React from "react";
import styles from "./Friends.module.css";
import ViewFriends from "./ViewFriends/ViewFriends";
import FriendsOnline from "./FriendsOnline/FriendsOnline";

const Friends = (props) => {
  let state = props.Store.getState().ProfilePage;

  let FriendsElements = state.FriendsData.map((p) => (
    <ViewFriends FriendsName={p.FriendsName} FriendsImage={p.FriendsImage} />
  ));

  let FriendsOnlineElement = state.FriendsOnlineData.map((p) => (
    <FriendsOnline FriendsName={p.FriendsName} FriendsImage={p.FriendsImage} />
  ));

  return (
    <div className={styles.Friends}>
      <div className={styles.title}>Friends</div>
      <div className={styles.amountfriends}>{FriendsElements}</div>
      <div className={styles.title}>Friends only</div>
      <div className={styles.amountfriends}>{FriendsOnlineElement}</div>
    </div>
  );
};

export default Friends;
