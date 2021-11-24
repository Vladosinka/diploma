const FOLLOW_FRIENDS = "FOLLOW_FRIENDS";
const UNFOLLOW_FRIENDS = "UNFOLLOW_FRIENDS";
const SET_FRIENDS = "SET_FRIENDS";

let initialState = {

    Friends: [
        { id: 7, followed: true, name: "Yan", Lastname: "Ivanov", UserImage: <img src="./image/imageUser/7.jpg" alt='' />, Status:"I am React developer" },
        { id: 8, followed: false, name: "Sergei", Lastname: "Petrov", UserImage: <img src="./image/imageUser/8.jpg" alt='' />, Status:"I am a student" },
        { id: 9, followed: true, name: "Anna", Lastname: "Sidorova", UserImage: <img src="./image/imageUser/9.jpg" alt='' />, Status:"I am an engineer" },
        { id: 4, followed: false, name: "Tanya", Lastname: "Smith", UserImage: <img src="./image/imageUser/4.jpg" alt='' />, Status:"I like singing" },
        { id: 5, followed: true, name: "Petya", Lastname: "Ksavier", UserImage: <img src="./image/imageUser/5.jpg" alt='' />, Status:"I am the best programmer" },
        { id: 6, followed: false, name: "Nastya", Lastname: "Kipelov", UserImage: <img src="./image/imageUser/6.jpg" alt='' />, Status:"I want to take your clothes" },
        { id: 1, followed: true, name: "Vasya", Lastname: "Bener", UserImage: <img src="./image/imageUser/1.jpg" alt='' />, Status:"I really love to read" },
        { id: 2, followed: false, name: "Petya", Lastname: "Stark", UserImage: <img src="./image/imageUser/2.jpg" alt='' />, Status:"I do yoga professionally" },
        { id: 3, followed: true, name: "Sasha", Lastname: "Mask", UserImage: <img src="./image/imageUser/3.jpg" alt='' />, Status:"I study English" }
      ]
};

const FriendsReducer = (State = initialState, action) => {

    switch(action.type){
        case FOLLOW_FRIENDS:
            return {
                ...State,
                Friends: State.Friends.map( f => {
                    if (f.id === action.FriendsId){
                        return {...f, followed: true }
                    }
                    return f;
                })
            }
            
        case UNFOLLOW_FRIENDS:
            return{
                ...State,
                Friends: State.Friends.map( f =>  {
                    if (f.id === action.FriendsId){
                        return {...f, followed: false}
                    }
                    return f;
                })
            }

        case SET_FRIENDS:
            return{
                ...State,
                Friends: [...State.Friends, ...action.Friends]
            }
            
        default:
            return State;
        }

}
export const followAC = (FriendsId) => ({type: FOLLOW_FRIENDS, FriendsId}); 
export const unfollowAC = (FriendsId) => ({type: UNFOLLOW_FRIENDS, FriendsId});
export const setFriendsAC = (Friends) => ({type: SET_FRIENDS, Friends});  

export default FriendsReducer;
