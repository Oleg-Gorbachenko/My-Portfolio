import React from 'react';
import styles from './works.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./work/work";

export const Works = () => {
    return (
        <div className={styles.worksBlock}>
            <div className={`${styleContainer.container} ${styles.worksContainer}`}>
                <h3 className={styles.title}>Works</h3>
                <div className={styles.works}>
                    <Work title={'Social Network'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque ex hic laboriosam neque provident quae'}/>
                    <Work title={'Todolist'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque ex hic laboriosam neque provident quae'}/>
                    <Work title={'Counter'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque ex hic laboriosam neque provident quae'}/>
                </div>
            </div>
        </div>
    );
};
