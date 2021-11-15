import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "./Avatar/Avatar";
import Friends from "./Friends/Friends";
import Information from "./Information/Information";
import { updateNewPostText } from "../../redux/State";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.flex}>
        <Avatar />
        <Information />
      </div>
      <div className={styles.flex}>
        <Friends FriendsData={props.State.FriendsData} FriendsOnlineData={props.State.FriendsOnlineData} />
        <MyPosts PostData={props.State.PostData} newPostText={props.State.newPostText} addPost={props.addPost} updateNewPostText={updateNewPostText}/>
      </div>
    </div>
  );
};

export default Profile;
