import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img src={props.heroImageURL} alt={props.heroImageAlt} className={styles.image}/>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  heroImageURL: PropTypes.string.isRequired,
  heroImageAlt: PropTypes.string.isRequired
}

export default Hero;
