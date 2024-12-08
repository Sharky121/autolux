import Link from 'next/link';
import styles from './nav.module.scss';
import { menu } from '@/data/menu';

const Nav = () => {
    return (
        <nav className={styles.mainNav}>
            <ul className={styles.mainNavList}>
                {
                    menu.map((item, index) => (
                        <li key={index} className={styles.mainNavItem}>
                            <Link href={item.url} className={styles.mainNavLink}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Nav;