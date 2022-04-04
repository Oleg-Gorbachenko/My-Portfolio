import React from 'react';
import styles from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import styleTitle from "../common/styles/Title.module.css";


export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styleTitle.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt facere impedit iure laborum, nihil placeat quam qui saepe. Accusantium autem, deleniti excepturi illo ipsa mollitia numquam optio sunt vitae voluptatum'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt facere impedit iure laborum, nihil placeat quam qui saepe. Accusantium autem, deleniti excepturi illo ipsa mollitia numquam optio sunt vitae voluptatum'}/>
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt facere impedit iure laborum, nihil placeat quam qui saepe. Accusantium autem, deleniti excepturi illo ipsa mollitia numquam optio sunt vitae voluptatum'}/>
                </div>
            </div>
        </div>
    );
};
