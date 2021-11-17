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
        <Friends
          FriendsData={props.ProfilePage.FriendsData}
          FriendsOnlineData={props.ProfilePage.FriendsOnlineData}
        />
        <MyPosts
          PostData={props.ProfilePage.PostData}
          newPostText={props.ProfilePage.newPostText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Profile;
