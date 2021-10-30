import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import Card from './Card.js';

class DraggableCard extends React.Component {
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
          <Card
            provided={provided}
            title={title}
          />
        )}
      </Draggable>
    );
  }
}

export default DraggableCard;
