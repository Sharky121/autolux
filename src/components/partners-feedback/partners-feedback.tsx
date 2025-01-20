'use client'

import Container from "@/components/container/container";
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import FormInput from '../form-input/form-input';

import styles from './partners-feedback.module.scss';
import { useState } from "react";
import Modal from "../modal/modal";
import ModalStatus from "../modal/modal-status";

type PartnersFeedbackType = {
    customClass?: string;
}

const PartnersFeedback = ({customClass}: PartnersFeedbackType) => {
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
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
        
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/callback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({
                    formType: 'partners',
                    name: '',
                    phone: '',
                    company_name: '',
                    city: '',
                    inn: '',
                    transport_count: ''
                });
                setSuccessModalOpen(true);
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
        customClass: styles.partnersFeedbackCheckbox
    }

    const ButtonParams = {
        isLoad: isSubmitting,
        color: 'primary',
        size: 'flex',
        title: 'Отправить',
        customClassName: styles.partnersFeedbackFormButton
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
                                    <FormInput name="name" label="ФИО" onChange={handleInputChange} value={formData.name}/>
                                </li>
                                <li className={styles.partnersFeedbackFormItem}>
                                    <FormInput name="phone" label="Телефон" type="number" onChange={handleInputChange} value={formData.phone} />
                                </li>
                                <li className={styles.partnersFeedbackFormItem}>
                                    <FormInput name="company_name" label="Название компании" onChange={handleInputChange} value={formData.company_name} />
                                </li>
                                <li className={styles.partnersFeedbackFormItem}>
                                    <FormInput name="city" label="Город" onChange={handleInputChange} value={formData.city} />
                                </li>
                                <li className={styles.partnersFeedbackFormItem}>
                                    <FormInput name="inn" label="ИНН" type="number" onChange={handleInputChange} value={formData.inn} />
                                </li>
                                <li className={styles.partnersFeedbackFormItem}>
                                    <FormInput name="transport_count" label="Кол-во ТС" type="number" onChange={handleInputChange} value={formData.transport_count} />
                                </li>
                            </ul>
                            <Checkbox {...CheckboxParams}/>
                            <Button {...ButtonParams} />
                        </form>
                    </div>
                </Container>
            </section>

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

export default PartnersFeedback;