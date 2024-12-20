import styles from './button.module.scss';

type ButtonType = {
    color: string,
    size?: string,
    title: string,
    customClassName?: string
}

const Button = ({title, customClassName, color, size}: ButtonType) => {
    const colorToButton: Record<string, string> = {
        'primary': styles.buttonPrimary
    }

    const sizeToButton: Record<string, string | undefined> = {
        'flex': styles.buttonFlex
    }

    return (
        <button 
            className={`${styles.button} ${customClassName ?? ''} ${colorToButton[color]} ${sizeToButton[size ?? ''] ?? ''}` } 
            type="button">
                {title}
        </button>
    )
}

export default Button;