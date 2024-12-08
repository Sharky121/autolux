import styles from './button.module.scss';

const Button = ({title, customClassName}: {title: string, customClassName?: string}) => {
    return (
        <button className={`${styles.button} ${customClassName ?? ''}`} type="button">{title}</button>
    )
}

export default Button;