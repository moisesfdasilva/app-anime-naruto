const CHARACTERS_BASE_API = 'https://naruto-nest-api.herokuapp.com/characters';

const getAlternateCharacters = async () => {
  const response = await fetch(CHARACTERS_BASE_API);
  const responseJson = await response.json();

  return response.ok ? (
    Promise.resolve(responseJson)) : (Promise.resolve(responseJson));
};

export default getAlternateCharacters;