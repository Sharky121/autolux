'use client'

import { useState } from 'react';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import FormInput from '../form-input/form-input';
import styles from './drivers-form.module.scss';

type DriversFormType = {
    customClass?: string
}

const ButtonParams = {
    color: 'primary',
    size: 'flex',
    title: 'Отправить',
    customClassName: styles.driversFeedbackFormButton
}

const DriversForm = ({customClass}: DriversFormType) => {
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        formType: 'drivers',
        name: '',
        phone: '',
        city: ''
    });

    const checkInputHandler = () => {
        setIsChecked(!isChecked)
    }

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData, 
            [evt.target.name]: evt.target.value
        })
    }

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

    const CheckboxParams = {
        checkboxHandler: checkInputHandler,
        isChecked: isChecked,
        title: "Cогласен на обработку персональных данных",
        customClass: styles.driversFeedbackCheckbox
    }

    return (
        <div className={`${styles.driversFeedback} ${customClass ? customClass : ''}`}>
            <h3 className={styles.driversFeedbackTitle}>Стать водителем</h3>
            <p className={styles.driversFeedbackSubtitle}>Получите опыт работы в надёжной компании с собственным грузовым автопарком, состоящим из новой европейской техники!</p>
            <form className={styles.driversFeedbackForm} onSubmit={submitForm}>
                <input type="hidden" name="type" value={formData.formType}/>

                <ul className={styles.driversFeedbackFormList}>
                    <li className={styles.driversFeedbackFormItem}>
                        <FormInput name="name" label="ФИО" onChange={handleInputChange} />
                    </li>
                    <li className={styles.driversFeedbackFormItem}>
                        <FormInput name="phone" label="Телефон" onChange={handleInputChange} />
                    </li>
                    <li className={styles.driversFeedbackFormItem}>
                        <FormInput name="city" label="Город проживания" onChange={handleInputChange} />
                    </li>
                </ul>
                <Checkbox {...CheckboxParams}/>
                <Button {...ButtonParams} />
            </form>
        </div>
    )    
}

export default DriversForm;