import { driverFeatures } from "@/data/driver-features";

import Container from "../container/container";
import DriversForm from "../drivers-form/drivers-form";

import styles from "./drivers-features.module.scss";

const DriverFeatures = () => {
    return (
        <section className={styles.driverFeatures}>
            <Container customClassName={styles.driverFeaturesContainer}>
                <h2 className={styles.driverFeaturesTitle}>Получите ключи от новой Scania и выходите в <br /> первый рейс</h2>
                <ul className={styles.driverFeaturesList}>
                    {
                        driverFeatures.map((title, index) => (
                            <li key={index} className={styles.driverFeaturesItem}>
                                {title}
                            </li>
                        ))
                    }
                </ul>

                <DriversForm customClass={styles.driverFeaturesFeedback}/>
            </Container>
        </section>
    )
}

export default DriverFeatures;