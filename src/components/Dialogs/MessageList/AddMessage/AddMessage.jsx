import React from "react";
import styles from "./AddMessage.module.css";

const AddMessage = (props) => {
  let NewaddMessageElement = React.createRef();

  let AddMessage = () => {
   props.dispatch({type: "ADD_MESSAGE"});
  };

  let onMessageChange = () => {
    let text = NewaddMessageElement.current.value;
    props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newTextMessage: text})
  };

  return (
        <div className={styles.wrapperText}>
          <div>
            <textarea 
            onChange={onMessageChange}
            value={props.newMessageText}
            ref={NewaddMessageElement} 
            className={styles.Text} 
            placeholder="Send a message"></textarea>
          </div>
          <div>
            <button className={styles.Buttons} onClick={AddMessage}>
              <img src="./image/icon/icons-button.png" alt="" />
            </button>
          </div>
        </div>
  );
};

export default AddMessage;
