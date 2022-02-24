import * as React from "react";
import { useState } from "react";
import { Input, NextBtn, PrevBtn, SideBar, Slider } from "../../container";
// import styles from '../../container/input/input.module.scss'
import styles from "./BulkRiskScreen.module.scss";
import { useHistory } from "react-router-dom";

function BulkRiskScreen() {
  const history = useHistory();

  const [initiator, setInitiator] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [vendor, setVendor] = useState("");
  const [contractTitle, setContractTitle] = useState("");
  const [contractStartDate, setContractStartDate] = useState("");
  const [contractEndDate, setContractEndDate] = useState("");
  const [dateContractReceived, setDateContractReceived] = useState("");
  const [dateDateRecommendedReceived, setDateRecommendedReceived] =
    useState("");
  const [insurancePolicies, setInsurancePolicies] = useState("");
  const [sumInsured, setSumInsured] = useState("");
  const [BulkRiskStatus, setBulkRiskStatus] = useState("");

  const prevHandler = () => {};

  const nextHandler = () => {
    history.push("/bulkriskscreen2");
  };

  return (
    <div className={styles.risk__Container}>
      <SideBar />
      {/* <div className={styles.risk__title}>Bulk Vendor</div> */}
      <div className={styles.risk__right}>
        <div className={styles.risk__checkContainer}>
          <input
            type="radio"
            id="documentCompleted"
            name="documentCompleted"
            value="yes"
          />
          Claim Entry
          <input
            type="radio"
            id="documentCompleted"
            name="documentCompleted"
            value="No"
          />
          Bulk Entry
        </div>
        <Slider size={0} />
        <div className={styles.risk__containerForm}>
          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="initiator"
              onChange={(e) => setInitiator(e.target.value)}
              value={initiator}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Vendor"
              onChange={(e) => setVendor(e.target.value)}
              value={vendor}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Contract Title"
              onChange={(e) => setContractTitle(e.target.value)}
              value={contractTitle}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="date"
              placeholder="contract Start Date"
              onChange={(e) => setContractStartDate(e.target.value)}
              value={contractStartDate}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="date"
              placeholder="Contract End Date"
              onChange={(e) => setContractEndDate(e.target.value)}
              value={contractEndDate}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="date"
              placeholder="Date Contract Received"
              onChange={(e) => setDateContractReceived(e.target.value)}
              value={dateContractReceived}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="date"
              placeholder="Date Recommendation Received"
              onChange={(e) => setDateRecommendedReceived(e.target.value)}
              value={dateDateRecommendedReceived}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Insurance Policies"
              onChange={(e) => setInsurancePolicies(e.target.value)}
              value={insurancePolicies}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Sum Insured"
              onChange={(e) => setSumInsured(e.target.value)}
              value={sumInsured}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <select
              title="Status"
              onChange={(e) => setBulkRiskStatus(e.target.value)}
              value={BulkRiskStatus}
            >
              <option>Status</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
        <div className={styles.risk__btnContainer}>
          <PrevBtn buttonName="Previous" handler={prevHandler} />{" "}
          <NextBtn buttonName="Next" handler={nextHandler} />
        </div>
      </div>
    </div>
  );
}

export default BulkRiskScreen;
