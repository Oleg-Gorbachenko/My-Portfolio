import React from 'react';
import styles from "./Footer.module.scss";
import {Title} from "../common/components/title/Title";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {FooterIcon} from "./footerIcon/FooterIcon";
import codeWars from "../assets/image/codewars.png"
import Fade from 'react-reveal/Fade';

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.container}>
                <Title title={'Oleg Gorbachenko'}/>
                <div className={styles.socialIcons}>
                    <Fade right>
                        <div className={styles.socialIcon}>
                            <a href='https://t.me/oleg_gorbachenko'>
                                <FooterIcon icon={faTelegram}/>
                            </a>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={styles.socialIcon}>
                            <a href='https://www.linkedin.com/in/oleg-gorbachenko-935883231/'>
                                <FooterIcon icon={faLinkedinIn}/>
                            </a>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className={styles.socialIcon}>
                            <a href='https://github.com/Oleg-Gorbachenko'>
                                <FooterIcon icon={faGithub}/>
                            </a>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className={styles.socialIcon}>
                            <a href='https://www.codewars.com/users/Oleg-Gorbachenko'>
                                <img src={codeWars} alt='codeWars'/>
                            </a>
                        </div>
                    </Fade>
                </div>
                <span className={styles.copyright}>© 2022 All Rights Reserved.</span>
            </div>
        </div>
    );
};