import { connect } from 'react-redux';
import { getCardsForColumn, createActionAddCard } from '../../Redux/cardsRedux.js';
import Column from './Column.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
