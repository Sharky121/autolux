import styles from './flip-card.module.scss';

type FlipCardType = {
    title: string, 
    desc: string, 
    slug: string
}

const FlipCard = ({title, desc, slug}: FlipCardType) => {
    return (
        <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                    <div className={styles.flipCardFrontInner}>
                        <svg className={styles.flipCardIcon} viewBox="0 0 24 24" width="70" height="70" aria-hidden="true" focusable="false">
                            <use xlinkHref={`#ico-${slug}`} x="0" y="0"></use>
                        </svg>
                        <h4 className={styles.flipCardTitle} dangerouslySetInnerHTML={{__html: title}} />
                    </div>
                </div>
                <div className={styles.flipCardBack}>
                    <svg className={styles.flipCardIconWhite} viewBox="0 0 24 24" width="25" height="25" aria-hidden="true" focusable="false">
                        <use xlinkHref={`#ico-${slug}`} x="0" y="0"></use>
                    </svg>
                    <p className={styles.flipCardDesc}>{desc}</p> 
                </div>
            </div>
        </div>
    )
}

export default FlipCard;