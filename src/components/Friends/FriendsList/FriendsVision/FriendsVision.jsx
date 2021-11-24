import React from "react";
import AddFriends from "./AddFriends/AddFriends";
import styles from "./FriendsVision.module.css";

const FriendsVision = (props) => {
  return (
    <div className={styles.FriendsVision}>
      <div className={styles.Info}>
        <div className={styles.Avatar}>{props.userImageFriends}</div>
        <div className={styles.Title}>{props.nameFriends}      {props.lastnameFriends}</div>
        <div className={styles.Subtitle}>{props.Status}</div>
      </div>
      <div className={styles.Button}>
        <AddFriends
          followedFriends={props.followedFriends}
          FriendsId={props.FriendsId}
          follow={props.follow}
          unfollow={props.unfollow}
          setFriendsAC={props.setFriendsAC}
        />
      </div>
    </div>
  );
};

export default FriendsVision;
