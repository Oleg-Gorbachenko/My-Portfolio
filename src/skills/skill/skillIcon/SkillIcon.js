import React from 'react';
import styles from "../Skill.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const SkillIcon = (props) => {
    return (
        <FontAwesomeIcon icon={props.icon} className={styles.img}/>
    );
};
