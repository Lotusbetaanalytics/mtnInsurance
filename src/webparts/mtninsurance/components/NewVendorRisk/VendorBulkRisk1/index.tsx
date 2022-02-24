import * as React from "react";
import { useState } from "react";
import { Input, NextBtn, PrevBtn, SideBar, Slider } from "../../container";
import styles from "./VendorBulkRisk.module.scss";
import { useHistory } from "react-router-dom";

function VendorBulkRisk1() {
  const history = useHistory();
  const [initiator, setInitiator] = useState("");
  const [email, setEmail] = useState("");
  const [autoDate, setAutoDate] = useState("");
  const [vendor, setVendor] = useState("");
  const [contractTitle, setContractTitle] = useState("");
  const [contractStartDate, setContractStartDate] = useState("");
  const [contractEndDate, setContractEndDate] = useState("");
  const [dateContractReceived, setDateContractReceived] = useState("");
  const [dateRecommendationAdvised, setDateRecommendationAdvised] =
    useState("");
  const [insurancePolicies, setInsurancePolicies] = useState("");
  const [sumInsured, setSumInsured] = useState("");
  const [vendorRiskStatus, setVendorRiskStatus] = useState("");

  const prevHandler = () => {};

  const nextHandler = () => {
    history.push("/vendorbulkrisk/role2");
  };

  return (
    <div className={styles.risk__Container}>
      <SideBar />
      <div className={styles.risk__right}>
        <div className={styles.risk__title}>New Vendor Risk</div>
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
              type="number"
              placeholder="Date(AutoPopulate)"
              onChange={(e) => setAutoDate(e.target.value)}
              value={autoDate}
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
              placeholder="Contract Start Date"
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
              type="Date"
              placeholder="Date Recommendation Advised"
              onChange={(e) => setDateRecommendationAdvised(e.target.value)}
              value={dateRecommendationAdvised}
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
              onChange={(e) => setVendorRiskStatus(e.target.value)}
              value={vendorRiskStatus}
            >
              <option>Status</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
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

export default VendorBulkRisk1;
