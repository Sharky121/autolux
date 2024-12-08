import Link from "next/link";
import Image from "next/image";
import Container from '../container/container';
import styles from './footer.module.scss';
import { menu } from "@/data/menu";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container customClassName={styles.footerContainer}>
                <Link className={styles.footerLogo} href={"/"}>
                    <Image src="/logo-white.png" width="200" height="109" alt="Логотип автолюкс"/>
                </Link>

                <div className={styles.footerNav}>
                    <ul className={styles.footerNavList}>
                        {
                            menu.map((item, index) => (
                                <li key={index} className={styles.footerNavItem}>
                                    <Link href={item.url} className={styles.footerNavLink}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <hr className={styles.footerHr}/>

                <div className={styles.footerAddress}>
                    <ul className={styles.footerAddressList}>
                        <li className={styles.footerAddressItem}>ООО «Автолюкс»</li>
                        <li className={styles.footerAddressItem}><Link href="tel:+74951362612">+7 (495) 136-26-12</Link></li>
                        <li className={styles.footerAddressItem}><Link href="mailto:ooo.avtolyuks@list.ru">ooo.avtolyuks@list.ru</Link></li>
                        <li className={styles.footerAddressItem}>г. Москва, ул. Голубинская,</li>
                        <li className={styles.footerAddressItem}>дом 4а, строение 1, 117574</li>
                    </ul>
                </div>
            </Container>
            
            <div className={styles.footerLine}></div>
        </footer>
    )
}

export default Footer;

