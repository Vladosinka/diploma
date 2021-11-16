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
      <div>
        <AddPost
          addPost={props.addPost}
          newPostText={props.newPostText}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
      <div className={styles.MyPosts}>
        <div className={styles.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
