import *as React from 'react'
import { useState } from 'react';
import { Comment, Input, NextBtn, PrevBtn, SideBar, Slider } from '../../container'
import styles from "../Claim/claim.module.scss"

const NewPolicyTwo = () => {
  
const [currencyConversionRate,setCurrencyConversionRate] = useState("")
const [sumInsured,setSumInsured] = useState("")
const [deductible,setDeductible] = useState("")
const [sumInsuredNGN,setSumInsuredNGN] = useState("")
const [premium,setPremium] = useState("");
const [premiumNGN,setPremiumNGN] = useState("")
const [remark,setRemark] = useState("")



    const cancelHandler = () => {
        // history.push("/knowlegdeFactor")
    }
    
    const nextHandler = () => {
        // history.push("/workHabit")
    }
  return (
    <div className={styles.container}>
        <SideBar/>
        <div className={styles.right}>
            <div className={styles.title}>New Claim</div>
            <Slider size={60} />
            <div className={styles.containerForm}>
            <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Currency Conversion Rate"
                 onChange={(e) => setCurrencyConversionRate(e.target.value)}
                 value={currencyConversionRate} />
              </div>
              
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Sum Insured"
                 onChange={(e) => setSumInsured(e.target.value)}
                 value={sumInsured} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Sum Insured (NGN)"
                 onChange={(e) => setSumInsuredNGN(e.target.value)}
                 value={sumInsuredNGN} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Deductible"
                 onChange={(e) => setDeductible(e.target.value)}
                 value={deductible} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Premium"
                 onChange={(e) => setPremium(e.target.value)}
                 value={premium} />
              </div>
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Premium (NGN)"
                 onChange={(e) => setPremiumNGN(e.target.value)}
                 value={premiumNGN} />
              </div>
              <div className={styles.formContainer}>
                <Comment
                 placeholder="Remarks"
                 onChange={(e) => setRemark(e.target.value)}
                 value={remark} />
              </div>
            </div>
            <div className={styles.btnContainer}>
                <PrevBtn buttonName="Previous" handler={cancelHandler}/> <NextBtn buttonName="Next" handler={nextHandler}/>
              </div>
        </div>
  
    </div>
  );
        
}

export default NewPolicyTwo;

