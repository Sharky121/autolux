import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <Image src="logo.png" width={169} height={32} alt="Логотип автолюкс"/>
        </Link>
    )
}

export default Logo;