import *as React from 'react'
import { useState } from 'react';
import { Comment, Input, NextBtn, PrevBtn, SideBar, Slider } from '../../container'
import styles from "./claim.module.scss"
import { useHistory } from 'react-router-dom'
const ClaimPageTwo = () => {
const history = useHistory();
const [descriptionOfLost,setDescriptionOfLost] = useState("")
const [deductible,setDeductible] = useState("")
const [newClaimAmount,setNewClaimAmount] = useState("")
const [liabilityEstimate,setLiabilityEstimate] = useState("")
const [finalAdjustedLiabilityAmount,setFinalAdjustedLiabilityAmount] = useState("");
const [amountReceived,setAmountReceived] = useState("")
const [amountOutstanding,setAmountOutstanding] = useState("")
const [status,setStatus] = useState("")
const [dateOfSettlemetOfferReceipt,setDateOfSettlemetOfferReceipt] = useState("")
const [dateOfFullDocumentation,setDateOfFullDocumentation]= useState("")

    const cancelHandler = () => {
        history.push("/claimone")
    }
    
    const nextHandler = () => {
        history.push("/claimpagethree")
    }
    
  return (
    <div className={styles.container}>
        <SideBar/>
        <div className={styles.right}>
            <div className={styles.title}>New Claim</div>
            <Slider size={30} />
            <div className={styles.containerForm}>
              <div className={styles.formContainer}>
                <Comment
                 placeholder="Description of Loss"
                 onChange={(e) => setDescriptionOfLost(e.target.value)}
                 value={descriptionOfLost} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Deductible"
                 onChange={(e) => setDeductible(e.target.value)}
                 value={deductible} />
                 <Input
                 type= "text"
                 placeholder="Liability Estimated"
                 onChange={(e) => setLiabilityEstimate(e.target.value)}
                 value={liabilityEstimate} />
              </div>
              {/* <div className={styles.formContainer}>
                
              </div> */}
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="New Claim Amount"
                 onChange={(e) => setNewClaimAmount(e.target.value)}
                 value={newClaimAmount} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Final Adjusted Liability Amount"
                 onChange={(e) => setFinalAdjustedLiabilityAmount(e.target.value)}
                 value={finalAdjustedLiabilityAmount} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Amount Received"
                 onChange={(e) => setAmountReceived(e.target.value)}
                 value={amountReceived} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Amount Outstanding"
                 onChange={(e) => setAmountOutstanding(e.target.value)}
                 value={amountOutstanding} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Status"
                 onChange={(e) => setStatus(e.target.value)}
                 value={status} />
              </div>
              <div className={styles.formContainer}>
                <div className={styles.checkContainer}>
                <div className={styles.checkboxTitle}>Document Completed</div>
                <input type="checkbox" id="documentCompleted" name="documentCompleted" value="yes" />Yes
                <input type="checkbox" id="documentCompleted" name="documentCompleted" value="No" />No
                </div>
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Date of Full Documentation"
                 onChange={(e) => setDateOfFullDocumentation(e.target.value)}
                 value={dateOfFullDocumentation} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Date of of settlement Offer Receipt"
                 onChange={(e) => setDateOfSettlemetOfferReceipt(e.target.value)}
                 value={dateOfSettlemetOfferReceipt} />
              </div>
            </div>
            <div className={styles.btnContainer}>
                <PrevBtn handler={cancelHandler} buttonName="Previous"/> <NextBtn buttonName="Next" handler={nextHandler}/>
            </div>
        </div>
    </div>
  );
        
}

export default ClaimPageTwo;


