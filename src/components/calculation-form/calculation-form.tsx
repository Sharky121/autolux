import Image from 'next/image';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import FormInput from '../form-input/form-input';
import styles from './calculation-form.module.scss';

const ButtonParams = {
    color: 'primary',
    size: 'flex',
    title: 'Отправить',
    customClassName: styles.calculationFormButton
}

const CheckboxParams = {
    title: "Cогласен на обработку персональных данных",
    customClass: styles.calculationCheckbox
}

const CalculationForm = () => {
    return (
        <div className={styles.calculation}>
            <h3 className={styles.calculationTitle}>Оставьте заявку на расчет стоимости</h3>
            <p className={styles.calculationSubtitle}>Наша компания предлагает комплексные логистические решения для крупных торговых сетей. Мы берём на себя все заботы о перевозках, обеспечивая бесперебойную и эффективную доставку товаров от производителей до магазинов</p>
            <form className={styles.calculationForm} action="">
                <ul className={styles.calculationFormList}>
                    <li className={styles.calculationFormItem}>
                        <FormInput name="from" label="Откуда" />
                    </li>
                    <li className={styles.calculationFormItem}>
                        <Image src="ico-truck.svg" width={66} height={20} alt="Грузовик" />
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
                <Checkbox {...CheckboxParams}/>
                <Button {...ButtonParams} />
            </form>
        </div>
    )    
}

export default CalculationForm;