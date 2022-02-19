import * as React from 'react'
import { GrFormNext } from "react-icons/gr";
import styles from "./prevBtn.module.scss"
import { GrFormPrevious } from "react-icons/gr";
const PrevBtn = ({handler,buttonName}) => {
  return (
    <div>
        <button 
         type='button' 
         onClick={handler} ><span className={styles.icons}> <GrFormPrevious className={styles.iconColor}/></span> {buttonName}
         </button>
    </div>
  )
}

export default PrevBtn