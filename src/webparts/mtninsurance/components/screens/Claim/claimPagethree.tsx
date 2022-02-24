import * as React from "react";
import { useState } from "react";
import { Input, NextBtn, PrevBtn, SideBar, Slider } from "../../container";
import styles from "./claim.module.scss";
import { useHistory } from "react-router-dom";

const ClaimPageThree = () => {
  const history = useHistory();
  const [workDayDocumentation, setWorkDayDocumentation] = useState("");
  const [policeReport, setPoliceReport] = useState("");
  const [responsibleStakeholders, setResponsibleStakeholders] = useState("");
  const [dateOfVoucher, setDateOfVoucher] = useState("");
  const [dateofFullStatement, setDateofFullStatement] = useState("");
  const [pictures, setPictures] = useState("");
  const [noOfworkingsDays, setNoOfworkingsDays] = useState("");
  const [incidentReport, setIncidentReport] = useState("");
  const [fireServiceReport, setFireServiceReport] = useState("");
  const [courtAffidavit, setCourtAffidavit] = useState("");
  const [region, setRegion] = useState("");

  const cancelHandler = () => {
    history.push("/claimpagetwo");
  };

  const nextHandler = () => {
    history.push("/claimpagefour");
  };
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.right}>
        <div className={styles.title}>New Claim</div>
        <Slider size={60} />
        <div className={styles.containerForm}>
          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="No of working days from full documentation till offer....."
              onChange={(e) => setWorkDayDocumentation(e.target.value)}
              value={workDayDocumentation}
            />
          </div>

          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="Police Report"
              onChange={(e) => setPoliceReport(e.target.value)}
              value={policeReport}
            />
          </div>
          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="Date of voucher discharge execution"
              onChange={(e) => setDateOfVoucher(e.target.value)}
              value={dateOfVoucher}
            />
          </div>
          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="Responsible Stakeholders"
              onChange={(e) => setResponsibleStakeholders(e.target.value)}
              value={responsibleStakeholders}
            />
          </div>
          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="Date of Full Statement"
              onChange={(e) => setDateofFullStatement(e.target.value)}
              value={dateofFullStatement}
            />
          </div>
          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="Pictures"
              onChange={(e) => setPictures(e.target.value)}
              value={pictures}
            />
          </div>
          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="No of working Days"
              onChange={(e) => setNoOfworkingsDays(e.target.value)}
              value={noOfworkingsDays}
            />
          </div>
          <div className={styles.formContainer}>
            <div className={styles.checkContainer}>
              <div className={styles.checkboxTitle}>Invoice</div>
              <input type="checkbox" id="Invoice" name="Invoice" value="yes" />
              Yes
              <input type="checkbox" id="Invoice" name="Invoice" value="No" />
              No
            </div>
          </div>
          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="Incident Report"
              onChange={(e) => setIncidentReport(e.target.value)}
              value={incidentReport}
            />
          </div>
          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="Fire Service Report"
              onChange={(e) => setFireServiceReport(e.target.value)}
              value={fireServiceReport}
            />
          </div>
          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="Court Affidavit"
              onChange={(e) => setCourtAffidavit(e.target.value)}
              value={courtAffidavit}
            />
          </div>
          <div className={styles.formContainer}>
            <Input
              type="text"
              placeholder="Region"
              onChange={(e) => setRegion(e.target.value)}
              value={region}
            />
          </div>
          <div className={styles.btnContainer}>
            <PrevBtn buttonName="previous" handler={cancelHandler} />{" "}
            <NextBtn buttonName="next" handler={nextHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimPageThree;
