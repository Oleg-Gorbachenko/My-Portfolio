import React from 'react';
import styles from "../footer/Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";
import styleTitle from "../common/styles/Title.module.css";

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styleTitle.title}>Oleg Gorbachenko</h2>
                <div className={styles.wrapper}>
                    <div className={styles.fullBodyElement}></div>
                    <div className={styles.emptyBodyElement}></div>
                    <div className={styles.fullBodyElement}></div>
                    <div className={styles.emptyBodyElement}></div>
                    <div className={styles.fullBodyElement}></div>
                    <div className={styles.emptyBodyElement}></div>
                    <div className={styles.fullBodyElement}></div>
                </div>
                <p>2022 Все права защищены</p>
            </div>
        </div>
    );
};
