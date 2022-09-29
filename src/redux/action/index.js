import getCharacters from '../../services/getCharacters';

const GET_CHARACTERS_DATA = 'GET_CHARACTERS_DATA';
const GET_CHARACTERS_DATA_SUCESS = 'GET_CHARACTERS_DATA_SUCESS';
const GET_CHARACTERS_DATA_FAIL = 'GET_CHARACTERS_DATA_FAIL';

const actFetchCharactersData = () =>  ({
  type: GET_CHARACTERS_DATA,
});

const actGetCharactersDataSucess = (data) =>  ({
  type: GET_CHARACTERS_DATA_SUCESS,
  payload:{
    data,
  },
});

const actGetCharactersFail = (data) =>  ({
  type: GET_CHARACTERS_DATA_FAIL,
});

function fetchWithThunk() {
  return async (dispatch) => {
    dispatch(actFetchCharactersData());
    try {
      const { data } = await getCharacters();
      dispatch(actGetCharactersDataSucess(data));
    } catch(error) {
      dispatch(actGetCharactersFail());
    }
  }
}

export {
  GET_CHARACTERS_DATA,
  GET_CHARACTERS_DATA_SUCESS,
  GET_CHARACTERS_DATA_FAIL,
  fetchWithThunk,
};