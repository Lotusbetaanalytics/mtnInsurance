import * as React from "react";
import { CustomBtn, NextBtn, SideBar } from "../../container";
import styles from "./uploadBulk2.module.scss";

function BulkRiskScreen3() {
  const moreUploadHandler = () => {};

  const submitHandler = () => {};

  return (
    <div>
      <div className={styles.risk__Container}>
        <SideBar />
        <div className={styles.risk__right}>
          <div className={styles.risk__checkContainer}>
            <input
              type="radio"
              id="documentCompleted"
              name="documentCompleted"
              value="claim"
            />
            Claim
            <input
              type="radio"
              id="documentCompleted"
              name="documentCompleted"
              value="bulk"
            />
            Bulk
            <div className={styles.risk__marginBtm}>
              <CustomBtn
                buttonName="Download SpreadSheet"
                handler={moreUploadHandler}
              />
            </div>
          </div>
          <div className={styles.risk__imageContainer}>
            {/* <img src={require("../../../assets/logo.png")} alt="logo" /> */}
          </div>
          <div className={styles.risk__btnContainer}>
            <NextBtn buttonName="Submit" handler={submitHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulkRiskScreen3;
