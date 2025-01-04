import styles from './button.module.scss';

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color: string,
    size?: string,
    title: string,
    customClassName?: string;
}

const Button = ({title, customClassName, color, size, type="submit", onClick}: ButtonType) => {
    const colorToButton: Record<string, string> = {
        'primary': styles.buttonPrimary
    }

    const sizeToButton: Record<string, string | undefined> = {
        'flex': styles.buttonFlex
    }

    return (
        <button 
            onClick={onClick}
            className={`${styles.button} ${customClassName ?? ''} ${colorToButton[color]} ${sizeToButton[size ?? ''] ?? ''}` } 
            type={type}>
                {title}
        </button>
    )
}

export default Button;