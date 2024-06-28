'use client';

import Image from 'next/image';

import styles from './ArticleCard.module.scss';

import { StaticImageData } from 'next/image';

interface CatalogCardProps {
    imageSrc: string | StaticImageData;
    mainText: string;
}

export default function ArticleCard({ imageSrc, mainText }: CatalogCardProps) {
    return (
        <div className={styles.card}>
            
            <div className={styles.img}>
                <Image src={imageSrc} alt="product"/>
            </div>

            <div className={styles.card2}>
                <div className={styles.font}> {mainText} </div>
                <div className={styles.font_side}> 24.07.2019 </div>
            </div>   
        </div>
    );
}