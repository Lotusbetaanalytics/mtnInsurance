import * as React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';

const Card = ({ title, count, Icon, color, url }) => {
    return (

        <Link to={url} className={styles.mtn__url}>
            <div className={styles.mtn__cards}>
                <div className={`${styles.mtn__icons} ${color}`}>
                    <Icon />
                </div>
                <div className={styles.mtn__text}>
                    <h3>{count}</h3>
                    <h5>{title}</h5>
                </div>
            </div>
        </Link>
    )
};

export default Card;