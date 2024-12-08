'use client'

import { useId } from 'react';
import styles from './form-input.module.scss';

type FormInputType = {
    name: string;
    label: string;
    type?: string;
}

const FormInput = ({name, label, type="text"}: FormInputType) => {
    const id= useId();

    return (
        <>
            <label className="visually-hidden" htmlFor={name}>{label}</label>
            <input className={styles.input} id={id} name={name} type={type} placeholder={label} defaultValue="" />
        </>
    )
}

export default FormInput;