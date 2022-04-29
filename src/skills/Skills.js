import React from 'react';
import styles from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faCss3, faJs, faReact} from "@fortawesome/free-brands-svg-icons";


export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill icon={faJs}
                           title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt facere impedit iure laborum, nihil placeat quam qui saepe. Accusantium autem, deleniti excepturi illo ipsa mollitia numquam optio sunt vitae voluptatum'}/>
                    <Skill icon={faReact}
                           title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt facere impedit iure laborum, nihil placeat quam qui saepe. Accusantium autem, deleniti excepturi illo ipsa mollitia numquam optio sunt vitae voluptatum'}/>
                    <Skill icon={faCss3}
                           title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt facere impedit iure laborum, nihil placeat quam qui saepe. Accusantium autem, deleniti excepturi illo ipsa mollitia numquam optio sunt vitae voluptatum'}/>
                </div>
            </div>
        </div>
    );
};
