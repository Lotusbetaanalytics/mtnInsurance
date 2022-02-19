import *as React from 'react'
import { NextBtn, PrevBtn, SideBar, Slider } from '../../container'
import styles from "../Claim/claim.module.scss"
import { useHistory } from 'react-router-dom'

const NewClaimBulkThree = () => {
  const history = useHistory;
  
  const cancelHandler = () => {
    history.push("/newclaimbulktwo")
}
const downloadHandler = () => {
    // history.push("/knowlegdeFactor")
}

const nextHandler = () => {
    // history.push("/workHabit")
}
  return (
    <div className={styles.container}>
        <SideBar/>
        <div className={styles.right}>
            <div className={styles.checkContainer}>
                <input type="checkbox" id="documentCompleted" name="documentCompleted" value="yes" />Yes
                <input type="checkbox" id="documentCompleted" name="documentCompleted" value="No" />No
                <PrevBtn buttonName="Download now" handler={downloadHandler} />
            </div>
            <div className={styles.btnContainer}>
                <PrevBtn buttonName="Previous" handler={cancelHandler}/>
                 <NextBtn buttonName="Next" handler={nextHandler}/>
            </div>
        </div>
    </div>
  );
}

export default NewClaimBulkThree