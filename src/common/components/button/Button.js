import React from 'react';
import styles from './Button.module.scss'

export const Button = (props) => {
    return (
        <a href={props.href} className={styles.btn}>{props.name}</a>
    );
};
