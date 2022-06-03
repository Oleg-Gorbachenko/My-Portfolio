import React from 'react';
import styles from './Skill.module.scss';
import {SkillIcon} from "./skillIcon/SkillIcon";


export const Skill = (props) => {

    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <SkillIcon icon={props.icon}/>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
};
