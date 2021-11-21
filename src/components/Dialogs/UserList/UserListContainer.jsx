import React from "react";
import UserList from "./UserList";

const UserListContainer = (props) => {
  let state = props.Store.getState().MessagePage;

  return <UserList UserData={state.UserData} />;
};

export default UserListContainer;
