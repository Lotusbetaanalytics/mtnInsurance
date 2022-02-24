import * as React from "react";
import styles from "./select.module.scss";

const Select = ({ onChange, value, children, title }) => {
  return (
    <div className={styles.selectStyles}>
      <label>{title}</label>
      <select onChange={onChange} value={value}>
        {children}
      </select>
    </div>
  );
};

export default Select;
