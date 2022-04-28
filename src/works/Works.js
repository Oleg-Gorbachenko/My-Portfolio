import React from 'react';
import styles from './Works.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./work/work";
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
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque ex hic laboriosam neque provident quaeLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque ex hic laboriosam neque provident quae'}/>
                    <Work style={todolist}
                          title={'Todolist'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque ex hic laboriosam neque provident quae'}/>
                    <Work style={counter}
                          title={'Counter'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque ex hic laboriosam neque provident quae'}/>
                </div>
            </div>
        </div>
    );
};
