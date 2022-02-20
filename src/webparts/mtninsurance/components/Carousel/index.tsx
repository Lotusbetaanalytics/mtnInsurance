import * as React from "react";
import styles from "./Carousel.module.scss";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function Carousel() {
  return (
    <div>
      <div className={styles.background__logo}>
        <div className={styles.background__logoContainer}>
          <div className={styles.mtn__content}>
            <img src={require("../assets/logo.png")} alt="logo" />
            <div className={styles.mtn__contentRead}>
              <p>Welcome to</p>
              <span>The Insurance Risk Management Portal</span>
            </div>
            <button className={styles.mtn__entryBtn}>
              New Claim <MdOutlineNavigateNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
