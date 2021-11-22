import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/Message-reducer";
import MessageList from "./MessageList";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    MessagePage: state.MessagePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    AddMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList);

export default MessageListContainer;
