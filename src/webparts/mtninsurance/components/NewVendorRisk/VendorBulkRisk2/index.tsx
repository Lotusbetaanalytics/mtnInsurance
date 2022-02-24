import * as React from "react";
import { useState } from "react";
import {
  Comment,
  Input,
  NextBtn,
  PrevBtn,
  SideBar,
  Slider,
} from "../../container";
import styles from "./VendorBulkRisk2.module.scss";
import { useHistory } from "react-router-dom";

function VendorBulkRisk2() {
  const history = useHistory();
  const [datePolicyReceived, setDatePolicyReceived] = useState("");
  const [datePolicyValidated, setDatePolicyValidated] = useState("");
  const [insuranceExpiryDate, setInsuranceExpiryDate] = useState("");
  const [comments, setComments] = useState("");
  const [user, setUser] = useState("");
  const [liasonPerson, setLiasonPerson] = useState("");

  const prevHandler = () => {};

  const nextHandler = () => {
    history.push("/bulkriskscreen");
  };

  return (
    <div className={styles.risk__Container}>
      <SideBar />
      <div className={styles.risk__right}>
        <div className={styles.risk__title}>New Vendor Risk</div>
        <Slider size={50} />
        <div className={styles.risk__containerForm}>
          <div className={styles.risk__formContainer}>
            <Input
              type="date"
              placeholder="Date Policy Received"
              onChange={(e) => setDatePolicyReceived(e.target.value)}
              value={datePolicyReceived}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="date"
              placeholder="Date Policy Validated"
              onChange={(e) => setDatePolicyValidated(e.target.value)}
              value={datePolicyValidated}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="date"
              placeholder="Insurance Expiry Date"
              onChange={(e) => setInsuranceExpiryDate(e.target.value)}
              value={insuranceExpiryDate}
            />
          </div>

          <div className={styles.risk__formContainer}>
            <Comment
              placeholder="Comments"
              onChange={(e) => setComments(e.target.value)}
              value={comments}
            />
          </div>

          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="User"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </div>

          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Liason Person"
              onChange={(e) => setLiasonPerson(e.target.value)}
              value={liasonPerson}
            />
          </div>
        </div>
        <div className={styles.risk__btnContainer}>
          <PrevBtn buttonName="Cancel" handler={prevHandler} />{" "}
          <NextBtn buttonName="Next" handler={nextHandler} />
        </div>
      </div>
    </div>
  );
}

export default VendorBulkRisk2;
