/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.flex}>
        {props.PostImage}
        <div className={styles.Name}>
          {props.Name} {props.Lastname}
        </div>
      </div>
      <div className={styles.message}>{props.message}</div>
      <div className={styles.menubar}>
        {props.likesCount}
        <span> like </span>
        {props.RepostsCount}
        <span> Repost </span>
      </div>
    </div>
  );
};

export default Post;
