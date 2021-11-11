import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => { debugger
  
  let postsElements = props.PostData.map((p) => (
    <Post
      message={p.Post}
      RepostsCount={p.RepostsCount}
      likesCount={p.likesCount}
    />
  ));

  return (
    <div className={styles.MyPosts}>
      <div>
        <textarea></textarea>
        <button>Add post!</button>
      </div>
      My posts
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
