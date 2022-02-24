import *as React from 'react'
import { CustomBtn, NextBtn, PrevBtn, SideBar, Slider } from '../../container'
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
const ExceluploadFile = () => {
  // history.push("/workHabit")
}
  return (
    <div className={styles.container}>
        <SideBar/>
        <div className={styles.right}>
            <div className={styles.checkContainer}>
                <input type="radio" id="documentCompleted" name="documentCompleted" value="claim" />Claim
                <input type="radio" id="documentCompleted" name="documentCompleted" value="bulk" />Bulk
                <div className={styles.marginBtm}><CustomBtn buttonName="Download SpreadSheet" handler={downloadHandler}  /></div> 
            </div>
            <div className={styles.imageContainer}>
            <div className={styles.imgBox}>
            <img src={require('../../assets/Vectorexcel.png')} alt="" />
            </div>
                <CustomBtn buttonName="Add more file for Upload" handler={ExceluploadFile}  />
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