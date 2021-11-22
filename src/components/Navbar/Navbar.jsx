import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.item}>
        <NavLink to="/profile">Profile </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/Friends">Friends </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs">Message </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/feed">News </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music">Music </NavLink>
      </div>
      <div className={`${styles.item} ${styles.last}`}>
        <NavLink to="/settings">Settings </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
