'use client';

import Image from 'next/image';

import styles from './Footer.module.scss';

import Facebook from '../../../public/icons/Facebook.svg'
import Telegram from '../../../public/icons/Telegram.svg'
import Viber from '../../../public/icons/Viber.svg'
import Whatsapp from '../../../public/icons/Whatsapp.svg'

import phone from '../../../public/icons/phone.svg'
import clocks from '../../../public/icons/clocks.svg'
import location from '../../../public/icons/location.svg'
import mail from '../../../public/icons/mail.svg'

import cube from '../../../public/icons/cube.svg'
import next_button from '../../../public/icons/next_button.svg'

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className="container">

                <div className={styles.footer_row}>
                    <div className={styles.footer_column}>
                        <div className={styles.font_title}>ИНФОРМАЦИЯ</div>
                        
                        <div className={styles.font}><a href='/' className={styles.font}>
                        Златоустовские ножи <b></b>в Москве и Московской <br></br>области</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>Ножевые стали</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>О нас</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>
                        Условия оплаты <br></br>и доставки</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>
                        Политика <br></br>конфиденциальности</a></div>
                    </div>

                    <div className={styles.footer_column}>
                        <div className={styles.font_title}>СЛУЖБА ПОДДЕРЖКИ</div>
                        
                        <div className={styles.font}><a href='/' className={styles.font}>Контактная информация</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>Возврат товара</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>Карта сайта</a></div>
                    </div>

                    <div className={styles.footer_column}>
                        <div className={styles.font_title}>ДОПОЛНИТЕЛЬНО</div>
                        
                        <div className={styles.font}><a href='/' className={styles.font}>Подарочные сертификаты</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>Партнеры</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>Товары со скидкой</a></div>
                    </div>

                    <div className={styles.footer_column}>
                        <div className={styles.font_title}>ЛИЧНЫЙ КАБИНЕТ</div>
                        
                        <div className={styles.font}><a href='/' className={styles.font}>Личный кабинет</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>История заказов</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>Мои закладки</a></div>
                        <div className={styles.font}><a href='/' className={styles.font}>Рассылка новостей</a></div>
                    </div>
                </div>
                    
                <hr className={styles.line}/> {/* hr - horizontal line */}

                <div className={styles.footer_row}>

                    <div className={styles.footer_column}>
                        <div className={styles.font_title}> КОНТАКТЫ</div>
                        
                        <div  className={styles.with_img}>
                            <Image src={phone} alt="phone"/>
                            <div className={styles.font}>8 (800) 777-49-67</div>
                        </div>

                        <div  className={styles.with_img}>
                            <Image src={clocks} alt="clocks"/>
                            <div className={styles.font}>Пн-Пт<br></br>7:00 - 16:00 (МСК)</div>
                            
                        </div>

                        <div  className={styles.with_img}>
                            <Image src={location} alt="location"/>
                            <div className={styles.font}>Златоуст,<br></br>ул. Шоссейная,<br></br>д. 1, офис «6Б»</div>
                            
                        </div>

                        <div  className={styles.with_img}>
                            <Image src={mail} alt="mail"/>
                            <div className={styles.font}>info@zlatmax.ru</div>
                        </div>

                        <div  className={styles.with_img}>
                        
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

                    </div>

                    <div className={styles.footer_column}>
                        <div className={styles.font_title}>ПОЛЕЗНЫЕ ССЫЛКИ</div>
                        
                        <div className={styles.font}><a href='/' className={styles.font}>Способы оплаты и доставки</a></div>
                    </div>

                    <div className={styles.footer_column}>
                        <div className={styles.font_title}>НАША ГАРАНТИЯ</div>

                        <div className={styles.font}>Недовольны своей покупкой? <br></br>Вы можете вернуть ее в течении <br></br>30 дней с даты получения,<br></br>согласно <span className={styles.fontActive}>нашим правилам</span> </div>

                    </div>

                    <div className={styles.footer_column}>
                        <div className={styles.font_title}> НОВОСТНАЯ РАССЫЛКА</div>
                        
                        <div className={styles.font}><a href='/' className={styles.font}>Подпишитесь прямо сейчас!</a></div>

                        <div className={styles.input}>
                            <div className={styles.font_example1}>example@gmail.com</div>
                            <Image src={next_button} width={50} height={50} alt="next_button" />
                        </div>

                        <div  className={styles.with_img}>
                        
                            <Image src={cube} alt="cube"/>
                            <div className={styles.font_example}>Я прочитал Условия соглашения и согласен с условиями</div>

                        </div>

                    </div>
                </div>

                <hr className={styles.line}/>

                <div className={styles.footer_row}>
                    
                    <div className={styles.font_bottom}>Все материалы, 
                        размещенные на сайте, носят справочный 
                        характер и не являются <br></br>публичной офертой, определяемойположениями Статьи 
                        437 Гражданского кодекса Российской Федерации.<br></br>При копировании материалов 
                        гиперссылка на www.zlatmax.ru обязательна!</div>
                    
                    
                    <div className={styles.font_bottom}><a href='/' className={styles.font_bottom}>Златоустовские 
                    ножи www.zlatmax.ru ©</a></div>

                </div>

            </div>
                
        </footer>
    );
}