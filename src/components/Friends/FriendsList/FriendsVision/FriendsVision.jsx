import React from "react";
import AddFriends from "./AddFriends/AddFriends";
import styles from "./FriendsVision.module.css";

const FriendsVision = (props) => {
  return (
    <div className={styles.FriendsVision}>
      <div>
        {props.userImageFriends}
        {props.nameFriends}
        {props.lastnameFriends}
      </div>
      <div>
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
