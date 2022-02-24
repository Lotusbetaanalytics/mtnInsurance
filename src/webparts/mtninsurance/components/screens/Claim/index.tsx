import *as React from 'react'
import { Input, Modal, NextBtn, PrevBtn, SideBar, Slider } from '../../container'
import { useHistory } from 'react-router-dom'
import styles from "./claim.module.scss"
const ClaimOne = () => {
  const history = useHistory()
  const [initiator,setInitiator] = React.useState("")
  const [email,setEmail] = React.useState("")
  const [date,setDate] = React.useState("")
  const [dateReported,setDateReported] = React.useState("")
  const [assetType,setAssetType] = React.useState("")
  const [dateOfIncident,setDateOfIncident] = React.useState("")
  const [policyNumber,setPolicyNumber] = React.useState("")
  const [incidentType,setIncidentType] = React.useState("")
  const [assetId,setAssetId] = React.useState("")
  const [estimatedLost,setEstimatedLost] = React.useState("")

  const [isOpen, setIsOpen] = React.useState(false);

const nextHandler = () => {
  history.push("/claimpagetwo")
}
  return (
    <div className={styles.container}>
        <SideBar/>
        <div className={styles.right}>
            <div className={styles.title}>New Claim</div>
            <Slider size={0} />
            <div className={styles.containerForm}>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="initiator"
                 onChange={(e) => setInitiator(e.target.value)}
                 value={initiator} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Email"
                 onChange={(e) => setEmail(e.target.value)}
                 value={email} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Date(AutoPopulate)"
                 onChange={(e) => setDate(e.target.value)}
                 value={date} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Date Reported"
                 onChange={(e) => setDateReported(e.target.value)}
                 value={dateReported} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Asset Type"
                 onChange={(e) => setAssetType(e.target.value)}
                 value={assetType} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Date of Incident"
                 onChange={(e) => setDateOfIncident(e.target.value)}
                 value={dateOfIncident} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Policy Number"
                 onChange={(e) => setPolicyNumber(e.target.value)}
                 value={policyNumber} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Incident Type"
                 onChange={(e) => setIncidentType(e.target.value)}
                 value={incidentType} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Asset Id"
                 onChange={(e) => setAssetId(e.target.value)}
                 value={assetId} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Estimated amount of lost"
                 onChange={(e) => setEstimatedLost(e.target.value)}
                 value={estimatedLost} />
              </div>
            </div>
            <div className={styles.btnContainer}>
                <PrevBtn buttonName="Cancel" handler={() => setIsOpen(true)}/> <NextBtn buttonName="Next" handler={nextHandler}/>
                {isOpen && <Modal setIsOpen={setIsOpen} />}
              </div>
        </div>
    </div>
  );
}

export default ClaimOne