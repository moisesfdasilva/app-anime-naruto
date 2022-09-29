import { combineReducers } from 'redux';

import characterReducer from './charactersReducer'

const rootReducer = combineReducers({
  characterReducer,
});

export default rootReducer;