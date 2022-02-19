import * as React from 'react'
import styles from "./customBtn.module.scss"
const CustomBtn = ({handler,buttonName}) => {
  return (
    <div>
        <button 
         type='button' 
         onClick={handler} className={styles.customBtn}>  {buttonName}
         </button>
    </div>
  )
}

export default CustomBtn