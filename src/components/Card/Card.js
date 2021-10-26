import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }
  render() {
    const {title, id, index} = this.props;
    return (
      <Draggable draggableId={id} index={index}>
        {provided => (
          <p
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={styles.component}>
            {title}
          </p>
        )}
      </Draggable>
    );
  }
}

export default Card;
