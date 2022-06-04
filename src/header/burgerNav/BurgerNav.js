import React, {useState} from 'react';
import styles from './BurgerNav.module.scss';
import {Link} from "react-scroll";
import burgerMenu from '../../assets/image/burgerMenuBlue.png'

export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={styles.burgerNav}>
            <div className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
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
            </div>
            <img src={burgerMenu} alt={'burgerMenu'} className={styles.burgerBtn} onClick={onBurgerBtnClick}/>
        </div>
    );
};