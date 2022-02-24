import * as React from "react";
import { SideBar, Slider } from "../../container";
import styles from "./FlowScreen3.module.scss";

function FlowScreen3() {
  return (
    <div className={styles.risk__Container}>
      <SideBar />
      <div className={styles.risk__right}>
        <div className={styles.risk__title}>Risk Survey</div>
        <Slider size={100} />
        <div className={styles.risk__successPage}>
          <img src={require("../../assets/success-icon.png")} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default FlowScreen3;
