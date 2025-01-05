import Link from 'next/link';
import styles from './breadcrumbs.module.scss';

const Breadcrumbs = ({title}: {title: string}) => {
    return (
        <div className={styles.breadcrumbs}>
            <h2 className="visually-hidden">Хлебные крошки</h2>
            <ul className={styles.breadcrumbsList}>
                <li className={styles.breadcrumbsItem}>
                    <Link href='/' className={styles.breadcrumbsLink}>Главная</Link>
                </li>
                <li className={styles.breadcrumbsItem}>
                    <span className={styles.breadcrumbsTitle}>{title}</span>
                </li>
            </ul>    
        </div>
    )
}

export default Breadcrumbs;