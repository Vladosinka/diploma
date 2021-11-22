import {followAC, unfollowAC, setFriendsAC} from "../../../redux/Friends-reducer"
import FriendsList from "./FriendsList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    Friends: state.FriendsPage.Friends,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (FriendsId) => {
      dispatch(followAC(FriendsId));
    },
    unfollow: (FriendsId) => {
      dispatch(unfollowAC(FriendsId));
    },
    setFriends: (Friends) => {
      dispatch(setFriendsAC(Friends));
    },
  };
}; 

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;
