import * as React from "react";
import styles from "./sidebar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sideContainer}>
      <div className={styles.imageContainer}>
        <img src={require("../../assets/logo.png")} alt="" />
      </div>
      <div className={styles.title}>Y'ello</div>
    </div>
  );
};

export default SideBar;
