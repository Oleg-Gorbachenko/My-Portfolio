import React from 'react';
import {useForm, ValidationError} from '@formspree/react';
import styles from "./Contacts.module.scss";
import {Title} from "../common/components/title/Title";
import Bounce from 'react-reveal/Bounce';

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("xlezvale");

    return (
        <div id='contacts' className={styles.contactsBlock}>
            <Bounce bottom>
                <div className={styles.container}>
                    <Title title={'Contacts'}/>
                    <form onSubmit={handleSubmit} className={styles.forms}>
                        <label htmlFor="email">
                        </label>
                        <input
                            placeholder='E-mail'
                            className={styles.formArea}
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <textarea
                            placeholder='Your message'
                            className={styles.messageArea}
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        {state.succeeded &&
                            <div className={styles.doneMessage}>Done! Thanks for your message!</div>
                        }
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>
            </Bounce>
        </div>
    );
}
