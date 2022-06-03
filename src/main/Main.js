import React from 'react';
import styles from './Main.module.scss'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <span>I am <span>Oleg Gorbachenko</span></span>
                    <h1>A Frontend Developer</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}>
                    </div>
                </div>
            </div>
        </div>
    );
};
