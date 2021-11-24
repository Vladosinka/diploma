import React from "react";
import styles from "./MyPhoto.module.css";

const MyPhoto = () => {
  return (
    <div className={styles.MyPhoto}>
      <div className={styles.Title}>MyPhoto</div>
      <div className={styles.Flex}>
        <div className={styles.imgback}>
          {<img src="https://c1.staticflickr.com/1/684/21763401225_f96b648c66_b.jpg" />}
        </div>

        <div className={`${styles.imgback} ${styles.imgbackportrait}`}>
          <img src="https://c1.staticflickr.com/1/600/21560453269_0d3cf606e3_b.jpg" />
        </div>

        <div className={styles.imgback}>
          <img src="https://c1.staticflickr.com/1/736/21748578862_970227caa4_b.jpg" />
        </div>

        <div className={styles.imgback}>
          <img src="https://c2.staticflickr.com/6/5662/21567273108_de292e97bf_b.jpg" />
        </div>
      </div>
    </div>
  );
};

export default MyPhoto;
