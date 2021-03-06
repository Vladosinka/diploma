import React from "react";
import styles from "./AddMessage.module.css";

const AddMessage = (props) => {
  let NewaddMessageElement = React.createRef();

  let AddMessage = () => {
    props.AddMessage();
  };

  let onMessageChange = () => {
    let text = NewaddMessageElement.current.value;
    props.onMessageChange(text);
  };

  return (
    <div className={styles.wrapperText}>
      <textarea
        onChange={onMessageChange}
        value={props.newMessageText}
        ref={NewaddMessageElement}
        className={styles.Text}
        placeholder="Send a message"
      ></textarea>
      <button className={styles.Buttons} onClick={AddMessage}>
        <img src="./image/icon/icons-button.png" alt="" />
      </button>
    </div>
  );
};

export default AddMessage;
