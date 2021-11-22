import React from "react";
import styles from "./Friends.module.css"
import FriendsListContainer from "./FriendsList/FriendsListContainer";

const Friends = (props) => {
    return <div className={styles.Friends}>
      < FriendsListContainer/>
    </div>;
  };

export default Friends