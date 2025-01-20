'use client';

import { useState } from 'react';
import SideMenu from '../side-menu/side-menu';

import styles from './hamburger-menu.module.scss';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(true);
    }

    const handleCloseMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className={styles.hamburgerMenu} onClick={handleOpenMenu}>
                <span>Меню</span>
            </div>
            
            {
                isOpen && (
                    <SideMenu onClose={handleCloseMenu}/>
                )
            }
        </>
    )
}

export default HamburgerMenu;