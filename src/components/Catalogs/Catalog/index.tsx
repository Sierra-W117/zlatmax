'use client';

import Image from 'next/image';

import CatalogCard from '../../CatalogCards/CatalogCard';
import styles from './Catalog.module.scss';

import next_button_white from '../../../../public/icons/next_button_white.svg'
import tabs from '../../../../public/icons/tabs.svg'

import { StaticImageData } from 'next/image';

interface MyPageProps {
    imageSrc: string | StaticImageData;
    mainText: string;
    sideText: string;
}

export default function Catalog({ imageSrc, mainText, sideText }: MyPageProps) {
    return (
        <div className={styles.catalog}>

            <div className="container">

                <div className={styles.container_one}>

                    <div className={styles.container_two}>
                        <div className={styles.font}> {mainText}</div>

                        <div className={styles.container_three}>
                            <div className={styles.font_side}> {sideText}</div>
                            <Image src={next_button_white} alt="next_button_white"/>
                        </div>
                        
                    </div>

                    <div className={styles.container_four}>
                        <CatalogCard imageSrc={imageSrc} />
                        <CatalogCard imageSrc={imageSrc} />
                        <CatalogCard imageSrc={imageSrc} />
                        <CatalogCard imageSrc={imageSrc} />
                    </div>

                    <Image src={tabs} alt="tabs"/>

                </div>
            </div>

        </div>
    );
}