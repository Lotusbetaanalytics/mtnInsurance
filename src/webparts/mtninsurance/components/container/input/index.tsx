import * as React from 'react';
import styles from './input.module.scss'

const Input = ({title,type,placeholder,onChange,value}) => {
    return <div className={styles.mtn__InputContainer}>
        <label>{title}</label>
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    </div>;
};

export default Input;