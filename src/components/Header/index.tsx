'use client'; 
/*
directive from Next.js, indicating that the component should be rendered on the client-side. 
This is necessary for components that require DOM manipulation or other client-side functionality.
 */

import Image from 'next/image';
import styles from './Header.module.scss';


import logo from '../../../public/images/logo.png'

import location_white from '../../../public/icons/location_white.svg'
import profile from '../../../public/icons/profile.svg'
import next_button_white_down from '../../../public/icons/next_button_white_down.svg'
import favourite_black from '../../../public/icons/favourite_black.svg'
import glass from '../../../public/icons/glass.svg'
import main_cart from '../../../public/icons/main_cart.svg'

import phone from './phone.svg'
import cart from './cart.svg'
import group from './group.svg'
import heart from './heart.svg'

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
                                <Image src={location_white} alt="location_white"/>
                                <div className={styles.phone}> Москва </div>
                            </div>

                            <div className={styles.header_second_level}>
                                <div>
                                    <div className={styles.phone}> 8-800-777-49-67 </div>
                                    <div className={styles.phone2}> Заказать звонок </div>
                                </div>

                                <Image src={next_button_white_down} alt="next_button_white_down"/>
                            </div>




                            <Image src={favourite_black} width={28} height={27} alt="favourite_black"/>



                            <div className={styles.cart}>

                                <Image src={main_cart} width={37} height={35} alt="main_cart"/>
                        
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

            <div className={styles.header_mobile}>
                <div className={styles.header1_mobile}>

                    <div className="container">

                        <div className={styles.header_main_mobile}> 
                            <Image src={phone} width={28} height={27} alt="phone"/>
                            <Image src={profile} width={28} height={27} alt="profile"/>
                            <Image src={heart} width={28} height={27} alt="heart"/>
                            <Image src={cart} width={35} height={31} alt="cart"/>
                            <Image src={group} width={28} height={17} alt="group"/>

                        </div>
                    </div>
                </div>

                <div className={styles.header2_mobile}>
                    <div className="container">
                        <Image src={logo} width={190} height={43} alt="logo"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;