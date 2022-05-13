import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Oleg Gorbachenko</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};
