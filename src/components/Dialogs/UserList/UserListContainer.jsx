import UserList from "./UserList";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    MessagePage: state.MessagePage,
  };
};

const UserListContainer = connect(mapStateToProps)(UserList);

export default UserListContainer;
