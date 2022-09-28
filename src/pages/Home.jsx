import React from 'react';

import CharactersCard from '../components/CharactersCard';

class Home extends React.Component {
  state = {
    loading: true,
    data: [],
  };

  async componentDidMount() {
    await this.getCharacters();
    this.setState({ loading: false });
  }

  getCharacters = async () => {
    const request = await fetch('https://naruto-api.herokuapp.com/api/v1/characters')
    const requestJson = await request.json();
    this.setState({ data: requestJson });
  };

  render() {
    const { data, loading } = this.state;
    if(loading) { return <h1>LOADING...</h1> }
    return (
      <main>
        <h1>Personagens do Naruto</h1>
        { data.map((character) => (
          <CharactersCard 
            key={ character.id }
            name={ character.name }
            image={ character.images[0] }
            about={ character.about[0] }
          />
        )) }
      </main>
    );
  }
}

export default Home;
