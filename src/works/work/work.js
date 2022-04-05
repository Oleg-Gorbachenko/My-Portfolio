import React from 'react';
import styles from './work.module.css'
import styleBtn from '../../common/styles/Btn.module.css'

export const Work = (props) => {
    return (<div className={styles.work}>
        <div className={styles.img}>
            <a href="#" className={`${styleBtn.btn} ${styles.btn}`}>View</a>
        </div>
        <div className={styles.descriptionWrapper}>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.description}>{props.description}</div>
        </div>
    </div>);
};
