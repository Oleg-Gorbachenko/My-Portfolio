import React from 'react';
import styles from "./Footer.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <Title title={'Oleg Gorbachenko'}/>
                <div className={styles.wrapper}>
                    <div className={styles.fullBodyElement}></div>
                    <div className={styles.fullBodyElement}></div>
                    <div className={styles.fullBodyElement}></div>
                    <div className={styles.fullBodyElement}></div>
                </div>
                <p>© 2022 All rights reserved</p>
            </div>
        </div>
    );
};