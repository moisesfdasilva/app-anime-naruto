import { GET_CHARACTERS_DATA,
  GET_CHARACTERS_DATA_SUCESS,
  GET_CHARACTERS_DATA_FAIL } from '../action'

const INITIAL_STATE = {
  loading: true,
  data: [],
  error: null,
}

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CHARACTERS_DATA:
      return { ...state, loading: true};
    case GET_CHARACTERS_DATA_SUCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case GET_CHARACTERS_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: 'new error',
      };
    default:
      return state;
  }
};

export default characterReducer;
