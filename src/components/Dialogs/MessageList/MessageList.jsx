import React from "react";
import styles from "./MessageList.module.css";
import Message from "./Message/Message";

const MessageList = (props) => {
  let MessageElements = props.MessageData.map((m) => (
    <Message Message={m.Message} />
  ));
  
  let NewaddMessageElement = React.createRef();
  let addMessage = () => {
    let text = NewaddMessageElement.current.value;
    props.addMessage(text);
    NewaddMessageElement.current.value = '';
  };

  return (
    <div>
      <div className={styles.MessageList}>
        <div className={styles.Message}>{MessageElements}</div>
        <div className={styles.wrapperText}>
          <div>
            <textarea
              ref={NewaddMessageElement}
              className={styles.Text}
              placeholder="Send a message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button className={styles.Buttons} onClick={addMessage}>
              <img src="./image/icon/icons-button.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
