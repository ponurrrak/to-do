// selectors
export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards = ({cards, searchString}) => (
  cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length
);
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE_SEARCH_STRING = createActionName('CHANGE_SEARCH_STRING');

// action creators
export const createAction_changeSearchString = payload => ({
  payload,
  type: CHANGE_SEARCH_STRING,
});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_SEARCH_STRING:
      return action.payload;
    default:
      return statePart;
  }
}
