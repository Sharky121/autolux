'use client';

import Link from "next/link";
import Image from "next/image";

import Portal from "../portal/portal";

import { menu } from "@/data/menu";

import styles from './side-menu.module.scss';

type SideMenuType = {
    onClose: () => void;
}

const SideMenu = ({onClose}: SideMenuType) => {
    return (
        <Portal>
            <div className={styles.sideMenuBackdrop} onClick={onClose}></div>
            <div className={styles.sideMenu}>
                <div className={styles.sideMenuContainer}>
                    <div className={styles.sideMenuHeader}>
                        <Link className={styles.sideMenuLogo} href="/">
                            <Image src="/logo.png" alt="Лого" width={185} height={35} unoptimized/>
                        </Link>
                    </div>

                    <nav className={styles.sideMenuNav}>
                        <ul className={styles.sideMenuNavList}>
                            {
                                menu.map((item, index) => (
                                    <li key={index} className={styles.sideMenuNavItem}>
                                        <Link href={item.url} className={styles.sideMenuNavLink} onClick={onClose}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <div className={styles.sideMenuFooter}>
                        <Link className={styles.sideMenuPhoneNumber} href="tel:+74951362612">+7 (495) 136-26-12</Link>
                        <button className={styles.sideMenuPhoneButton} type="button">Перезвоните мне</button>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default SideMenu;