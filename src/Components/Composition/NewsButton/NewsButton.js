import PropTypes from 'prop-types';

import styles from './style.module.scss';


const NewsButton = ({text, type, isActive, select}) => {
    return (
        <div
            className={`${styles.element} ${isActive && styles.aciveElement}`}
            onClick={() => select(type)}>
                {text}
        </div>
    )
}

NewsButton.defaultProps = {
    text: '',
    type: '',
    isActive: false,
    select: () =>{}
}

export default NewsButton;