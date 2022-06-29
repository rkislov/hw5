import PropTypes from 'prop-types';

import styles from './style.module.scss';

const NewsElement = ({imageSource, text, link}) => {
    return (
        <a href={link} className={styles.containerElement}>
            <img src={imageSource} style={styles.imageSource} alt={text}></img>
            <span className={styles.newsText}>{text}</span>
        </a>
    )
}

NewsElement.defaultProps = {
 imageSource: '',
 text: '',
 link: ''
}

NewsElement.propTypes = {
    imageSource: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string
}
export default NewsElement;