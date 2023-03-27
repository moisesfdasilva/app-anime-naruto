import axios from 'axios';

const CHARACTERS_BASE_API = 'http://localhost:3001/characters';

const getCharacters = async () => {
  const response = await axios.get(CHARACTERS_BASE_API);
  const responseData = response.data;

  return response.ok ? (
    Promise.resolve(responseData)) : (Promise.resolve(responseData));
};

export default getCharacters;