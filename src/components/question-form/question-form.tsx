'use client'

import { useState } from 'react';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import FormInput from '../form-input/form-input';

import styles from './question-form.module.scss';
import Modal from '../modal/modal';
import ModalStatus from '../modal/modal-status';

const QuestionForm = () => {
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        formType: 'question',
        name: '',
        phone: ''
    });

    const submitForm = async (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();

        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/callback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({
                    formType: 'question',
                    name: '',
                    phone: ''
                });
                setSuccessModalOpen(true);
                console.log(response);
            } else {
                setErrorModalOpen(true);
                console.log('Ошибка в try');
            }
        } catch (error) {
            setErrorModalOpen(true);
            console.log(`Ошибка catch: ${error}`);
        }

        setIsSubmitting(false);
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

    const handleCloseSuccessModal = () => setSuccessModalOpen(false);

    const handleCloseErrorModal = () => setErrorModalOpen(false);

    const ButtonParams = {
        isLoad: isSubmitting,
        color: 'primary',
        size: 'flex',
        title: 'Отправить',
        customClassName: styles.questionFormButton
    }

    const successModalParams = {
        type: "status",
        title: "Успешно!",
        onClose: handleCloseSuccessModal,
    };

    const errorModalParams = {
        type: "status",
        title: "Ошибка!",
        onClose: handleCloseErrorModal,
    };

    return (
        <>
            <div className={styles.question}>
                <h3 className={styles.questionTitle}>Остались вопросы?</h3>
                <p className={styles.questionSubtitle}>Введите данные, и нажимте отправить, наш менеджер свяжется в кратчашее время</p>
                <form className={styles.questionForm} onSubmit={submitForm}>
                    <input type="hidden" name="type" value={formData.formType} />

                    <ul className={styles.questionFormList}>
                        <li className={styles.questionFormItem}>
                            <FormInput name="name" label="ФИО" onChange={handleInputChange} value={formData.name}/>
                        </li>
                        <li className={styles.questionFormItem}>
                            <FormInput name="phone" label="Телефон" type="number" onChange={handleInputChange} value={formData.phone}/>
                        </li>
                    </ul>
                    <Checkbox {...CheckboxParams}/>
                    <Button {...ButtonParams} />
                </form>
            </div>

            { 
                successModalOpen && (
                    <Modal {...successModalParams}>
                        <ModalStatus text = "Ваша заявка отправлена. <br /> В ближайшее время с вами свяжется наш менеджер."/>
                    </Modal>
                )
            }

            { 
                errorModalOpen && (
                    <Modal {...errorModalParams}>
                        <ModalStatus text = "Что-то пошло не так. <br /> Попробойте через некоторое время или свяжитесь по телефону."/>
                    </Modal>
                )
            }
        </>
    )
}

export default QuestionForm;