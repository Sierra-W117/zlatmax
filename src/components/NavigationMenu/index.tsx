'use client';

import Link from 'next/link';

import styles from './NavigationMenu.module.scss';

import Image from 'next/image';

import c1 from './ics/c1.svg';
import c2 from './ics/2.svg';
import c3 from './ics/3.svg';
import c4 from './ics/4.svg';

import tabs from './ics/tabs.svg';

export default function NavigationMenu() {
    return (
            <div className={styles.navigation}>
                <div className="container">

                    <div  className={styles.container_zero}>

                    <div className={styles.text_big}> Интернет магазин сертифицированных </div>
                    <div className={styles.text_smaller}> златоустовских ножей </div>
                    <div className={styles.text_even_smaller}> Добро пожаловать на официальный сайт «ЗЛАТМАКС»! 
                        В нашем магазине <br></br>представлен наиболее широкий выбор Златоустовских ножей от 
                        Златоустовских <br></br>Оружейных Фабрик и компаний, мы являемся официальными поставщиками. </div>

                    <div className={styles.button}>
                        <div className={styles.cart}>Подробнее</div>
                    </div>

                    <Image src={tabs} alt="tabs" style={{ marginTop: 30 }} />

                        <div className={styles.container_one} style={{ marginTop: 120 }}>

                            <div className={styles.container_two}>
                                <Image src={c1} alt="c1"/>

                                <div className={styles.text_small}> Гарантия 100% возврата денежных средств</div>
                            </div>

                            <div className={styles.container_two}>
                                <Image src={c2} alt="c2"/>

                                <div className={styles.text_small}> Доставка по России, Казахстану и Белоруссии</div>
                            </div>

                            <div className={styles.container_two}>
                                <Image src={c3} alt="c3"/>

                                <div className={styles.text_small}> Возможность оформление заказа без регистрации.</div>
                            </div>

                            <div className={styles.container_two}>
                                <Image src={c4} alt="c4"/>

                                <div className={styles.text_small}> Скидки постоянным покупателям. </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

    );
}