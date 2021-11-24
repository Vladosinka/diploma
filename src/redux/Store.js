import MessageReducer from "./Message-reducer";
import ProfileReducer from "./profile-reducer";

let Store = {

    _State: {
        ProfilePage:{

          PostData: [
              { id: 1, Post: "Hello, how are you?", RepostsCount: "15", likesCount: "20" },
              { id: 2, Post: "It's my first post", RepostsCount: "15", likesCount: "20" },
              { id: 3, Post: "I'm fine", RepostsCount: "15", likesCount: "20" },
              { id: 4, Post: "Yo", RepostsCount: "15", likesCount: "20" },
              { id: 5, Post: "Yo", RepostsCount: "15", likesCount: "20" },
              { id: 6, Post: "Yo", RepostsCount: "15", likesCount: "20" },
              { id: 7, Post: "Yo", RepostsCount: "15", likesCount: "20" },
              { id: 8, Post: "Yo", RepostsCount: "15", likesCount: "20" },
          ],
  
          newPostText:"",
  
          FriendsData:[
              { id: 1, FriendsName: "Vasya", FriendsImage: <img src="./image/imageFriends/1.jpg" alt=''/> },
              { id: 2, FriendsName: "Petya", FriendsImage: <img src="./image/imageFriends/2.jpg" alt='' /> },
              { id: 3, FriendsName: "Sasha", FriendsImage: <img src="./image/imageFriends/3.jpg" alt='' /> },
              { id: 4, FriendsName: "Tanya", FriendsImage: <img src="./image/imageFriends/4.jpg" alt='' /> },
              { id: 5, FriendsName: "Petya", FriendsImage: <img src="./image/imageFriends/5.jpg" alt='' /> },
              { id: 6, FriendsName: "Nastya", FriendsImage: <img src="./image/imageFriends/6.jpg" alt='' /> },
              { id: 7, FriendsName: "Yan", FriendsImage: <img src="./image/imageFriends/7.jpg" alt='' /> },
              { id: 8, FriendsName: "Sergei", FriendsImage: <img src="./image/imageFriends/8.jpg" alt='' /> },
              { id: 9, FriendsName: "Natasha", FriendsImage: <img src="./image/imageFriends/9.jpg" alt='' /> }
          ],
  
          FriendsOnlineData:[
              { id: 5, FriendsName: "Petya", FriendsImage: <img src="./image/imageFriends/5.jpg" alt='' /> },
              { id: 6, FriendsName: "Nastya", FriendsImage: <img src="./image/imageFriends/6.jpg" alt='' /> },
              { id: 7, FriendsName: "Yan", FriendsImage: <img src="./image/imageFriends/7.jpg" alt='' /> },
              { id: 8, FriendsName: "Sergei", FriendsImage: <img src="./image/imageFriends/8.jpg" alt='' /> },
              { id: 9, FriendsName: "Natasha", FriendsImage: <img src="./image/imageFriends/9.jpg" alt='' /> },
              { id: 1, FriendsName: "Vasya", FriendsImage: <img src="./image/imageFriends/1.jpg" alt='' /> },
              { id: 2, FriendsName: "Petya", FriendsImage: <img src="./image/imageFriends/2.jpg" alt='' /> },
              { id: 3, FriendsName: "Sasha", FriendsImage: <img src="./image/imageFriends/3.jpg" alt='' /> },
              { id: 4, FriendsName: "Tanya", FriendsImage: <img src="./image/imageFriends/4.jpg" alt='' /> }
          ]
    },
  
        MessagePage:{
  
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
  
          newMessageText:"",
  
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
            
        }
    },

    _callSubscriber () {
        console.log("State changed");
    },

    getState (){
        return this._State;
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._State.ProfilePage = ProfileReducer(this._State.ProfilePage, action);
        this._State.MessagePage = MessageReducer(this._State.MessagePage, action);
        
        this._callSubscriber(this._State);
        }

}

export default Store;
window.Store = Store;
