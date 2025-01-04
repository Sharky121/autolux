'use client'

import { useId } from 'react';
import styles from './checkbox.module.scss';

type CheckboxType = {
    isChecked: boolean,
    checkboxHandler: () => void,
    title: string,
    customClass: string
}

const Checkbox = ({title, customClass, checkboxHandler, isChecked}: CheckboxType) => {
    const id= useId();

    const labelStyle = `${styles.checkboxLabel} ${isChecked ? styles.checkboxLabelChecked : ''}`;
    
    return (
        <div  className={`${styles.checkbox} ${customClass}`}>
            <label onClick={checkboxHandler} className={labelStyle} htmlFor={id}>
                {title}
            </label>
            <input className={styles.checkboxInput} id={id} type="checkbox" checked={isChecked} readOnly/>
        </div>
    )
}

export default Checkbox;