import React from "react";
import AddPostContainer from "./AddPost/AddPostContainer";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let state = props.Store.getState().ProfilePage;

  let postsElements = state.PostData.map((p) => (
    <Post
      message={p.Post}
      RepostsCount={p.RepostsCount}
      likesCount={p.likesCount}
    />
  ));

  return (
    <div>
      <AddPostContainer Store={props.Store} />
      <div className={styles.MyPosts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
