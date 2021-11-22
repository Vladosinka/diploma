import Friends from "./Friends";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    ProfilePage: state.ProfilePage
  };
};


const FriendsContainer = connect(mapStateToProps, )(Friends);

export default FriendsContainer;
