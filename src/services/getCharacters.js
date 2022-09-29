const CHARACTERS_BASE_API = 'https://naruto-api.herokuapp.com/api/v1/characters';

const getCharacters = async () => {
  const response = await fetch(CHARACTERS_BASE_API);
  const responseJson = await response.json();

  return response.ok ? (
    Promise.resolve(responseJson)) : (Promise.resolve(responseJson));
};

export default getCharacters;