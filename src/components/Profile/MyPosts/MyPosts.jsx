import React from "react";
import AddPost from "./AddPost/AddPost";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.PostData.map((p) => (
    <Post
      message={p.Post}
      RepostsCount={p.RepostsCount}
      likesCount={p.likesCount}
    />
  ));

  return (
    <div>
      <AddPost dispatch={props.dispatch} newPostText={props.newPostText} />
      <div className={styles.MyPosts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
