const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {

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
    ],

    MyPhotoData:[
        {id: "1", MyPhoto: <img src="./image/imageMyPhoto/1.jpg" alt='' /> },
        {id: "2", MyPhoto: <img src="./image/imageMyPhoto/2.jpg" alt='' /> },
        {id: "3", MyPhoto: <img src="./image/imageMyPhoto/3.jpg" alt='' /> },
        {id: "4", MyPhoto: <img src="./image/imageMyPhoto/4.jpg" alt='' /> }
    ]
};

const ProfileReducer = (State = initialState, action) => {

    switch(action.type){
        case ADD_POST:
            let newPost ={
                id: 10,
                Post: State.newPostText,
                RepostsCount: 0,
                likesCount: 0
            };
            return{
                ...State,
                PostData: [...State.PostData, newPost],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...State,
                newPostText: action.newText
            }
        default:
            return State;
        }

}
export const addPostActionCreator = () => ({type: ADD_POST}); 
export  const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default ProfileReducer;
