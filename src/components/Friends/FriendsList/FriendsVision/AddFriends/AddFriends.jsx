import React from "react";
import styles from "./AddFriends.module.css";

const AddFriends = (props) => {
  return (
    <div className={styles.AddFriends}>
      {props.followedFriends ? (
        <button
          onClick={() => {
            props.unfollow(props.FriendsId);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            props.follow(props.FriendsId);
          }}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default AddFriends;
