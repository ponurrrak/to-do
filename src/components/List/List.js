import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {DragDropContext} from 'react-beautiful-dnd';
import styles from './List.scss';
import Column from '../Column/ColumnContainer.js';
import Hero from '../Hero/Hero.js';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';
import {settings} from '../../data/dataStore.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    addColumn: PropTypes.func.isRequired,
    moveCard: PropTypes.func.isRequired,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, imageAlt, description, columns, addColumn, moveCard} = this.props;
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
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} heroImageURL={image} heroImageAlt={imageAlt}/>
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <DragDropContext onDragEnd={moveCardHandler}>
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
          </DragDropContext>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>
        </section>
      </Container>
    );
  }
}

export default List;
