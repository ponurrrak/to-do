import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore.js';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    icon: PropTypes.string.isRequired
  }

  state = {
    cards: this.props.cards,
  };

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon}/>
          </span>
        </h3>
        {this.state.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps}/>
        ))}
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    )
  }
}

export default Column;
