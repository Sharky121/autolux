import Container from '../container/container';
import styles from './features.module.scss';

type FeaturesType = {
    title: string;
    subtitle?: string;
    isDesc?: boolean;
    data: {
        title: string;
        description?: string;
        ico: string;
    }[]
}

const Features = ({title, subtitle, data, isDesc = false}: FeaturesType) => {
    return (
        <section className={styles.features}>
            <Container customClassName={styles.featuresContainer}>
                <h2 className={styles.featuresTitle}>{title}</h2>
                {subtitle && (<p className={styles.featuresSubtitle}>{subtitle}</p>)}

                <ul className={styles.featuresList}>
                    {
                        data.map((item: {title: string; description?: string; ico: string;}, index: number) => (
                            <li style={{ '--bg': `url('/ico-${item.ico}.png')` } as React.CSSProperties} className={styles.featuresItem}  key={index}>
                                <h3>{item.title}</h3>
                                {isDesc && (<p>{item.description}</p>)}
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </section>
    )
}

export default Features;