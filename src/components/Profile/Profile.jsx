import React from "react";
import styles from "./Profile.module.css";
import AvatarContainer from "./Avatar/AvatarContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import InformationContainer from "./Information/InformationContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.flex}>
        <AvatarContainer />
        <InformationContainer />
      </div>
      <div className={styles.flex}>
        <FriendsContainer
          Store={props.Store}
        />
        <MyPostsContainer
          Store={props.Store}
        />
      </div>
    </div>
  );
};

export default Profile;
