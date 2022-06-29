import PropTypes from 'prop-types';
import styles from './style.module.scss';

const QuoteElement = ({name, value, shift}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>{name}</div>
            <div className={styles.value}>{value}</div>
            <div className={styles.shift}>{shift}</div>
        </div>
    );
};


QuoteElement.defaultProps = {
    name: 'USD',
    value: 53.81,
    shift: '-1,43%'
};

QuoteElement.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
    shift: PropTypes.string,
};

export default QuoteElement;
