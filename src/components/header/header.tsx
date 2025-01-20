'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

import Container from "@/components/container/container";
import HeaderPhone from "../header-phone/header-phone";
import HamburgerMenu from "../hamburger-menu/hamburger-menu";

import styles from './header.module.scss';
import Nav from "../nav/nav";
import { useCallback, useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    
    const isHomePage = pathname === '/';

    const handleScroll = useCallback(() => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [handleScroll]);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerSecondary : ''} ${isHomePage ? styles.headerPrimary : ''}`}>
            <Container customClassName={styles.headerContainer}>
                <HamburgerMenu />

                <Link className={styles.headerLogo} href="/">
                    <Image src="/logo.png" alt="Лого" width="160" height="30" unoptimized/>
                </Link>

                <Nav />
                
                <HeaderPhone customClassName={styles.headerPhone} />
            </Container>
        </header>
    )
}

export default Header;