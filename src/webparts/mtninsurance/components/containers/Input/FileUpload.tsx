import * as React from 'react';
import styles from './styles.module.scss'

const FileUpload = ({ onChange, title, }) => {
    return <div className="mtn__InputContainer mtn__child">
        <div className={styles.uploadWrapper}>
            <button className={`mtn__btn ${styles.uploadBtn}`}>{title}</button>
            <input
                type="file"
                onChange={onChange}

            />
        </div>

    </div>;
};

export default FileUpload;
