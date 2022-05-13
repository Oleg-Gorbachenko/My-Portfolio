import React from 'react';
import styles from './Works.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todolist.jpg';
import socialImage from './../assets/image/social-network.jpg';
import counterImage from './../assets/image/counter.jpg';

export const Works = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }
    const counter = {
        backgroundImage: `url(${counterImage})`,
    }

    return (
        <div className={styles.worksBlock}>
            <div className={`${styleContainer.container} ${styles.worksContainer}`}>
                <Title title={'Works'}/>
                <div className={styles.works}>
                    <Work style={social}
                          title={'Social Network'}
                          description={'Used technologies: React/Redux/Redux Toolkit/React-router-dom v6/Axios/Formik. Social Network app created with react hooks and class components, routing and redirects, REST api request/response flow, unit-tests and etc.'}/>
                    <Work style={todolist}
                          title={'Todolist'}
                          description={'Used technologies: React/Redux/Redux Toolkit/React-router-dom v6/ Jest(Unit-Tests) /Storybook/Axios /Formik/Material UI. Todolist app created with react hooks, routing and redirects, material UI, REST api request/response flow, unit-tests and etc.'}/>
                    <Work style={counter}
                          title={'Friday project'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque ex hic laboriosam neque provident quae'}/>
                </div>
            </div>
        </div>
    );
};
