import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.user}>
        <NavLink to={"/dialogs/" + props.UserId}>
          <div className={styles.flex}>
            <div >{props.UserImage}</div>
            <div className={styles.name}>{props.NameUser} {props.Lastname}</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default User;
