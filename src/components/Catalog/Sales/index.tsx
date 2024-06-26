'use client';

import Image from 'next/image';

import CatalogCard from '../../CatalogCard/CatalogCardKnife';
import styles from './Sales.module.scss';

import button from './ics/button.svg'
import tabs from './ics/tabs.svg'

export default function Sales() {
    return (
        <section className={styles.sales}>

            <div className="container">

                <div className={styles.container_one}>

                    <div className={styles.container_two}>
                        <div className={styles.main_font}> Акции</div>

                        <div className={styles.container_three}>
                            <div className={styles.side_font}> Все акции </div>
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