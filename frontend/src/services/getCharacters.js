const CHARACTERS_BASE_API = 'http://localhost:3001/characters';

const getCharacters = async () => {
  const response = await fetch(CHARACTERS_BASE_API);
  const responseJson = await response.json();

  return response.ok ? (
    Promise.resolve(responseJson)) : (Promise.resolve(responseJson));
};

export default getCharacters;