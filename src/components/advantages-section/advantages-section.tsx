import Container from "../container/container";
import styles from './advantages-section.module.scss';
import FlipCard from "../flip-card/flip-card";

type AdvantagesSectionType = {
    title: string;
    type?: string,
    data: {
        slug: string,
        title: string,
        desc: string
    }[]
}

const AdvantagesSection = ({data, title, type}: AdvantagesSectionType) => {
    
    const itemToCssClass: {
        [key: string]: string
    } = {
        'drivers': styles.advantagesListDriver,
        'partners': styles.advantagesListPartners
    }

    return (
        <section className={styles.advantages}>
            <Container customClassName={styles.advantagesContainer}>
                <h2 className={styles.advantagesTitle}>{title}</h2>
                <ul className={`${styles.advantagesList} ${type ? itemToCssClass[type] : ''}`}>
                    {
                        data.map(({title, desc, slug}: {title: string; desc: string; slug: string}, index: number) => (
                            <li key={index} className={styles.advantagesItem}>
                                <FlipCard title={title} desc={desc} slug={slug}/>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </section>
    )
}

export default AdvantagesSection;