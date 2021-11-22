import Avatar from "./Avatar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    ProfilePage: state.ProfilePage,
  };
};

const AvatarContainer = connect(mapStateToProps, )(Avatar);

export default AvatarContainer;
