import styles from './button.module.scss';

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    isLoad?: boolean;
    isDisabled?: boolean;
    color: string;
    size?: string;
    title: string;
    customClassName?: string;
}

const Button = ({isLoad = false, isDisabled = false, title, customClassName, color, size, type="submit", onClick}: ButtonType) => {
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
            disabled={isLoad || isDisabled}
            type={type}>
                {title}

                {
                    isLoad && (
                        <div className={styles.buttonLoaderContainer}>
                            <div className={styles.buttonLoader}></div>
                        </div>
                    )
                }
        </button>
    )
}

export default Button;