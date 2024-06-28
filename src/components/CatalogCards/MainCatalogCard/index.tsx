'use client';

import Image from 'next/image';

import styles from './MainCatalogCard.module.scss';


import line_maincatalog from '../../../../public/icons/line_maincatalog.svg'
import circle_maincatalog from '../../../../public/icons/circle_maincatalog.svg'


import { StaticImageData } from 'next/image';

interface CatalogCardProps {
    imageSrc: string | StaticImageData;
    mainText: string;
}

export default function MainCatalogCard({ imageSrc, mainText  }: CatalogCardProps) {
    return (
        <div className={styles.container_two}>

            <div className={styles.font}> {mainText}</div>
            <Image src={line_maincatalog} alt="line"/>

            <div className={styles.container_three}> 

                <div className={styles.container_four}>
                    <div className={styles.font_side}> <Image src={circle_maincatalog} alt="circle"/> Разделочные </div>
                    <div className={styles.font_side}> <Image src={circle_maincatalog} alt="circle"/> Туристические </div>
                    <div className={styles.font_side}> <Image src={circle_maincatalog} alt="circle"/> Охотничьи </div>
                </div>

                <div className={styles.img}>
                    <Image src={imageSrc} alt="product" />
                </div>
                
            </div>

        </div>
    );
}