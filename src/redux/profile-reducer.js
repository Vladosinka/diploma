const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const ProfileReducer = (State, action) =>{

    switch(action.type){
        case ADD_POST:
            let newPost ={
                id: 10,
                Post: State.newPostText,
                RepostsCount: 0,
                likesCount: 0
            };
            State.PostData.push(newPost);
            State.newPostText = "";
            return State;
        case UPDATE_NEW_POST_TEXT:
            State.newPostText = action.newText;
            return State;
        default:
            return State;
        }

}
export const addPostActionCreator = () => ({type: ADD_POST}); 
export  const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default ProfileReducer;