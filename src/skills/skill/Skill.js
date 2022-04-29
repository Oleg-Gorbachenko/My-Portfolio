import React from 'react';
import styles from './Skill.module.scss';
import {Icon} from "./Icon";


export const Skill = (props) => {

    return (
        <div className={styles.skill}>
            <Icon icon={props.icon}/>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
};
