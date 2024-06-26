'use client';

import Image from 'next/image';

import styles from './Flashlights.module.scss';

import flashlight from './img/flashlight.png'

import flashlight2 from './img/flashlight2.png'
import line from './ics/line.svg'

export default function Flashlights2() {
    return (
        <section className={styles.catalog}>

            <div className="container">

                <div className={styles.container_one}>
                            
                    <div className={styles.card}>

                        <div className={styles.card_container_one}>

                            <div className={styles.card_container_two}>
                                <div className={styles.card_name}>Тактические фонари</div>

                                <Image src={line} alt="line"/>

                                <div className={styles.card_description}>Lorem ipsum dolor sit amet, 
                                    <br></br>consectetur adipiscing elit. </div>

                                <div className={styles.button}>
                                    <div className={styles.cart}>Подробнее</div>
                                </div>
                            </div>
                            <Image src={flashlight} alt="flashlight"/>
                        </div>
                    </div>


                    <div className={styles.card}>

                        <div className={styles.card_container_one}>

                            <div className={styles.card_container_two}>
                                <div className={styles.card_name}>Палобные мультифонари</div>

                                <Image src={line} alt="line"/>

                                <div className={styles.card_description}>Lorem ipsum dolor sit amet, 
                                    <br></br>consectetur adipiscing elit. </div>

                                <div className={styles.button}>
                                    <div className={styles.cart}>Подробнее</div>
                                </div>
                            </div>
                            <Image src={flashlight2} alt="flashlight2"/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}