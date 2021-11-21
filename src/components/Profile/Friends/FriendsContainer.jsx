import React from "react";
import Friends from "./Friends";


const FriendsContainer = (props) => {
  let state = props.Store.getState().ProfilePage;



  return (
    <Friends 
      FriendsData={state.FriendsData}
      FriendsOnlineData={state.FriendsOnlineData}
    />
  );
};

export default FriendsContainer;
