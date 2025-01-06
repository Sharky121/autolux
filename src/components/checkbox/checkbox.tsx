'use client'

import { useId } from 'react';
import styles from './checkbox.module.scss';

type CheckboxType = {
    size?: string;
    theme?: string;
    isChecked: boolean;
    checkboxHandler: () => void;
    title: string;
    customClass: string;
}

const Checkbox = ({size, theme, title, customClass, checkboxHandler, isChecked}: CheckboxType) => {
    const id= useId();

    const labelStyle = `${styles.checkboxLabel} ${isChecked ? styles.checkboxLabelChecked : ''}`;
    const sizeStyle =  `${size ? styles[`theme${size.charAt(0).toUpperCase() + size.slice(1)}`] : ''}`;
    
    return (
        <div  className={`${styles.checkbox} ${sizeStyle} ${customClass} ${theme ? styles[`theme${theme.charAt(0).toUpperCase() + theme.slice(1)}`] : ''}`}>
            <label onClick={checkboxHandler} className={labelStyle} htmlFor={id}>
                {title}
            </label>
            <input className={styles.checkboxInput} id={id} type="checkbox" checked={isChecked} readOnly/>
        </div>
    )
}

export default Checkbox;