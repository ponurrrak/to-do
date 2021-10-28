import { connect } from 'react-redux';
import Home from './Home.js';
import {createActionMoveCard} from '../../Redux/cardsRedux.js';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
  moveCard: payload => dispatch(createActionMoveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
