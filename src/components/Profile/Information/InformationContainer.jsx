import Information from "./Information"
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    ProfilePage: state.ProfilePage,
  };
};


const InformationContainer = connect(mapStateToProps, )(Information);

export default InformationContainer;
