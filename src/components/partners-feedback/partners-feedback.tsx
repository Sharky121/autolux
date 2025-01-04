'use client'

import Container from "@/components/container/container";
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import FormInput from '../form-input/form-input';

import styles from './partners-feedback.module.scss';
import { useState } from "react";

type PartnersFeedbackType = {
    customClass?: string;
}

const ButtonParams = {
    color: 'primary',
    size: 'flex',
    title: 'Отправить',
    customClassName: styles.partnersFeedbackFormButton
}

const PartnersFeedback = ({customClass}: PartnersFeedbackType) => {
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        formType: 'partners',
        name: '',
        phone: '',
        company_name: '',
        city: '',
        inn: '',
        transport_count: ''
    });

    const submitForm = async (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        
        try {
            const response = await fetch('/api/callback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log(response);
            } else {
                console.log('Ошибка в try');
            }
        } catch (error) {
            console.log(`Ошибка catch: ${error}`);
        }
    }

    const checkInputHandler = () => {
        setIsChecked(!isChecked)
    }

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData, 
            [evt.target.name]: evt.target.value
        })
    }

    const CheckboxParams = {
        checkboxHandler: checkInputHandler,
        isChecked: isChecked,
        title: "Cогласен на обработку персональных данных",
        customClass: styles.partnersFeedbackCheckbox
    }

    return (
        <section className={`${styles.partnersFeedback} ${customClass ? customClass : ''}`}>
            <Container customClassName={styles.partnersFeedbackContainer}>
                <h2 className={styles.partnersFeedbackTitle}>Предлагаем сотрудничество перевозчикам с собственным <br /> и арендованным крупнотоннажным автопарком&nbsp;(от 20 тонн)</h2>  
                <div className={styles.partnersFeedbackWrapper}>
                    <h3 className={styles.partnersFeedbackFormTitle}>Стать партнёром</h3>
                    <p className={styles.partnersFeedbackFormSubtitle}>Мы ценим надёжных партнёров и стремимся к долгосрочному сотрудничеству. Готовы обсудить все детали и найти оптимальные решения для вашего бизнеса.</p>
                    <form className={styles.partnersFeedbackForm} onSubmit={submitForm}>
                        <input type="hidden" name="type" value={formData.formType} />

                        <ul className={styles.partnersFeedbackFormList}>
                            <li className={styles.partnersFeedbackFormItem}>
                                <FormInput name="name" label="ФИО" onChange={handleInputChange} />
                            </li>
                            <li className={styles.partnersFeedbackFormItem}>
                                <FormInput name="phone" label="Телефон" onChange={handleInputChange} />
                            </li>
                            <li className={styles.partnersFeedbackFormItem}>
                                <FormInput name="company_name" label="Название компании" onChange={handleInputChange} />
                            </li>
                            <li className={styles.partnersFeedbackFormItem}>
                                <FormInput name="city" label="Город" onChange={handleInputChange} />
                            </li>
                            <li className={styles.partnersFeedbackFormItem}>
                                <FormInput name="inn" label="ИНН" onChange={handleInputChange} />
                            </li>
                            <li className={styles.partnersFeedbackFormItem}>
                                <FormInput name="transport_count" label="Кол-во ТС" onChange={handleInputChange} />
                            </li>
                        </ul>
                        <Checkbox {...CheckboxParams}/>
                        <Button {...ButtonParams} />
                    </form>
                </div>
            </Container>
        </section>

    )
}

export default PartnersFeedback;