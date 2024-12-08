import Image from 'next/image';
import styles from './logo.module.scss';

const Logo = () => {
    return (
        <a href="/">
            <Image src="logo.png" width={169} height={32} alt="Логотип автолюкс"/>
        </a>
    )
}

export default Logo;