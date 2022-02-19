import * as React from 'react';
import styles from './comment.module.scss'

const Comment= ({placeholder,onChange,value}) => {
    return <div className={styles.mtn__CommentContainer}>
        <textarea
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    </div>;
};

export default Comment;