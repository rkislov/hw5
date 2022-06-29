import styles from './style.module.scss';


const CurrentDate = () => {
    return (
        <span className={styles.element}>
            {new Date().toLocaleString('ru', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            })}
        </span>
    );
};

export default CurrentDate;