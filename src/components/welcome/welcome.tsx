'use client'

import { useState } from "react";
import Button from "../button/button";
import FormInput from "../form-input/form-input";

import styles from './welcome.module.scss';
import Checkbox from "../checkbox/checkbox";
import Modal from "../modal/modal";
import ModalStatus from "../modal/modal-status";

const Welcome = () => {
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [moreInputs, setMoreInputs] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
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
        
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/callback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccessModalOpen(true);
                setFormData({
                    formType: 'calculate',
                    from: '',
                    to: '',
                    name: '',
                    phone: '',
                    inn: ''
                });
                setMoreInputs(false);
            } else {
                setErrorModalOpen(true);
            }
        } catch (error) {
            setErrorModalOpen(true);
            console.log(error);
        }

        setIsSubmitting(false);
    }

    const handleCloseSuccessModal = () => setSuccessModalOpen(false);

    const handleCloseErrorModal = () => setErrorModalOpen(false);

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

    const ButtonParamsSubmit = {
        isLoad: isSubmitting,
        type: 'submit' as "submit",
        color: 'primary',
        size: 'flex',
        title: 'Отправить',
        customClassName: styles.welcomeFormButton,
    };

    const ButtonParamsMore = {
        type: 'button' as "button",
        color: 'primary',
        size: 'flex',
        title: 'Продолжить',
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
            <section className={styles.welcome}>
                <div className={styles.welcomeFeedback}>
                    <h2 className={styles.welcomeTitle}>Автомобильные <br /> FTL грузоперевозки <br /> от 20 тонн</h2>
                    <div className={styles.welcomeFeedbackContainer}>
                        <p className={styles.welcomeSubTitle}>Введите данные, чтобы оставить <br /> заявку на грузоперевозку</p>
                        <form className={styles.welcomeForm} onSubmit={submitForm}>
                            {
                                !moreInputs ? (
                                    <>
                                        <ul className={styles.welcomeFirstFormList}>
                                            <li className={styles.welcomeFirstFormItem}>
                                                <FormInput theme="secondary" name="from" label="Откуда" onChange={handleInputChange} value={formData.from}/>
                                            </li>
                                            <li className={styles.welcomeFirstFormItem}>
                                                <FormInput theme="secondary" name="to" label="Куда" onChange={handleInputChange} value={formData.to}/>
                                            </li>
                                        </ul>

                                        <Button {...ButtonParamsMore} />
                                    </>
                                ) : (
                                    <>
                                        <ul className={styles.welcomeSecondFormList}>
                                            <li className={styles.welcomeSecondFormItem}>
                                                <FormInput theme="secondary" name="name" label="ФИО" onChange={handleInputChange} value={formData.name} />
                                            </li>
                                            <li className={styles.welcomeSecondFormItem}>
                                                <FormInput theme="secondary" name="phone" label="Телефон" type="number" onChange={handleInputChange} value={formData.phone} />
                                            </li>
                                            <li className={styles.welcomeSecondFormItem}>
                                                <FormInput theme="secondary" name="inn" label="ИНН" onChange={handleInputChange} value={formData.inn} />
                                            </li>
                                            <li className={styles.welcomeSecondFormItem}>
                                                <Checkbox {...CheckboxParams}/>
                                            </li>
                                        </ul>

                                        <Button {...ButtonParamsSubmit} />                                
                                    </>
                                )
                            }
                        </form>
                    </div>
                </div>
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

export default Welcome;