import React from 'react';
import styles from './work.module.scss'
import styleBtn from '../../common/styles/Btn.module.scss'

export const Work = (props) => {
    return (
        <div className={styles.work}>
            <div className={styles.img}
                 style={props.style}>
                <a href="#" className={`${styleBtn.btn} ${styles.btn}`}>View</a>
            </div>
            <div className={styles.descriptionWrapper}>
                <h3 className={styles.workTitle}>{props.title}</h3>
                <div className={styles.description}>{props.description}</div>
            </div>
        </div>
    );
};
