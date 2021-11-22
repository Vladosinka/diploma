const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
  
    MessageData: [
        { id: 1, Message: "Hi" },
        { id: 2, Message: "At what stage is your diploma?" },
        { id: 3, Message: "In developing" },
        { id: 4, Message: "Well done, don't give up, you will succeed" },
        { id: 5, Message: "Yo" },
        { id: 6, Message: "Yo" },
        { id: 7, Message: "Yo" },
        { id: 8, Message: "Yo" },
        { id: 9, Message: "Hi" },
        { id: 10, Message: "At what stage is your diploma?" },
        { id: 11, Message: "In developing" },
        { id: 12, Message: "Well done, don't give up, you will succeed" },
        { id: 13, Message: "Yo" },
        { id: 14, Message: "Yo" },
        { id: 15, Message: "Yo" },
        { id: 16, Message: "Yo" },
      ],

    newMessageText:"It-kamasutra.com",

    UserData: [
        { id: 7, name: "Yan", Lastname: "Ivanov", UserImage: <img src="./image/imageUser/7.jpg" alt='' /> },
        { id: 8, name: "Sergei", Lastname: "Petrov", UserImage: <img src="./image/imageUser/8.jpg" alt='' /> },
        { id: 9, name: "Natasha", Lastname: "Sidorov", UserImage: <img src="./image/imageUser/9.jpg" alt='' /> },
        { id: 4, name: "Tanya", Lastname: "Smith", UserImage: <img src="./image/imageUser/4.jpg" alt='' /> },
        { id: 5, name: "Petya", Lastname: "Ksavier", UserImage: <img src="./image/imageUser/5.jpg" alt='' /> },
        { id: 6, name: "Nastya", Lastname: "Kipelov", UserImage: <img src="./image/imageUser/6.jpg" alt='' /> },
        { id: 1, name: "Vasya", Lastname: "Bener", UserImage: <img src="./image/imageUser/1.jpg" alt='' /> },
        { id: 2, name: "Petya", Lastname: "Stark", UserImage: <img src="./image/imageUser/2.jpg" alt='' /> },
        { id: 3, name: "Sasha", Lastname: "Mask", UserImage: <img src="./image/imageUser/3.jpg" alt='' /> }
      ]
      
  };

 const MessageReducer = (State = initialState, action) =>{
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage ={
                id: 20,
                Message: State.newMessageText
            };
            return {
                ...State,
                MessageData: [...State.MessageData, newMessage],
                newMessageText: ""
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return{
                ...State,
                newMessageText: action.newTextMessage
            };
        default:
            return State;
    }
}

export  const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export  const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text})

export default MessageReducer;
