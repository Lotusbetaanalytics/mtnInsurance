import *as React from 'react'
import { CustomBtn, Input, NextBtn, PrevBtn, SideBar, Slider } from '../../container'
import styles from "../Claim/claim.module.scss"
import { useHistory } from 'react-router-dom'
import { Stylesheet } from 'office-ui-fabric-react'


const NewClaimBulkTwo = () => {
  const history = useHistory();
  const [uploadedFile,setUploadedFile] = React.useState("")

  const cancelHandler = () => {
     history.push("/newcalimbulktwo")
}
const downloadHandler = () => {
    // history.push("/newclaimbulkthree")
}
const uploadFile = () => {
  // history.push("/newclaimbulkthree")
}

const nextHandler = () => {
    history.push("/newclaimbulkthree")
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
            <img src={require('../../assets/upload.png')} alt="" />
            </div>
            <input type="file" value={uploadedFile} onChange={(e) => setUploadedFile(e.target.value)} />
            </div>
            <div className={styles.btnContainer}>
                <PrevBtn buttonName="Previous" handler={cancelHandler}/>
                 <NextBtn buttonName="Next" handler={nextHandler}/>
            </div>
        </div>
    </div>
  );
}

export default NewClaimBulkTwo