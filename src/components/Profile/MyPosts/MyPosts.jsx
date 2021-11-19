import React from "react";
import AddPost from "./AddPost/AddPost";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let state = props.Store.getState().ProfilePage

  let postsElements = state.PostData.map((p) => (
    <Post
      message={p.Post}
      RepostsCount={p.RepostsCount}
      likesCount={p.likesCount}
    />
  ));

  return (
    <div>
      <AddPost Store={props.Store} dispatch={props.dispatch} />
      <div className={styles.MyPosts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
