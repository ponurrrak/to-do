import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import DraggableCard from '../Card/DraggableCard.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore.js';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    addCard: PropTypes.func.isRequired,
    icon: PropTypes.string,
    id: PropTypes.string,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  render() {
    const {title, icon, cards, addCard, id} = this.props;    
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
        </h3>
        <Droppable droppableId={id}>
          {provided => (
            <div className={styles.cards} {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map(cardData => (
                <DraggableCard key={cardData.id} {...cardData}/>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}

export default Column;
