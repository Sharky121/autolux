import styles from './container.module.scss';

type ChildrenType = {
    children: React.ReactNode,
    customClassName?: string;
    customStyle?: React.CSSProperties;
}

const Container = ({children, customClassName}: ChildrenType) => {
    return (
        <div className={`${styles.container} ${customClassName ?? ''}`}>
            {children}
        </div>
    )
}

export default Container;