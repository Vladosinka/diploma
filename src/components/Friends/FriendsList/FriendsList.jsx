import React from "react";
import styles from "./FriendsList.module.css";
import FriendsVision from "./FriendsVision/FriendsVision";

const FriendsList = (props) => {
  let FriendsElements = props.Friends.map((f) => (
    <FriendsVision
      key={f.id}
      nameFriends={f.name}
      lastnameFriends={f.Lastname}
      userImageFriends={f.UserImage}
      Status={f.Status}
      followedFriends={f.followed}
      FriendsId={f.id}
      follow={props.follow}
      unfollow={props.unfollow}
      setFriendsAC={props.setFriendsAC}
    />
  ));

  return <div className={styles.FriendsList}>{FriendsElements}</div>;
};

export default FriendsList;
