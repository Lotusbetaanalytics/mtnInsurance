import * as React from 'react'
import { GrFormNext } from "react-icons/gr";
import styles from './nextBtn.module.scss'
const NextBtn = ({handler}) => {
  return (
    <div>
        <button 
         type='button' 
         onClick={handler} > Next <span className={styles.icons}> <GrFormNext/> </span>
         </button>
    </div>
  )
}

export default NextBtn