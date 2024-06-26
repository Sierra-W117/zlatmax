import Image from 'next/image';
import { useState } from 'react';

import styles from './CatalogCardFlashlight.module.scss';

import flashlight from './img/flashlight.png'

import star from './ics/star.svg'
import cart from './ics/cart.svg'

import comparison from './ics/comparison.svg'
import favourite from './ics/favourite.svg'

export default function CatalogCardFlashlight() {

    return (
        <div className={styles.card}>

            <div style={{padding: 30}}>
                <Image src={flashlight} alt="flashlight"/>
            </div>

            <div className={styles.card_container_one}>

                <div className={styles.card_container_two}>
                    <div className={styles.card_name}>Нож Лиса</div>
                </div>



                <div className={styles.card_container_two}>

                    <div className={styles.card_description}>95х18</div>

                    <div className={styles.card_description}>Орех, Алюминий</div>

                    
                </div>

                <div className={styles.card_container_two}>

                    <div className={styles.card_container_three}> 
                        <Image src={star} alt="star"/>
                        <Image src={star} alt="star"/>
                        <Image src={star} alt="star"/>
                        <Image src={star} alt="star"/>
                        <Image src={star} alt="star"/>
                    </div>

                    <div className={styles.card_description}>12 отзывов</div>

                </div>

                <hr className={styles.line}/>

                <div className={styles.card_container_two}>

                    <div className={styles.card_name}>2719 р.</div>

                    <div style={{display: 'flex', gap: 20}}>
                        <Image src={comparison} alt="comparison"/>
                        <Image src={favourite} alt="favourite"/>
                    </div>
                </div>
                
                <div className={styles.button}>
                    <div className={styles.cart}>В корзину</div>
                    <Image src={cart} alt="cart"/>
                </div>

            </div>


            
        </div>
    );
}