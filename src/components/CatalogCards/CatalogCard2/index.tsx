'use client';

import Image from 'next/image';

import styles from './CatalogCard2.module.scss';

import line from '../../../../public/icons/line.svg'

import { StaticImageData } from 'next/image';

interface CatalogCardProps {
    imageSrc: string | StaticImageData;
    mainText: string;
}

export default function CatalogCard2({ imageSrc, mainText }: CatalogCardProps) {
    return (
        <div className={styles.card}>

            <div className={styles.card_container_two}>

                <div className={styles.font}>{mainText}</div>

                <Image src={line} alt="line"/>

                <div className={styles.font_description}>Lorem ipsum dolor sit amet, 
                    <br></br>consectetur adipiscing elit. </div>

                <div className={styles.button}>
                    <div className={styles.font_cart}>Подробнее</div>
                </div>
            </div>


            <div className={styles.img}>
                <Image src={imageSrc} alt="product"/>
            </div>
            
        </div>
        
    );
}