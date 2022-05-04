import React from 'react';
import styles from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import styleBtn from "../common/styles/Btn.module.scss";
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={styles.forms}>
                    <input className={styles.formControl} type="text" placeholder='Name'/>
                    <input className={styles.formControl} type="text" placeholder='E-mail'/>
                    <textarea className={styles.formControl} name="" id="" cols="60" rows="10"
                              placeholder='Your message'></textarea>
                </form>
                <button type='submit' className={`${styleBtn.btn} ${styles.btn}`}>Push</button>
            </div>
        </div>
    );
};
