'use client';

import { MenuType } from '@/data/menu';
import styles from './head-section.module.scss';
import Container from '../container/container';
import Image from 'next/image';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

type PageType = MenuType['url'];

type HeadSectionType = {
    type: PageType;
    data: {
        title: string;
        slug: string;
        subtitle: string;
        description: string;
    }
}

const HeadSection = ({data, type}: HeadSectionType) => {

    const typeToClass: {
        [key: string]: string
    } = {
        'transportation': styles.headSectionContainerTransportation,
        'about': styles.headSectionContainerAbout,
        'drivers': styles.headSectionContainerDrivers,
        'partners': styles.headSectionContainerPartners,
        'contacts': styles.headSectionContainerContacts 
    }
 
    return (
        <section className={styles.headSection}>
            <Container customClassName={`${styles.headSectionContainer} ${typeToClass[type]}`}>
                <Breadcrumbs title={data.title} />
                <div className={styles.headSectionHeader}>
                    <h1 className={styles.headSectionTitle}>{data.title}</h1>
                    <p className={styles.headSectionSubtitle}>{data.subtitle}</p>
                </div>

                <div className={styles.headSectionContent}>
                    <Image className={styles.headSectionImage}
                        src={`/${type}.jpg`} 
                        width={340}
                        height={170}
                        quality={100}
                        alt="О компании" unoptimized
                    />
                    
                    <div className={styles.headSectionDesc} dangerouslySetInnerHTML={{__html: data.description}} />
                </div>
            </Container>
        </section>
    )
}

export default HeadSection;