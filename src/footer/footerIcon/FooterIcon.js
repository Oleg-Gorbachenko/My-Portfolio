import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from '../Footer.module.scss'

export const FooterIcon = (props) => {
    return (
        <FontAwesomeIcon icon={props.icon} className={styles.imgFromFontAwesome}/>
    );
};
