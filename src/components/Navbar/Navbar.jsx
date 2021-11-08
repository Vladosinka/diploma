import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.item}>
        <a href="/profile">Profile </a>
      </div>
      <div className={styles.item}>
        <a href="/dialogs ">Message </a>
      </div>
      <div className={styles.item}>
        <a href="/feed">News </a>
      </div>
      <div className={styles.item}>
        <a href="/music">Music </a>
      </div>
      <div className={`${styles.item} ${styles.last}`}>
        <a href="/settings">Settings </a>
      </div>
    </nav>
  );
};

export default Navbar;
