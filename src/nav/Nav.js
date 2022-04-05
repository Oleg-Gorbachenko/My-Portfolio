import React from 'react';
import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a className={styles.href} href="#">Главная</a>
            <a className={styles.href} href="#">Скиллы</a>
            <a className={styles.href} href="#">Работы</a>
            <a className={styles.href} href="#">Контакты</a>
        </div>
    );
};