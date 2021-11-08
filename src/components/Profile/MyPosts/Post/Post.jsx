import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <div className={styles.item}>
      <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
      Post 1
      <div>
        <span>Repost </span>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
