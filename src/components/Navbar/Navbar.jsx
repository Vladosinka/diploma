import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.item}>
        <a>Profile </a>
      </div>
      <div className={styles.item}>
        <a>Message </a>
      </div>
      <div className={styles.item}>
        <a>News </a>
      </div>
      <div className={styles.item}>
        <a>Music </a>
      </div>
      <div className={`${styles.item} ${styles.last}`}>
        <a>Settings </a>
      </div>
    </nav>
  );
};

export default Navbar;
