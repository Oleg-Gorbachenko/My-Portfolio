import React from 'react';
import styles from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={styles.container}>
                <Title title={'Contacts'}/>
                <form className={styles.forms}>
                    <input className={styles.formArea} type="text" placeholder='Name'/>
                    <input className={styles.formArea} type="text" placeholder='E-mail'/>
                    <textarea className={styles.messageArea} placeholder='Your message'/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};
