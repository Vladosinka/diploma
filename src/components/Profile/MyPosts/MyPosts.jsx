import React from "react";
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

let NewPostElement = React.createRef();

let addPost = () => {
  let text = NewPostElement.current.value;
  alert(text)
};

  return (
    <div className={styles.MyPosts}>
      <div>
        <textarea ref={NewPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post!</button>
      </div>
      My posts
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
