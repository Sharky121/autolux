import Link from 'next/link';
import styles from './header-phone.module.scss';

interface IHeaderPhone {
    customClassName?: string
}

const HeaderPhone = ({customClassName}: IHeaderPhone) => {
    return (
        <div className={`${styles.headerPhoneWrapper} ${customClassName}`}>
            <Link className={styles.headerPhoneNumber} href="tel:+74951362612">+7 (495) 136-26-12</Link>
            <button className={styles.headerPhoneButton} type="button">Перезвоните мне</button>
            <Link className={styles.headerPhoneCall} href="tel:+74951362612">Звонок</Link>
        </div>
    )
}

export default HeaderPhone;