import * as React from "react";
import { useState } from "react";
import {
  Comment,
  Input,
  NextBtn,
  PrevBtn,
  Select,
  SideBar,
  Slider,
} from "../../container";
import { useHistory } from "react-router-dom";
import styles from "./FlowScreen1.module.scss";

function FlowScreen1() {
  const history = useHistory();

  const [initiator, setInitiator] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [riskLocation, setRiskLocation] = useState("");
  const [riskElement, setRiskElement] = useState("");
  const [description, setDescription] = useState("");
  const [dateRecommended, setDateRecommended] = useState("");
  const [dateClosed, setDateClosed] = useState("");
  const [surveyType, setSurveyType] = useState("");
  const [riskStatus, setRiskStatus] = useState("");
  const [assigneeEmail, setAssigneeEmail] = useState("");

  const prevHandler = () => {};

  const nextHandler = () => {
    history.push("/risksurvey/flowscreen2");
  };

  return (
    <div className={styles.risk__container}>
      <SideBar />
      <div className={styles.risk__right}>
        <div className={styles.risk__title}>Risk Survey</div>
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
              type="date"
              placeholder="Date(AutoPopulate)"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <select
              title="Survey Type"
              onChange={(e) => setSurveyType(e.target.value)}
              value={surveyType}
            >
              <option>Survey Type</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Risk Location"
              onChange={(e) => setRiskLocation(e.target.value)}
              value={riskLocation}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="text"
              placeholder="Risk Element"
              onChange={(e) => setRiskElement(e.target.value)}
              value={riskElement}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Comment
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="date"
              placeholder="Date Recommended"
              onChange={(e) => setDateRecommended(e.target.value)}
              value={dateRecommended}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="date"
              placeholder="Date Closed"
              onChange={(e) => setDateClosed(e.target.value)}
              value={dateClosed}
            />
          </div>
          <div className={styles.risk__formContainer}>
            <select
              title="Status"
              onChange={(e) => setRiskStatus(e.target.value)}
              value={riskStatus}
            >
              <option>Status</option>
              <option>1</option>
            </select>
          </div>
          <div className={styles.risk__formContainer}>
            <Input
              type="email"
              placeholder="Assignee Email"
              onChange={(e) => setAssigneeEmail(e.target.value)}
              value={assigneeEmail}
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

export default FlowScreen1;
