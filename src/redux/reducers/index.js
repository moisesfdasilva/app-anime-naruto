import { combineReducers } from 'redux';

import characterReducer from './charactersReducer';
import characterDetail from './characterDetail';

const rootReducer = combineReducers({
  characterReducer,
  characterDetail,
});

export default rootReducer;