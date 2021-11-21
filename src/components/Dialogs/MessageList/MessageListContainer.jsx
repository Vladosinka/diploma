import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/Message-reducer";
import MessageList from "./MessageList";

const MessageListContainer = (props) => {
  let state = props.Store.getState().MessagePage;

  let AddMessages = () => {
    props.Store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.Store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <MessageList
      MessageData={state.MessageData}
      newMessageText={state.newMessageText}
      AddMessage={AddMessages}
      onMessageChange={onMessageChange}
    />
  );
};

export default MessageListContainer;
