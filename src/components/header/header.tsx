import Container from "@/components/container/container";
import HeaderPhone from "../header-phone/header-phone";
import HamburgerMenu from "../hamburger-menu/hamburger-menu";
import Link from "next/link";
import Image from "next/image";

import styles from './header.module.scss';
import Nav from "../nav/nav";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container customClassName={styles.headerContainer}>
                <HamburgerMenu />

                <Link className={styles.headerLogo} href="/">
                    <Image src="/logo.png" alt="Лого" width="160" height="30"/>
                </Link>

                <Nav />
                
                <HeaderPhone customClassName={styles.headerPhone} />
            </Container>
        </header>
    )
}

export default Header;