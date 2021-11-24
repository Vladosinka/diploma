import React from "react";
import styles from "./Profile.module.css";
import AvatarContainer from "./Avatar/AvatarContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import InformationContainer from "./Information/InformationContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyPhoto from "./MyPhoto/MyPhoto";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.flex}>
        <AvatarContainer />
        <div>
        <InformationContainer />
        < MyPhoto />
        </div>
      </div>
      <div className={styles.flex}>
        <FriendsContainer/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;
