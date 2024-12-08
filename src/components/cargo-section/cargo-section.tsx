import Link from "next/link";
import Container from "../container/container";
import style from './cargo-section.module.scss';
import {cargoData} from '@/data/cargo-data';

const CargoSection = () => {
    return (
        <section className={style.cargo}>
            <Container customClassName={style.cargoContainer}>
                <h2 className={style.cargoTitle}>Какие грузы мы перевозим</h2>
                <ul className={style.cargoList}>
                    {
                        cargoData.map(({title, desc, slug}: {title: string; desc: string; slug: string}, index: number) => (
                            <li key={index} className={style.cargoItem}>
                                <Link className={style.cargoLink} href={'/'}>
                                    <svg className={style.cargoIcon} viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
                                        <use xlinkHref={`#ico-${slug}`} x="0" y="0"></use>
                                    </svg>
                                    <h4>{title}</h4>
                                    <p>{desc}</p>                                
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </section>
    )
}

export default CargoSection;