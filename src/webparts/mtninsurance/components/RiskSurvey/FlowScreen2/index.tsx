import * as React from "react";
import { useState } from "react";
import { Input, NextBtn, PrevBtn, SideBar, Slider } from "../../container";
import styles from "./FlowScreen2.module.scss";
import { useHistory } from "react-router-dom";

function FlowScreen2() {
  const history = useHistory();

  const [assigneeUnit, setAssigneesUnit] = useState("");
  const [unitEmail, setUnitEmail] = useState("");

  const prevHandler = () => {};

  const nextHandler = () => {
    history.push("/vendorbulkrisk/role1");
  };

  return (
    <div className={styles.risk__Container}>
      <SideBar />
      <div className={styles.risk__right}>
        <div className={styles.risk__title}>Risk Survey</div>
        <Slider size={75} />
        <div className={styles.risk__containerForm}>
          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Assignee's Unit/Team"
              onChange={(e) => setAssigneesUnit(e.target.value)}
              value={assigneeUnit}
            />
          </div>

          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Unit/Team's Unit Email"
              onChange={(e) => setUnitEmail(e.target.value)}
              value={unitEmail}
            />
          </div>
          <div className={styles.risk__btnContainer}>
            <PrevBtn buttonName="Previous" handler={prevHandler} />{" "}
            <NextBtn buttonName="Next" handler={nextHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowScreen2;
