import { combineReducers, legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  abc: '',
}

function characterReducer(state = INITIAL_STATE, action) {
  return state;
}

const rootReducer = combineReducers({
  characterReducer,
});

const store = createStore(rootReducer);

export default store;
