import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    return (
      <p className={styles.component}>{this.props.title}</p>
    );
  }
}

export default Card;
