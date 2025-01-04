'use client'

import { useState } from 'react';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import FormInput from '../form-input/form-input';

import styles from './question-form.module.scss';

const ButtonParams = {
    color: 'primary',
    size: 'flex',
    title: 'Отправить',
    customClassName: styles.questionFormButton
}

const QuestionForm = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        formType: 'question',
        name: '',
        phone: ''
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
        customClass: styles.questionCheckbox
    }

    return (
        <div className={styles.question}>
            <h3 className={styles.questionTitle}>Остались вопросы?</h3>
            <p className={styles.questionSubtitle}>Введите данные, и нажимте отправить, наш менеджер свяжется в кратчашее время</p>
            <form className={styles.questionForm} onSubmit={submitForm}>
                <input type="hidden" name="type" value={formData.formType} />

                <ul className={styles.questionFormList}>
                    <li className={styles.questionFormItem}>
                        <FormInput name="name" label="ФИО" onChange={handleInputChange} />
                    </li>
                    <li className={styles.questionFormItem}>
                        <FormInput name="phone" label="Телефон" onChange={handleInputChange} />
                    </li>
                </ul>
                <Checkbox {...CheckboxParams}/>
                <Button {...ButtonParams} />
            </form>
        </div>
    )
}

export default QuestionForm;