'use client'

import { useState } from 'react';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import FormInput from '../form-input/form-input';
import styles from './drivers-form.module.scss';
import Modal from '../modal/modal';
import ModalStatus from '../modal/modal-status';

type DriversFormType = {
    customClass?: string
}

const DriversForm = ({customClass}: DriversFormType) => {
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
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

        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/callback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({
                    formType: 'drivers',
                    name: '',
                    phone: '',
                    city: ''
                });
                setSuccessModalOpen(true);
            } else {
                setErrorModalOpen(true);
            }
        } catch (error) {
            setErrorModalOpen(true);
            console.log(`Ошибка catch: ${error}`);
        }

        setIsSubmitting(false);
    }

    const CheckboxParams = {
        checkboxHandler: checkInputHandler,
        isChecked: isChecked,
        title: "Cогласен на обработку персональных данных",
        customClass: styles.driversFeedbackCheckbox
    }

    const ButtonParams = {
        isLoad: isSubmitting,
        color: 'primary',
        size: 'flex',
        title: 'Отправить',
        customClassName: styles.driversFeedbackFormButton
    }

    const handleCloseSuccessModal = () => setSuccessModalOpen(false);

    const handleCloseErrorModal = () => setErrorModalOpen(false);

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
            <div className={`${styles.driversFeedback} ${customClass ? customClass : ''}`}>
                <h3 className={styles.driversFeedbackTitle}>Стать водителем</h3>
                <p className={styles.driversFeedbackSubtitle}>Получите опыт работы в надёжной компании с собственным грузовым автопарком, состоящим из новой европейской техники!</p>
                <form className={styles.driversFeedbackForm} onSubmit={submitForm}>
                    <input type="hidden" name="type" value={formData.formType}/>

                    <ul className={styles.driversFeedbackFormList}>
                        <li className={styles.driversFeedbackFormItem}>
                            <FormInput name="name" label="ФИО" onChange={handleInputChange} value={formData.name} />
                        </li>
                        <li className={styles.driversFeedbackFormItem}>
                            <FormInput name="phone" label="Телефон" type="number" onChange={handleInputChange} value={formData.phone} />
                        </li>
                        <li className={styles.driversFeedbackFormItem}>
                            <FormInput name="city" label="Город проживания" onChange={handleInputChange} value={formData.city} />
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

export default DriversForm;