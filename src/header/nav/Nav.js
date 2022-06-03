import React from 'react';
import styles from './Nav.module.scss';
import Flip from 'react-reveal/Flip';
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Flip top>
                <Link
                    activeClass={styles.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Main
                </Link>
                <Link
                    activeClass={styles.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Skills
                </Link>
                <Link
                    activeClass={styles.active}
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Works
                </Link>
                <Link
                    activeClass={styles.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Contacts
                </Link>
            </Flip>
        </div>
    );
};