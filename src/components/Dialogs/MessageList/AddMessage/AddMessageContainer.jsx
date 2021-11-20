import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/Message-reducer";
import AddMessage from "./AddMessage";

const AddMessageContainer = (props) => {
  let state = props.Store.getState().MessagePage;

  let AddMessages = () => {
    props.Store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.Store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <AddMessage
      newMessageText={state.newMessageText}
      AddMessage={AddMessages}
      onMessageChange={onMessageChange}
    />
  );
};

export default AddMessageContainer;
