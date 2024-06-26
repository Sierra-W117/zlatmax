'use client';

import Image from 'next/image';

import CatalogCard from '../../CatalogCard/CatalogCardFlashlight';
import styles from './Flashlights.module.scss';

import button from './ics/button.svg'

export default function Flashlights() {

    return (
        <section className={styles.catalog}>

            <div className="container">

                <div className={styles.container_one}>

                    <div className={styles.container_two}>
                        <div className={styles.main_font}> Фонари</div>

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

                </div>

            </div>
        </section>
    );
}