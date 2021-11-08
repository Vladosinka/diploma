import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
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
