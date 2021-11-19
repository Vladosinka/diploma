import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../redux/Message-reducer";
import styles from "./AddMessage.module.css";

const AddMessage = (props) => {

  let state = props.Store.getState().MessagePage

  let NewaddMessageElement = React.createRef();

  let AddMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = NewaddMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text))
  };

  return (
        <div className={styles.wrapperText}>
            <textarea 
            onChange={onMessageChange}
            value={state.newMessageText}
            ref={NewaddMessageElement} 
            className={styles.Text} 
            placeholder="Send a message"></textarea>
            <button className={styles.Buttons} onClick={AddMessage}>
              <img src="./image/icon/icons-button.png" alt="" />
            </button>
        </div>
  );
};

export default AddMessage;
