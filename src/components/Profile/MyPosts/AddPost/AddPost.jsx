import React from "react";
import styles from "./AddPost.module.css";

const AddPost = (props) => {
  let NewsendMessageElement = React.createRef();

  let addPost = () => {
    let text = NewsendMessageElement.current.value;
    props.addPost(text);
    NewsendMessageElement.current.value = '';
  };

  return (
    <div className={styles.AddPost}>
      <div>
        <textarea ref={NewsendMessageElement} className={styles.Text} placeholder="Send a post" name="" id="" cols="30" rows="10"></textarea>
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
