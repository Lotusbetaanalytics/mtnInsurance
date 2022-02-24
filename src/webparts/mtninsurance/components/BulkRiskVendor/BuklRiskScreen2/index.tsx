import * as React from "react";
import { CustomBtn, NextBtn, PrevBtn, SideBar } from "../../container";
import styles from "./uploadBulk.module.scss";
import { useHistory } from "react-router-dom";

function BulkRiskScreen2() {
  const history = useHistory();

  const prevHandler = () => {};

  const nextHandler = () => {
    history.push("/bulkriskscreen3");
  };

  const uploadHandler = () => {};

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
                handler={uploadHandler}
              />
            </div>
          </div>
          <div className={styles.risk__imageContainer}>
            {/* <img src={require("../../../assets/logo.png")} alt="logo" /> */}
          </div>
          <div className={styles.risk__btnContainer}>
            <PrevBtn buttonName="Previous" handler={prevHandler} />
            <NextBtn buttonName="Next" handler={nextHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulkRiskScreen2;
