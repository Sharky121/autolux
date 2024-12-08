import Button from '../button/button';
import FormInput from '../form-input/form-input';
import styles from './calculation-form.module.scss';

const CalculationForm = () => {
    return (
        <div className={styles.calculation}>
            <h3 className={styles.calculationTitle}>Оставьте заявку на расчет стоимости</h3>
            <form className={styles.calculationForm} action="">
                <ul className={styles.calculationFormList}>
                    <li className={styles.calculationFormItem}>
                        <FormInput name="from" label="Откуда" />
                    </li>
                    <li className={styles.calculationFormItem}>
                        <FormInput name="to" label="Куда" />
                    </li>
                    <li className={styles.calculationFormItem}>
                        <FormInput name="name" label="ФИО" />
                    </li>
                    <li className={styles.calculationFormItem}>
                        <FormInput name="tel" label="Телефон" />
                    </li>
                    <li className={styles.calculationFormItem}>
                        <FormInput name="inn" label="ИНН" />
                    </li>
                </ul>

                <Button customClassName={styles.calculationFormButton} title="Отправить" />
            </form>
        </div>
    )    
}

export default CalculationForm;