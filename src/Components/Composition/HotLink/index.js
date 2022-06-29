import PropTypes from 'prop-types';
import styles from './style.module.scss';

const HotLink = ({ text, link }) => {
  return (
    <a href={link} className={styles.linkElement}>
      {text}
    </a>
  );
};

HotLink.defaultProps = {
  text: 'Example text',
  link: '',
};

HotLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default HotLink;