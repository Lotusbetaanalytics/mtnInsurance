import * as React from 'react'
import styles from './styles.module.scss'

const Slider = ({ size }) => {
    return (
        <div className={styles.con}>
            <div className={styles.slider}>
                <div className={styles.indicator} style={{ width: `${size}%` }}></div>
            </div>
        </div>
    )
}

export default Slider
