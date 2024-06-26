'use client';

import Image from 'next/image';

import styles from './Footer.module.scss';

import Facebook from './img/Facebook.svg'
import Telegram from './img/Telegram.svg'
import Viber from './img/Viber.svg'
import Whatsapp from './img/Whatsapp.svg'

import phone from './ics/phone.svg'
import clocks from './ics/clocks.svg'
import location from './ics/location.svg'
import mail from './ics/mail.svg'

import cube from './ics/cube.svg'

import button from './ics/button.svg'

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className="container">

                <div className={styles.footer_container_one}>
                    {/*
                    ul is the unordered list element, which is used to group related items together.
                    li is the list item element, which represents each item within the list.
                    */}
                    <ul className={styles.footer_container_two}>
                        <li className={styles.titles}>ИНФОРМАЦИЯ</li>
                        
                        <li className={styles.text}><a href='/' className={styles.text}>Златоустовские ножи <br></br>в Москве и Московской <br></br>области</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>Ножевые стали</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>О нас</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>Условия оплаты <br></br>и доставки</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>Политика <br></br>конфиденциальности</a></li>
                    </ul>

                    <ul className={styles.footer_container_two}>
                        <li className={styles.titles}>СЛУЖБА ПОДДЕРЖКИ</li>
                        
                        <li className={styles.text}><a href='/' className={styles.text}>Контактная информация</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>Возврат товара</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>Карта сайта</a></li>
                    </ul>

                    <ul className={styles.footer_container_two}>
                        <li className={styles.titles}>ДОПОЛНИТЕЛЬНО</li>
                        
                        <li className={styles.text}><a href='/' className={styles.text}>Подарочные сертификаты</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>Партнеры</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>Товары со скидкой</a></li>
                    </ul>

                    <ul className={styles.footer_container_two}>
                        <li className={styles.titles}>ЛИЧНЫЙ КАБИНЕТ</li>
                        
                        <li className={styles.text}><a href='/' className={styles.text}>Личный кабинет</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>История заказов</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>Мои закладки</a></li>
                        <li className={styles.text}><a href='/' className={styles.text}>Рассылка новостей</a></li>
                    </ul>
                </div>
                    
                <hr className={styles.line}/> {/* hr - horizontal line */}

                <div className={styles.footer_container_one}>

                    <ul className={styles.footer_container_two}>
                        <li className={styles.titles}> КОНТАКТЫ</li>
                        
                        <div  className={styles.stats}>
                            <Image src={phone} alt="phone"/>
                            <li className={styles.text}>8 (800) 777-49-67</li>
                        </div>

                        <div  className={styles.stats}>
                            <Image src={clocks} alt="clocks"/>
                            <li className={styles.text}>Пн-Пт<br></br>7:00 - 16:00 (МСК)</li>
                            
                        </div>

                        <div  className={styles.stats}>
                            <Image src={location} alt="location"/>
                            <li className={styles.text}>Златоуст,<br></br>ул. Шоссейная,<br></br>д. 1, офис «6Б»</li>
                            
                        </div>

                        <div  className={styles.stats}>
                            <Image src={mail} alt="mail"/>
                            <li className={styles.text}>info@zlatmax.ru</li>
                        </div>

                        <div  className={styles.stats}>
                        
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <Image src={Facebook} alt="Facebook" />
                            </a>

                            <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                                <Image src={Telegram} alt="Telegram" />
                            </a>

                            <a href="https://www.viber.com/en/" target="_blank" rel="noopener noreferrer">
                                <Image src={Viber} alt="Viber" />
                            </a>

                            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                <Image src={Whatsapp} alt="Whatsapp" />
                            </a>

                        </div>

                    </ul>

                    <ul className={styles.footer_container_two}>
                        <li className={styles.titles}>ПОЛЕЗНЫЕ ССЫЛКИ</li>
                        
                        <li className={styles.text}><a href='/' className={styles.text}>Способы оплаты и доставки</a></li>
                    </ul>

                    <ul className={styles.footer_container_two}>
                        <li className={styles.titles}>НАША ГАРАНТИЯ</li>

                        <li className={styles.text}>Недовольны своей покупкой? <br></br>Вы можете вернуть ее в течении <br></br>30 дней с даты получения,<br></br>согласно <span className={styles.text_span}>нашим правилам</span> </li>

                    </ul>

                    <ul className={styles.footer_container_two}>
                        <li className={styles.titles}> НОВОСТНАЯ РАССЫЛКА</li>
                        
                        <li className={styles.text}><a href='/' className={styles.text}>Подпишитесь прямо сейчас!</a></li>

                        <div className={styles.input}>
                            <li className={styles.text_example}>example@gmail.com</li>
                            <Image src={button} alt="button"/>
                        </div>

                        <div  className={styles.stats}>
                        
                            <Image src={cube} alt="cube"/>
                            <li className={styles.text}>Я прочитал Условия соглашения и согласен с условиями</li>

                        </div>

                    </ul>
                </div>

                <hr className={styles.line}/>

                <div className={styles.footer_container_one}>

                    
                    <li className={styles.text_bottom} style={{listStyle: 'none'}}>Все материалы, 
                        размещенные на сайте, носят справочный 
                        характер и не являются <br></br>публичной офертой, определяемойположениями Статьи 
                        437 Гражданского кодекса Российской Федерации.<br></br>При копировании материалов 
                        гиперссылка на www.zlatmax.ru обязательна!</li>
                    
                    
                    <p className={styles.text_bottom}><a href='/' className={styles.text_bottom}>Златоустовские 
                    ножи www.zlatmax.ru ©</a></p>

                </div>

            </div>
                
        </footer>
    );
}