import React from 'react';

class Home extends React.Component {
  state = {
    loading: true,
    data: [],
  };

  componentDidMount = async () => {
    const response = await this.getCharacters();
    this.setState = ({ data: response, loading: false });
  };

  getCharacters = async () => {
    try {
      return await fetch('https://naruto-api.herokuapp.com/api/v1/characters')
        .then((response) => response.json())
        .then((characters) => characters);
    } catch (error) {
      return error;
    }
  };

  render() {
    return (
      <div className="pokedex">
        <h1> Character </h1>
      </div>
    );
  }
}

export default Home;
