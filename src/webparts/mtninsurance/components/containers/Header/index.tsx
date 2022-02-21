import * as React from 'react'
import styles from './styles.module.scss'

const Header = ({ title }) => {
    const data = JSON.parse(localStorage.getItem("data"))

    return (
        <div className={styles.mtn__header}>
            <div className={styles.titleContainer}>
                <h1><b>{title}</b></h1>
            </div>
            <div className={styles.dpContainer}>
                <p>Hi {data.DisplayName}</p>
                <div className={styles.dp}>
                    <img src={data.PictureUrl} alt={data.DisplayName.slice(0, 1)} />
                </div>
            </div>

        </div>
    )
}

export default Header