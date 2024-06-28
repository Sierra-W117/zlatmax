'use client';

import Image from 'next/image';

import styles from './Articles.module.scss';

import knife1 from '../../../../public/images/knife1.png';
import knife2 from '../../../../public/images/knife2.png';
import knife3 from '../../../../public/images/knife3.png';
import knife4 from '../../../../public/images/knife4.png';

import ArticleCard from '../../CatalogCards/ArticleCard';

export default function Articles() {
    return (
        <div className={styles.article}>

            <div className="container">

                <div className={styles.container_one}>

                    <div className={styles.prime_font}> Наши статьи</div>

                    <div className={styles.container_two}>
                        <ArticleCard imageSrc={knife1} mainText={'Все о ножах: как правильно выбрать'}/>
                        <ArticleCard imageSrc={knife2} mainText={'Как правильно выбрать фонарь'}/>
                        <ArticleCard imageSrc={knife3} mainText={'Кухонные ножи для хозяек'}/>
                        <ArticleCard imageSrc={knife4} mainText={'Кухонные ножи для хозяек'}/>
                    </div>

                </div>
            </div>
        </div>
    );
}