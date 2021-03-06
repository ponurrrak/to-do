import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Container from '../Container/Container.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore.js';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
  };
  render() {
    const {cards} = this.props;
    const {icon} = settings.search;
    const searchString = this.props.match.params.searchString;
    const title = (cards.length && searchString) ? settings.search.titleResultsFound : settings.search.titleNoResults;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span>
          </h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData}/>
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
