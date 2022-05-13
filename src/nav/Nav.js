import React from 'react';
import styles from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a className={styles.href} href="#">MAIN</a>
            <a className={styles.href} href="#">SKILLS</a>
            <a className={styles.href} href="#">WORKS</a>
            <a className={styles.href} href="#">CONTACTS</a>
        </div>
    );
};