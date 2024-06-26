'use client'; 
/*
directive from Next.js, indicating that the component should be rendered on the client-side. 
This is necessary for components that require DOM manipulation or other client-side functionality.
 */

import Image from 'next/image';

import styles from './Header.module.scss';

import profile from './ics/profile.svg'

import logo from './imgs/logo.png'

import glass from './ics/glass.svg'
import location from './ics/location.svg'
import down from './ics/down.svg'
import favourite from './ics/favourite.svg'
import cart from './ics/cart.svg'

function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.header1}>

                <div className="container">

                    <div className={styles.header_main}>

                        <div className={styles.header_first_level}>
                            <div className={styles.text_one}> О нас</div>
                            <div className={styles.text_one}> Оплата и доставка</div>
                            <div className={styles.text_one}> Новости</div>
                            <div className={styles.text_one}> Контакты</div>
                        </div>

                        <div className={styles.header_second_level}>
                            <Image src={profile} width={22} height={28} alt="profile"/>
                            <div className={styles.text_one}> Личный кабинет</div>
                        </div>

                    </div>
                </div>

            </div>


            <div className={styles.header2}>

                <div className="container">

                    <div className={styles.header_main}>

                        <div className={styles.header_main2}>

                            <Image src={logo} width={190} height={43} alt="logo"/>

                            <div className={styles.button}>
                                <Image src={glass} width={12} height={12} alt="glass"/>
                                <div className={styles.cart}> Поиск</div>
                            </div>
                        
                        </div>

                        <div className={styles.header_main22}>

                            <div className={styles.header_second_level}>
                                <Image src={location} alt="location"/>
                                <div className={styles.phone}> Москва </div>
                            </div>

                            <div className={styles.header_second_level}>
                                <div>
                                    <div className={styles.phone}> 8-800-777-49-67 </div>
                                    <div className={styles.phone2}> Заказать звонок </div>
                                </div>

                                <Image src={down} alt="down"/>
                            </div>




                            <Image src={favourite} width={28} height={27} alt="favourite"/>



                            <div className={styles.cart}>

                                <Image src={cart} width={37} height={35} alt="cart"/>
                        
                                <div className={styles.cartText}>
                                    <div className={styles.cartTextMoney}> 0 р. </div>
                                    <div className={styles.cartTextActive}> Оформить заказ </div>
                                </div>

                            </div>
                    </div>
                </div>
                </div>
            </div>



            <div className={styles.header1}>
                <div className="container">
                    <div className={styles.header_last_level}>
                        <div className={styles.text_rr}> Каталог ножей</div>
                        <div className={styles.text_r}> Клинковое оружие</div>
                        <div className={styles.text_r}> Сувенирные изделия</div>
                        <div className={styles.text_r}> Фонари ARMYTEK</div>
                        <div className={styles.text_r}> Сопуствующие товары</div>
                    </div>
                </div>

            </div>




        </header>
    );
}

export default Header;