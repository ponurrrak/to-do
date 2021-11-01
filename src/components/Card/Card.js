import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    provided: PropTypes.object,
  }
  render() {
    let {title, provided} = this.props;    
    provided = provided ? provided : {};
    return (
      <p
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className={styles.component}>
        {title}
      </p>
    );
  }
}

export default Card;
