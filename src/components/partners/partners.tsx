'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import Container from '../container/container';

import 'swiper/css';
import styles from './partners.module.scss';

const Partners = () => {
    const slides = Array.from({length: 12}, function(_, index) {
        return `slide_${index + 1}.png`;
    });

    return (
        <section className={styles.partners}>
            <Container customClassName={styles.partnersContainer}>
                <h2 className={styles.partnersTitle}>С кем мы работаем</h2>
                <p className={styles.partnersSubTitle}>Если вы ищете надёжного партнёра для своих грузоперевозок, <br /> обратитесь к нам. Мы поможем вам оптимизировать логистические процессы <br /> и обеспечить бесперебойную работу вашего бизнеса.</p>
            </Container>

            <div className={styles.partnersCarousel}>
                <h3 className={styles.partnersCarouselTitle}>Производители</h3>

                <Swiper slidesPerView={'auto'} centeredSlides={true} loop={true}>
                    {
                        slides.map((slide: string, index: number) => (
                            <SwiperSlide className={`slider ${styles.partnersCarouselSlide}`}  key={index} >
                                <Image className={styles.partnersImage} src={`/${slide}`} width={112} height={70} alt="Партнер"/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Partners;