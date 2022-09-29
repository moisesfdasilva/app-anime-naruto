const getCharacters = async () => {
  const request = await fetch('https://naruto-api.herokuapp.com/api/v1/characters')
  const requestJson = await request.json();
  return requestJson;
};

export default getCharacters;