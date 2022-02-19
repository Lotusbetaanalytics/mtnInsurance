import *as React from 'react'
import { useState } from 'react';
import { Comment, Input, NextBtn, PrevBtn, SideBar, Slider } from '../../container'
import styles from "../Claim/claim.module.scss"
import { useHistory } from 'react-router-dom'

const NewPolicy = () => {
const history = useHistory();
const [Initiator,setInitiator] = useState("")
const [email,setEmail] = useState("")
const [date,setDate] = useState("")
const [insured,setInsured] = useState("")
const [policyNumber,setPolicyNumber] = useState("");
const [policyName,setPolicyName] = useState("")
const [policyType,setPolicyType] = useState("")
const [policyDescription,setPolicyDescription] = useState("")
const [currency,setCurrency] = useState("")
const [policyExpiryDate,setPolicyExpiryDate]= useState("")
const [policyStartDate,setPolicyStartDate] = useState("")

    const cancelHandler = () => {
        history.push("/newclaimpagefour")
    }
    
    const nextHandler = () => {
      history.push("/newpolicypagetwo")
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
                 placeholder="Initiator"
                 onChange={(e) => setInitiator(e.target.value)}
                 value={Initiator} />
              </div>
              
              <div className={styles.formContainer}>
                <Input
                 type= "email"
                 placeholder="Email"
                 onChange={(e) => setEmail(e.target.value)}
                 value={email} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "date"
                 placeholder="date"
                 onChange={(e) => setDate(e.target.value)}
                 value={date} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Insured"
                 onChange={(e) => setInsured(e.target.value)}
                 value={insured} />
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
                 placeholder="Policy Type"
                 onChange={(e) => setPolicyType(e.target.value)}
                 value={policyType} />
              </div>
              <div className={styles.formContainer}>
              <Input
                 type= "date"
                 placeholder="Policy start Date"
                 onChange={(e) => setPolicyStartDate(e.target.value)}
                 value={policyStartDate} />
                <Input
                 type= "text"
                 placeholder="Policy Name"
                 onChange={(e) => setPolicyName(e.target.value)}
                 value={policyName} />
              </div>
              <div className={styles.formContainer}>
                <Comment
                    placeholder="Policy Description"
                    onChange={(e) => setPolicyDescription(e.target.value)}
                    value={policyDescription}
                 />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Currency"
                 onChange={(e) => setCurrency(e.target.value)}
                 value={currency} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "Date"
                 placeholder="Policy Expiry Date"
                 onChange={(e) => setPolicyExpiryDate(e.target.value)}
                 value={policyExpiryDate} />
              </div>
              <div className={styles.btnContainer}>
                <PrevBtn buttonName="Previous" handler={cancelHandler}/> <NextBtn buttonName="Next" handler={nextHandler}/>
              </div>
            </div>
        </div>
  
    </div>
  );
        
}

export default NewPolicy;