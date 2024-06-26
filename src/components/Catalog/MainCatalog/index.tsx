'use client';

import Image from 'next/image';

import styles from './Articles.module.scss';

import knife1 from './imgs/knife1.png'
import knife2 from './imgs/knife2.png'
import knife3 from './imgs/knife3.png'
import knife4 from './imgs/knife4.png'
import knife5 from './imgs/knife5.png'
import knife6 from './imgs/knife6.png'

import circle from './ics/circle.svg'

import line from './ics/line.svg'

export default function MainCatalog() {
    return (
        <section className={styles.sales}>

            <div className="container">

                <div className={styles.container_one}>
                        
                    <div className={styles.container_two}>

                        <div className={styles.main_font}> Каталог ножей</div>
                        <Image src={line} alt="line"/>

                        <div className={styles.container_three}> 

                            <div className={styles.container_four}>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Разделочные </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Туристические </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Охотничьи </div>
                            </div>

                            <Image src={knife1} alt="knife1"/>
                        </div>

                    </div>

                    <div className={styles.container_two}>

                        <div className={styles.main_font}> Среднеклинковое оружие</div>
                        <Image src={line} alt="line"/>

                        <div className={styles.container_three}> 

                            <div className={styles.container_four}>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Разделочные </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Туристические </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Охотничьи </div>
                            </div>

                            <Image src={knife2} alt="knife2"/>
                        </div>

                    </div>

                    <div className={styles.container_two}>

                        <div className={styles.main_font}> Длинноклинковое оружие</div>
                        <Image src={line} alt="line"/>

                        <div className={styles.container_three}> 

                            <div className={styles.container_four}>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Разделочные </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Туристические </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Охотничьи </div>
                            </div>

                            <Image src={knife3} alt="knife3"/>
                        </div>

                    </div>

                    <div className={styles.container_two}>

                        <div className={styles.main_font}> Сувенирные изделия</div>
                        <Image src={line} alt="line"/>

                        <div className={styles.container_three}> 

                            <div className={styles.container_four}>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Разделочные </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Туристические </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Охотничьи </div>
                            </div>

                            <Image src={knife4} alt="knife4"/>
                        </div>

                    </div>

                    <div className={styles.container_two}>

                        <div className={styles.main_font}> Сопутствующие товары</div>
                        <Image src={line} alt="line"/>

                        <div className={styles.container_three}> 

                            <div className={styles.container_four}>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Разделочные </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Туристические </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Охотничьи </div>
                            </div>

                            <Image src={knife5} alt="knife5"/>
                        </div>

                    </div>

                    <div className={styles.container_two}>

                        <div className={styles.main_font}> Ножевая мастерская</div>
                        <Image src={line} alt="line"/>

                        <div className={styles.container_three}> 

                            <div className={styles.container_four}>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Разделочные </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Туристические </div>
                                <div className={styles.side_font}> <Image src={circle} alt="circle"/> Охотничьи </div>
                            </div>

                            <Image src={knife6} alt="knife6"/>
                        </div>

                    </div>



                </div>
            </div>
        </section>
    );
}