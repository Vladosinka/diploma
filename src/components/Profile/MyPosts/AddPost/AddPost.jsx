import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profile-reducer";
import styles from "./AddPost.module.css";

const AddPost = (props) => {
  let NewsendMessageElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = NewsendMessageElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={styles.AddPost}>
        <textarea
          onChange={ onPostChange }
          value={props.newPostText}
          ref={NewsendMessageElement}
          className={styles.Text}
          placeholder="Send a post"
        ></textarea>
        <button className={styles.Buttons} onClick={addPost}>
          <img src="./image/icon/icons-button.png" alt="" />
        </button>
    </div>
  );
};

export default AddPost;
