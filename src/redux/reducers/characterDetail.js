import { SELECT_CHARACTER } from '../action'

const INITIAL_STATE = {
  loading: true,
  characterInfo: {},
  error: null,
}

const characterDetail = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CHARACTER:
      return {
        ...state,
        loading: false,
        characterInfo: action.payload.characterInfo,
        error: null,
      };
    default:
      return state;
  }
};

export default characterDetail;