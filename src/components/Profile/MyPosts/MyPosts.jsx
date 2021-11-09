import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.MyPosts}>
      <div>
        <textarea></textarea>
        <button>Add post!</button>
      </div>
      My posts
      <div className={styles.posts}>
        <Post message="Hello, how are you?" RepostsCount="20" likesCount="15"/>
        <Post message="It's my first post" RepostsCount="15" likesCount="20"/>
      </div>
    </div>
  );
};

export default MyPosts;
