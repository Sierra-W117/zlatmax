'use client';

import Image from 'next/image';

import styles from './Articles.module.scss';


import next_button_white from '../../../../public/icons/next_button_white.svg'

import CatalogCard from '../../CatalogCards/CatalogCard';

import tabs_2 from '../../../../public/icons/tabs_2.svg'

import { StaticImageData } from 'next/image';

interface MyPageProps {
    photo: string | StaticImageData;
}


export default function News({ photo }: MyPageProps) {
    return (
        <div className={styles.news}>
            <div className="container">
                <div className={styles.container_one}>

                    <div className={styles.container_two}>

                        <div className={styles.container_text}>
                            <div className={styles.main_font}> Новинки </div>
                            <div className={styles.side_font}> Добро пожаловать на официальный сайт «ЗЛАТМАКС»! 
                                В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от 
                                Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками. </div>

                            <div className={styles.active_font}> Больше новинок
                                <Image src={next_button_white} alt="next_button_white"/> </div>

                        </div>
                                
                        <CatalogCard imageSrc={photo} />
                        <CatalogCard imageSrc={photo} />
                        <CatalogCard imageSrc={photo} />
                                
                    </div>


                    <Image src={tabs_2} alt="tabs_2"/>
                </div>
            </div>
        </div>
    );
}