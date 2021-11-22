import React from "react";
import AddPost from "./AddPost/AddPost";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.ProfilePage.PostData.map((p) => (
    <Post
      message={p.Post}
      RepostsCount={p.RepostsCount}
      likesCount={p.likesCount}
    />
  ));

  return (
    <div>
      <AddPost
        newPostText={props.ProfilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
      <div className={styles.MyPosts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
