import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "./Avatar/Avatar";
import Friends from "./Friends/Friends";
import Information from "./Information/Information";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.flex}>
        <Avatar />
        <Information />
      </div>
      <div className={styles.flex}>
        <Friends FriendsData={props.State.FriendsData} />
        <MyPosts PostData={props.State.PostData} />
      </div>
    </div>
  );
};

export default Profile;
