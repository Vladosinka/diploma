import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = [
    { id: 1, Post: "Hello, how are you?", RepostsCount: "15", likesCount: "20"},
    { id: 2, Post: "It's my first post", RepostsCount: "15", likesCount: "20" },
    { id: 3, Post: "I'm fine", RepostsCount: "15", likesCount: "20" },
    { id: 4, Post: "Yo", RepostsCount: "15", likesCount: "20" },
    { id: 5, Post: "Yo", RepostsCount: "15", likesCount: "20" },
    { id: 6, Post: "Yo", RepostsCount: "15", likesCount: "20" },
    { id: 7, Post: "Yo", RepostsCount: "15", likesCount: "20" },
    { id: 8, Post: "Yo", RepostsCount: "15", likesCount: "20" },
  ];

  let postsElements = postsData.map((p) => (
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
