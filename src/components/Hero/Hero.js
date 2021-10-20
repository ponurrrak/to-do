import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './Hero.scss';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img src={props.heroImageURL} alt={props.heroImageAlt} className={styles.image}/>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  heroImageURL: PropTypes.string.isRequired,
  heroImageAlt: PropTypes.string.isRequired,
};

export default Hero;
