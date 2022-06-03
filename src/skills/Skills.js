import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faCss3, faGitAlt, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {faCircleCheck, faPenSquare, faShareFromSquare, faWarehouse} from "@fortawesome/free-solid-svg-icons";


export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill icon={faJs}
                           title={'JS/TS'}
                           description={'JS allows us to build both front-end and back-end'}/>
                    <Skill icon={faReact}
                           title={'REACT'}
                           description={`I'm using React in SPA to render pages efficiently`}/>
                    <Skill icon={faWarehouse}
                           title={'REDUX'}
                           description={'Easily store and modify data'}/>
                    <Skill icon={faShareFromSquare}
                           title={'AXIOS'}
                           description={'Worked with requests to the server and processed them'}/>
                    <Skill icon={faCss3}
                           title={'HTML/CSS'}
                           description={'Besides pure css I use preprocessors (SCSS,LESS,SAAS)'}/>
                    <Skill icon={faGitAlt}
                           title={'GIT/GITHUB'}
                           description={'Great assistant for team development'}/>
                    <Skill icon={faCircleCheck}
                           title={'UNIT TESTS'}
                           description={'I am familiar with TDD and find it useful'}/>
                    <Skill icon={faPenSquare}
                           title={'FORMIK/REDUX FORM'}
                           description={'Makes it easier to work with forms'}/>
                </div>
            </div>
        </div>
    );
};
