import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer.js';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node.isRequired,
    lists: PropTypes.array.isRequired,
    moveCard: PropTypes.func.isRequired,
  };
  render() {
    const {title, subtitle, lists, moveCard} = this.props;
    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        const payload = {
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        };
        moveCard(payload);
      }
    };
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search/>
        <DragDropContext onDragEnd={moveCardHandler}>
          {lists.map(listData => (
            <List key={listData.id} {...listData}/>
          ))}
        </DragDropContext>
      </main>
    );
  }
}

export default App;
