'use client';

import Image from 'next/image';

import CatalogCard from '../../CatalogCard/CatalogCardKnife';
import styles from './Tops.module.scss';

import button from './ics/button.svg'
import tabs from './ics/tabs.svg'

export default function Tops() {

    return (
        <section className={styles.top}>

            <div className="container">

                <div className={styles.container_one}>

                    <div className={styles.container_two}>
                        <div className={styles.main_font}> Хиты продаж</div>

                        <div className={styles.container_three}>
                            <div className={styles.side_font}> Перейти в каталог </div>
                            <Image src={button} alt="button"/>
                        </div>
                        
                    </div>

                    <div className={styles.container_two}>
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                    </div>

                    <Image src={tabs} alt="tabs"/>

                </div>
            </div>

        </section>
    );
}