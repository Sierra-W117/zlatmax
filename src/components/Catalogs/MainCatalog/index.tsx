'use client';

import Image from 'next/image';

import styles from './MainCatalog.module.scss';

import knife5 from '../../../../public/images/knife5.png';
import knife6 from '../../../../public/images/knife6.png';
import knife7 from '../../../../public/images/knife7.png';
import knife8 from '../../../../public/images/knife8.png';
import knife9 from '../../../../public/images/knife9.png';
import knife10 from '../../../../public/images/knife10.png';

import MainCatalogCard from '../../CatalogCards/MainCatalogCard';

export default function MainCatalog() {
    return (
        <div className={styles.sales}>

            <div className="container">

                <div className={styles.container_one}>
                    <MainCatalogCard imageSrc={knife5} mainText={'Каталог ножей'}/>
                    <MainCatalogCard imageSrc={knife6} mainText={'Среднеклинковое оружие'}/>
                    <MainCatalogCard imageSrc={knife7} mainText={'Длинноклинковое оружие'}/>
                    <MainCatalogCard imageSrc={knife8} mainText={'Сувенирные изделия'}/>
                    <MainCatalogCard imageSrc={knife9} mainText={'Сопутствующие товары'}/>
                    <MainCatalogCard imageSrc={knife10} mainText={'Ножевая мастерская'}/>

                </div>
            </div>
        </div>
    );
}