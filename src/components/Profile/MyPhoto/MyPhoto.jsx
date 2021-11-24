import React from "react";
import styles from "./MyPhoto.module.css";
import Photo from "./Photo/Photo";

const MyPhoto = (props) => {
  let PhotoElements = props.ProfilePage.MyPhotoData.map((p) => (
    <Photo key={p.id} MyPhoto={p.MyPhoto} />
  ));

  return (
    <div className={styles.MyPhoto}>
      <div className={styles.Title}>MyPhoto</div>
      <div className={styles.Flex}>{PhotoElements}</div>
    </div>
  );
};

export default MyPhoto;
