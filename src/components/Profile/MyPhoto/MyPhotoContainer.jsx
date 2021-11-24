import MyPhoto from "./MyPhoto"
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    ProfilePage: state.ProfilePage,
  };
};


const MyPhotoContainer = connect(mapStateToProps, )(MyPhoto);

export default MyPhotoContainer;
