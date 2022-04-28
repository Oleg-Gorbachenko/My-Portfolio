import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import styleBtn from "../common/styles/Btn.module.scss";
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <accept className={styles.forms}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="40" rows="10"></textarea>
                </accept>
                <button type='submit' className={`${styleBtn.btn} ${styles.btn}`}>Push</button>
            </div>
        </div>
    );
};
