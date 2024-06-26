'use client';

import Image from 'next/image';

import styles from './Articles.module.scss';

import button from './ics/button.svg'
import tabs from './ics/tabs.svg'

import CatalogCard from '../../CatalogCard/CatalogCardKnife';

export default function News() {
    return (
        <section className={styles.news}>
                
            <div className="container">

                <div className={styles.container_one}>
                    
                    <div className={styles.container_two}>
                        <div className={styles.main_font}> Новинки </div>
                        <div className={styles.side_font}> Добро пожаловать на официальный сайт «ЗЛАТМАКС»! 
                            В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от 
                            Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками. </div>

                        <div className={styles.cont}>
                            <div className={styles.active_font}> Больше новинок </div>
                            <Image src={button} alt="button"/>

                        </div>

                    </div>

                    <div className={styles.container_three}>
                        
                        <div className={styles.container_four}>
                            <CatalogCard />
                            <CatalogCard />
                            <CatalogCard />
                        </div>
                        <Image src={tabs} alt="tabs"/>

                    </div>

                </div>

            </div>

        </section>
    );
}