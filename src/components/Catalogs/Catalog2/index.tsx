'use client';

import Image from 'next/image';

import styles from './Catalog2.module.scss';

import CatalogCard2 from '../../CatalogCards/CatalogCard2';

import flashlight1 from '../../../../public/images/flashlight1.png';
import flashlight2 from '../../../../public/images/flashlight2.png';

export default function Catalog2() {
    return (
        <div className={styles.catalog}>
            <div className="container">
                <div className={styles.container_two}>
                    <div className={styles.container_one}>  
                        <CatalogCard2 imageSrc={flashlight1} mainText={'Тактические фонари'}/>
                        <CatalogCard2 imageSrc={flashlight2} mainText={'Палобные мультифонари'}/>

                    </div>
                </div>
            </div>
        </div>
    );
}