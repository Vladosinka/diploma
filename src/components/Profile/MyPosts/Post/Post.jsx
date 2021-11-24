/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      {props.PostImage}
      {props.message}
      <div>
        {props.likesCount}
        <span> like </span>
        {props.RepostsCount}
        <span> Repost </span>
      </div>
    </div>
  );
};

export default Post;
