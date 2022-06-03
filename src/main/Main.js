import React from 'react';
import styles from './Main.module.scss';
import Bounce from 'react-reveal/Bounce';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';

export const Main = () => {
    return (
        <div id='main' className={styles.mainBlock}>
            <div className={styles.container}>
                <Bounce top>
                    <div className={styles.greeting}>
                        <span>Hi There</span>
                        <span>I am <span>Oleg Gorbachenko</span></span>
                        <ReactTypingEffect
                            text={"A Frontend Developer"}
                            eraseDelay={2500}
                            typingDelay={2000}
                            speed={150}
                        />
                    </div>
                </Bounce>
                <Bounce bottom>
                    <div className={styles.photo}>
                        <Tilt className="Tilt" options={{max: 25}}>
                            <div className={styles.image}>
                            </div>
                        </Tilt>
                    </div>
                </Bounce>
            </div>
        </div>
    );
};
