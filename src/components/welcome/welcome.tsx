import Button from "../button/button";
import FormInput from "../form-input/form-input";

import styles from './welcome.module.scss';

const ButtonParams = {
    color: 'primary',
    size: 'flex',
    title: 'Отправить',
    customClassName: styles.welcomeFormButton
}

const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <div className={styles.welcomeFeedback}>
                <h2 className={styles.welcomeTitle}>Автомобильные <br /> FTL грузоперевозки <br /> от 20 тонн</h2>
                <p className={styles.welcomeSubTitle}>Введите данные, чтобы оставить заявку на грузоперевозку</p>
                <form className={styles.welcomeForm} action="">
                    <ul className={styles.welcomeFormList}>
                        <li className={styles.welcomeFormItem}>
                            <FormInput name="from" label="Откуда" />
                        </li>
                        <li className={styles.welcomeFormItem}>
                            <FormInput name="to" label="Куда" />
                        </li>
                    </ul>

                    <Button {...ButtonParams} />
                </form>
            </div>
        </section>
    )
}

export default Welcome;