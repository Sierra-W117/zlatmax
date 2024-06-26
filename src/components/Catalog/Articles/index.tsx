'use client';

import Image from 'next/image';

import styles from './Articles.module.scss';

import c1 from './imgs/1.png'
import c2 from './imgs/2.png'
import c3 from './imgs/3.png'
import c4 from './imgs/4.png'

export default function Articles() {
    return (
        <section className={styles.article}>

            <div className="container">

                <div className={styles.container_one}>
                    
                    <div className={styles.prime_font}> Наши статьи</div>
                        
                    <div className={styles.container_two}>

                        <div className={styles.container_three}> 
                            <Image src={c1}  width={376} height={200} alt="c1"/>
                            <div className={styles.main_font}> Все о ножах: как правильно <br></br>выбрать </div>
                            <div className={styles.side_font}> 24.07.2019 </div>
                        </div>

                        <div className={styles.container_three}> 
                            <Image src={c2}  width={376} height={200} alt="c2"/>
                            <div className={styles.main_font}> Как правильно выбрать <br></br>фонарь </div>
                            <div className={styles.side_font}> 24.07.2019 </div>
                        </div>

                        <div className={styles.container_three}> 
                            <Image src={c3}  width={376} height={200} alt="c3"/>
                            <div className={styles.main_font}> Кухонные ножи для хозяек </div>
                            <div className={styles.side_font}> 24.07.2019 </div>
                        </div>

                        <div className={styles.container_three}> 
                            <Image src={c4}  width={376} height={200} alt="c4"/>
                            <div className={styles.main_font}> Кухонные ножи для хозяек </div>
                            <div className={styles.side_font}> 24.07.2019 </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}