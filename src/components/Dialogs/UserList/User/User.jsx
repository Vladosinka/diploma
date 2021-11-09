import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.user}>
        <NavLink to={"/dialogs/" + props.UserId}>{props.NameUser}</NavLink>
      </div>
    </div>
  );
};

export default User;
