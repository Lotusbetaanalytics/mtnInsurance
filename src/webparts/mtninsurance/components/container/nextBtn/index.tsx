import * as React from "react";
import { GrFormNext } from "react-icons/gr";
import styles from "./nextBtn.module.scss";
const NextBtn = ({ handler, buttonName }) => {
  return (
    <div className={styles.nextBtn}>
      <button type="button" onClick={handler}>
        {" "}
        {buttonName}{" "}
        <span className={styles.icons}>
          {" "}
          <GrFormNext />{" "}
        </span>
      </button>
    </div>
  );
};

export default NextBtn;
