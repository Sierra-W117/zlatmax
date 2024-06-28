import Image from 'next/image';

import styles from './CatalogCard.module.scss';

import star from '../../../../public/icons/star.svg'
import cart from '../../../../public/icons/cart.svg'
import comparison from '../../../../public/icons/comparison.svg'
import favourite from '../../../../public/icons/favourite.svg'

import { StaticImageData } from 'next/image';

interface CatalogCardProps {
    imageSrc: string | StaticImageData;
}

export default function CatalogCard({ imageSrc }: CatalogCardProps) {
    return (
        <div className={styles.card}>

            <div className={styles.img}>
                <Image src={imageSrc} alt="product"/>
            </div>

            <div className={styles.card_container_one}>

                <div className={styles.card_container_two}>
                    <div className={styles.font}>Нож Лиса</div>
                </div>


                <div className={styles.card_container_two}>
                    <div className={styles.font_description}>95х18</div>
                    <div className={styles.font_description}>Орех, Алюминий</div>
                </div>

                <div className={styles.card_container_two}>

                    <div className={styles.card_container_three}> 
                        <Image src={star}  width={22} height={22} alt="star"/>
                        <Image src={star}  width={22} height={22} alt="star"/>
                        <Image src={star}  width={22} height={22} alt="star"/>
                        <Image src={star}  width={22} height={22} alt="star"/>
                        <Image src={star}  width={22} height={22} alt="star"/>
                    </div>

                    <div className={styles.font_description}>12 отзывов</div>

                </div>

                <hr className={styles.line}/>

                <div className={styles.card_container_two}>

                    <div className={styles.font}>2719 р.</div>

                    <div style={{display: 'flex', gap: 20}}>
                        <Image src={comparison}  width={26} height={25} alt="comparison"/>
                        <Image src={favourite}  width={28} height={25} alt="favourite"/>
                    </div>
                </div>
            
                <div className={styles.button}>
                    <div className={styles.font_button}>В корзину</div>
                    <Image src={cart}  width={18} height={17} alt="cart"/>
                </div>

            </div>
        </div>
    );
}