import React from 'react';
import styles from './Works.module.scss'
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todo.jpg';
import socialImage from './../assets/image/social-network.jpg';
import studyCardsImage from './../assets/image/studyCards.jpg';
import Bounce from 'react-reveal/Bounce';

export const Works = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }
    const studyCards = {
        backgroundImage: `url(${studyCardsImage})`,
    }

    return (
        <div id='works' className={styles.worksBlock}>
            <Bounce right>
                <div className={styles.worksContainer}>
                    <Title title={'Works'}/>
                    <div className={styles.works}>
                        <Work href={'https://oleg-gorbachenko.github.io/my-social-network/'}
                              style={social}
                              title={'Social Network'}
                              description={'Used technologies: React/Redux/Redux Toolkit/React-router-dom v6/Axios/Formik. Social Network app created with react hooks and class components, routing and redirects, REST api request/response flow, unit-tests and etc.'}/>
                        <Work href={'https://oleg-gorbachenko.github.io/todoList/'}
                              style={todolist}
                              title={'Todolist'}
                              description={'Used technologies: React/Redux/Redux Toolkit/React-router-dom v6/ Jest(Unit-Tests) /Storybook/Axios /Formik/Material UI. Todolist app created with react hooks, routing and redirects, material UI, REST api request/response flow, unit-tests and etc.'}/>
                        <Work href={'https://oleg-gorbachenko.github.io/friday-project/'}
                              style={studyCards}
                              title={'Friday project'}
                              description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque ex hic laboriosam neque provident quae'}/>
                    </div>
                </div>
            </Bounce>
        </div>
    );
};
