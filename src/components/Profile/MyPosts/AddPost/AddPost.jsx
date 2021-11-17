import React from "react";
import styles from "./AddPost.module.css";

const AddPost = (props) => {
  let NewsendMessageElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: "ADD_POST"});
  };

  let onPostChange = () => {
    let text = NewsendMessageElement.current.value;
    props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
  };

  return (
    <div className={styles.AddPost}>
      <div>
        <textarea
          onChange={ onPostChange }
          value={props.newPostText}
          ref={NewsendMessageElement}
          className={styles.Text}
          placeholder="Send a post"
        ></textarea>
      </div>
      <div>
        <button className={styles.Buttons} onClick={addPost}>
          <img src="./image/icon/icons-button.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddPost;
