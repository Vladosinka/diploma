const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

 const MessageReducer = (State, action) =>{
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage ={
                id: 20,
                Message: State.newMessageText
            };
            State.MessageData.push(newMessage);
            State.newMessageText = "";
            return State;
        case UPDATE_NEW_MESSAGE_TEXT:
            State.newMessageText = action.newTextMessage;
            return State;
        default:
            return State;
    }
}

export  const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export  const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text})
export default MessageReducer;