import *as React from 'react'
import { useState } from 'react';
import { Input, NextBtn, PrevBtn, SideBar, Slider } from '../../container'
import styles from "./claim.module.scss"
import { useHistory } from 'react-router-dom'

const ClaimPageFour = () => {
const history = useHistory();
const [workingDaysOutstanding,setWorkingDaysOutstanding] = useState("")
  const [otherReleavantInfo,setOtherReleavantInfo] = useState("")
    const cancelHandler = () => {
        history.push("/claimpagethree")
    }
    
    const nextHandler = () => {
        // history.push("/workHabit")
    }
  return (
    <div className={styles.container}>
        <SideBar/>
        <div className={styles.right}>
            <div className={styles.title}>New Claim</div>
            <Slider size={100} />
            <div className={styles.containerForm}>
            <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="No of working days Outstanding"
                 onChange={(e) => setWorkingDaysOutstanding(e.target.value)}
                 value={workingDaysOutstanding} />
              </div>
              
              <div className={styles.formContainer}>
                <Input
                 type= "text"
                 placeholder="Other Relevant Information"
                 onChange={(e) => setOtherReleavantInfo(e.target.value)}
                 value={otherReleavantInfo} />
              </div>
              <div className={styles.btnContainer}>
                <PrevBtn buttonName="Previous" handler={cancelHandler}/> <NextBtn buttonName="Next" handler={nextHandler}/>
              </div>
            </div>
        </div>
  
    </div>
  );
        
}

export default ClaimPageFour;