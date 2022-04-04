import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import styleBtn from "../common/styles/Btn.module.css";
import styleTitle from "../common/styles/Title.module.css";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styleTitle.title}>Contacts</h2>
                <accept className={styles.forms}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="40" rows="10"></textarea>
                </accept>
                <button className={`${styleBtn.btn} ${styles.btn}`}>Push</button>
            </div>
        </div>
    );
};
