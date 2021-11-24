import React from "react";
import styles from "./Photo.module.css";

const Photo = (props) => {
  return (
    <div className={styles.Photo}>
        <div className={styles.imgback}>
          {props.MyPhoto}
        </div>
    </div>
  );
};

export default Photo;
