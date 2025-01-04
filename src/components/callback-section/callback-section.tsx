import CalculationForm from "../calculate-form/calculate-form";
import Container from "../container/container";

import styles from './callback-section.module.scss';

const CallbackSection = () => {
    return (
        <section className={styles.callbackSection}>
            <h2 className="visually-hidden">Секция расчёта стоимости</h2>

            <Container customClassName={styles.callbackSectionContainer}>
                <CalculationForm />
            </Container>
        </section>
    )
}

export default CallbackSection;