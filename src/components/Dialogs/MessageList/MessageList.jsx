import React from "react";
import styles from "./MessageList.module.css";
import Message from "./Message/Message";

const MessageList = (props) => {
  let MessageElements = props.MessageData.map((m) => (
    <Message Message={m.Message} />
  ));

  let NewsendMessageElement = React.createRef();
  let sendMessage = () => {
    let textMessage = NewsendMessageElement.current.value;
    alert(textMessage)
  };

  return (
    <div>
      <div className={styles.MessageList}>
        <div className={styles.Message}>{MessageElements}</div>
        <div className={styles.wrapperText}>
          <div>
            <textarea ref={NewsendMessageElement} className={styles.Text} name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <button className={styles.Buttons} onClick={sendMessage}>
              <img src="./image/icon/icons-button.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
