import React from 'react';
import styles from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
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
