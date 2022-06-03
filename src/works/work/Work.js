import React from 'react';
import styles from './Work.module.scss'
import {Button} from "../../common/components/button/Button";

export const Work = (props) => {
    return (
        <div className={styles.work}>
            <div className={styles.img}
                 style={props.style}>
                <Button href={'#'} name={'View'}/>
            </div>
            <div className={styles.descriptionWrapper}>
                <h3 className={styles.workTitle}>{props.title}</h3>
                <div className={styles.description}>{props.description}</div>
            </div>
        </div>
    );
};
