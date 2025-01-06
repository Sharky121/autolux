'use client'

import { useState } from "react";
import Button from "../button/button";
import FormInput from "../form-input/form-input";

import styles from './welcome.module.scss';
import Checkbox from "../checkbox/checkbox";

const Welcome = () => {
    const [moreInputs, setMoreInputs] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        formType: 'calculate',
        from: '',
        to: '',
        name: '',
        phone: '',
        inn: ''
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
                setFormData({
                    formType: 'calculate',
                    from: '',
                    to: '',
                    name: '',
                    phone: '',
                    inn: ''
                });
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    };

    const checkInputHandler = () => {
        setIsChecked(!isChecked)
    };

    const handleButtonMore = () => {
        setMoreInputs(true);
    };

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData, 
            [evt.target.name]: evt.target.value
        })
    };

    const ButtonParams = {
        type: 'button' as "button",
        color: 'primary',
        size: 'flex',
        title: moreInputs ? 'Отправить' : 'Продолжить',
        customClassName: styles.welcomeFormButton,
        onClick: handleButtonMore
    };

    const CheckboxParams = {
        size: 'small',
        theme: 'secondary',
        checkboxHandler: checkInputHandler,
        isChecked: isChecked,
        title: "Cогласен на обработку персональных данных",
        customClass: styles.welcomeFormCheckbox
    };

    return (
        <section className={styles.welcome}>
            <div className={styles.welcomeFeedback}>
                <h2 className={styles.welcomeTitle}>Автомобильные <br /> FTL грузоперевозки <br /> от 20 тонн</h2>
                <div className={styles.welcomeFeedbackContainer}>
                    <p className={styles.welcomeSubTitle}>Введите данные, чтобы оставить <br /> заявку на грузоперевозку</p>
                    <form className={styles.welcomeForm} onSubmit={submitForm}>
                        {
                            !moreInputs ? (
                                <ul className={styles.welcomeFirstFormList}>
                                    <li className={styles.welcomeFirstFormItem}>
                                        <FormInput theme="secondary" name="from" label="Откуда" onChange={handleInputChange}/>
                                    </li>
                                    <li className={styles.welcomeFirstFormItem}>
                                        <FormInput theme="secondary" name="to" label="Куда" onChange={handleInputChange}/>
                                    </li>
                                </ul>
                            ) : (
                                <ul className={styles.welcomeSecondFormList}>
                                    <li className={styles.welcomeSecondFormItem}>
                                        <FormInput theme="secondary" name="name" label="ФИО" onChange={handleInputChange} />
                                    </li>
                                    <li className={styles.welcomeSecondFormItem}>
                                        <FormInput theme="secondary" name="phone" label="Телефон" onChange={handleInputChange} />
                                    </li>
                                    <li className={styles.welcomeSecondFormItem}>
                                        <FormInput theme="secondary" name="inn" label="ИНН" onChange={handleInputChange} />
                                    </li>
                                    <li className={styles.welcomeSecondFormItem}>
                                        <Checkbox {...CheckboxParams}/>
                                    </li>
                                </ul>
                            )
                        }

                        <Button {...ButtonParams} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Welcome;