'use client'

import { useState } from 'react';

import Image from 'next/image';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import FormInput from '../form-input/form-input';
import Modal from '../modal/modal';
import ModalStatus from '../modal/modal-status';

import styles from './calculate-form.module.scss';

type CalculateFormType = {
    subtitle?: string,
    customClass?: string
}

const ButtonParams = {
    color: 'primary',
    size: 'flex',
    title: 'Отправить',
    customClassName: styles.calculationFormButton
}

const CalculateForm = ({subtitle, customClass}: CalculateFormType) => {
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        formType: 'calculate',
        from: '',
        to: '',
        name: '',
        phone: '',
        inn: ''
    });

    const handleCloseSuccessModal = () => setSuccessModalOpen(false);

    const handleCloseErrorModal = () => setErrorModalOpen(false);

    const submitForm = async (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        
        try {
            const response = await fetch('/api/callback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccessModalOpen(true);
            } else {
                setErrorModalOpen(true);
            }
        } catch (error) {
            setErrorModalOpen(true);
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
        customClass: styles.calculationCheckbox
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
            <div className={`${styles.calculation} ${customClass ? customClass : ''}`}>
                <h3 className={styles.calculationTitle}>Оставьте заявку на расчёт стоимости</h3>
                {
                    subtitle && (
                        <p className={styles.calculationSubtitle}>{subtitle}</p>
                    )
                }
                
                <form className={styles.calculationForm} onSubmit={submitForm}>
                    <input type="hidden" name="type" value={formData.formType}/>

                    <ul className={styles.calculationFormList}>
                        <li className={styles.calculationFormItem}>
                            <FormInput name="from" label="Откуда" onChange={handleInputChange} />
                        </li>
                        <li className={styles.calculationFormItem}>
                            <Image src="ico-truck.svg" width={66} height={20} alt="Грузовик" />
                        </li>
                        <li className={styles.calculationFormItem}>
                            <FormInput name="to" label="Куда" onChange={handleInputChange} />
                        </li>
                        <li className={styles.calculationFormItem}>
                            <FormInput name="name" label="ФИО" onChange={handleInputChange} />
                        </li>
                        <li className={styles.calculationFormItem}>
                            <FormInput name="phone" label="Телефон" onChange={handleInputChange} />
                        </li>
                        <li className={styles.calculationFormItem}>
                            <FormInput name="inn" label="ИНН" onChange={handleInputChange} />
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

export default CalculateForm;