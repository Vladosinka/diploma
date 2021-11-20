import React from "react";
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) => {
  let state = props.Store.getState().ProfilePage;

  let addPost = () => {
    props.Store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.Store.dispatch(action);
  };

  return (
    <AddPost
      updateNewPostText={onPostChange}
      addPost={addPost}
      newPostText={state.newPostText}
    />
  );
};

export default AddPostContainer;
