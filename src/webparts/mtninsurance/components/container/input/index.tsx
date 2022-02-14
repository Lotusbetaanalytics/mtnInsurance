import * as React from 'react';
import styles from './input.module.scss'

const Input = () => {
    return <div className={styles.mtn__InputContainer}>
        <label>Input</label>
        <input
            type="text"
            placeholder="this is it"
        />
    </div>;
};

export default Input;