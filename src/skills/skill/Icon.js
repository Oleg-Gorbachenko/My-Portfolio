import React from 'react';
import styles from "./Skill.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Icon = (props) => {
    return (
        <FontAwesomeIcon icon={props.icon} className={styles.icon} />
    );
};
