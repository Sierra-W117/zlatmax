'use client';

import Link from 'next/link';

import styles from './PostHeader.module.scss';

import Image from 'next/image';


import pf1 from '../../../public/icons/pf1.svg'
import pf2 from '../../../public/icons/pf2.svg'
import pf3 from '../../../public/icons/pf3.svg'
import pf4 from '../../../public/icons/pf4.svg'

import tabs_postheader from '../../../public/icons/tabs_postheader.svg'

export default function PostHeader() {
    return (
            <div className={styles.navigation}>
                <div className="container">

                    <div  className={styles.container_zero}>

                        <div className={styles.text_big}> Интернет магазин сертифицированных </div>
                        <div className={styles.text_smaller}> златоустовских ножей </div>
                        <div className={styles.text_even_smaller}> Добро пожаловать на официальный сайт «ЗЛАТМАКС»! 
                            В нашем магазине <br></br>представлен наиболее широкий выбор Златоустовских ножей от 
                            Златоустовских <br></br>Оружейных Фабрик и компаний, мы являемся официальными поставщиками. </div>

                        <div className={styles.button_area}>
                            <div className={styles.button}>
                                <div className={styles.cart}>Подробнее</div>
                            </div>
                            <Image src={tabs_postheader} alt="tabs_postheader" />
                        </div>
                        
                        <div className={styles.container_one}>

                            <div className={styles.container_two}>
                                <Image src={pf1} alt="pf1"/>
                                <div className={styles.text_small}> Гарантия 100% возврата денежных средств</div>

                            </div>

                            <div className={styles.container_two}>
                                <Image src={pf2} alt="pf2"/>
                                <div className={styles.text_small}> Доставка по России, Казахстану и Белоруссии</div>

                            </div>

                            <div className={styles.container_two}>
                                <Image src={pf3} alt="pf3"/>
                                <div className={styles.text_small}> Возможность оформление заказа без регистрации.</div>

                            </div>

                            <div className={styles.container_two}>
                                <Image src={pf4} alt="pf4"/>
                                <div className={styles.text_small}> Скидки постоянным покупателям. </div>
                                
                            </div>


                        </div>
                    </div>
                </div>
            </div>

    );
}