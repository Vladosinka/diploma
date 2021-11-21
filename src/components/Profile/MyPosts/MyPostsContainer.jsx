import React from "react";
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  let state = props.Store.getState().ProfilePage;

  let addPost = () => {
    props.Store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.Store.dispatch(action);
  };

  return (
    <MyPosts
      PostData={state.PostData}
      newPostText={state.newPostText}
      updateNewPostText={onPostChange}
      addPost={addPost}
    />
  );
};

export default MyPostsContainer;
