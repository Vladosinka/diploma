import {combineReducers, createStore} from 'redux';
import ProfileReducer from "./profile-reducer"
import MessageReducer from "./Message-reducer"
import FriendsReducer from './Friends-reducer';

let redusers = combineReducers({
    ProfilePage: ProfileReducer,
    MessagePage: MessageReducer,
    FriendsPage: FriendsReducer
});

let Store = createStore (redusers);

export default Store;