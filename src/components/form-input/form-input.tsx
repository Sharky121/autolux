'use client'

import { useId } from 'react';
import styles from './form-input.module.scss';

type FormInputType = {
    theme?: string;
    name: string;
    label: string;
    type?: string;
    onChange: (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormInput = ({theme, name, label, type="text", onChange}: FormInputType) => {
    const id= useId();

    return (
        <>
            <label className="visually-hidden" htmlFor={name}>{label}</label>
            <input className={`${styles.input} ${theme ? styles[`theme${theme.charAt(0).toUpperCase() + theme.slice(1)}`] : ''}`} 
                   id={id} 
                   name={name} 
                   type={type} 
                   placeholder={label} 
                   defaultValue="" 
                   onChange={onChange}/>
        </>
    )
}

export default FormInput;