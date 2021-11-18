import {combineReducers, createStore} from 'redux';
import ProfileReducer from "./profile-reducer"
import MessageReducer from "./Message-reducer"

let redusers = combineReducers({
    ProfilePage: ProfileReducer,
    MessagePage: MessageReducer
});

let Store = createStore (redusers);

export default Store;