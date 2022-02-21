import * as React from 'react'
import styles from './home.module.scss'
import { Link } from "react-router-dom"

const HomeScreen = () => {
    return (
        <div className={styles.mtn__homeScreen}>

            <div className={styles.textContainer}>
                <img src={require('../../assets/logo.png')} alt="logo" />

                <p>Welcome to</p>
                <h1>The Insurance Risk</h1>
                <h1>Management</h1>
                <h1>Portal</h1>
                <div className='mtn__btnContainerStart'>
                    <Link to={`/dashboard`} className="mtn__btnSm mtn__yellow">Proceed</Link>
                </div>


            </div>

        </div>
    )
}

export default HomeScreen