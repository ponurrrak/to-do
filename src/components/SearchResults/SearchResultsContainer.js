import { connect } from 'react-redux';
import SearchResults from './SearchResults.js';
import { getCardsForSearchResults } from '../../Redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  return ({
    cards: getCardsForSearchResults(state, searchString),
  });
};

export default connect(mapStateToProps)(SearchResults);
