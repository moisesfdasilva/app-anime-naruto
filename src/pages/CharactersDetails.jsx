import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';

class CharactersDetails extends React.Component {
  state = {
    loading: true,
    characterData: [],
    moreInfo: [],
  };

  async componentDidMount() {
    const { match: { params: { name } } } = this.props;
    await this.getCharacter(name);
    this.setState({ loading: false });
  }

  getCharacter = async (name) => {
    const request = await fetch('https://naruto-api.herokuapp.com/api/v1/characters')
    const requestJson = await request.json();
    const characterData = requestJson.find((character) => (character.name === name))
    const { info } = characterData;
    const moreInfo = Object.entries(info);
    this.setState({ characterData, moreInfo });
  };

  render() {
    const { characterData, loading, moreInfo } = this.state;
    if(loading) { return <h1>LOADING...</h1> }
    return (
      <main>
        <Header />
        <h2>{`Personagem - ${characterData.name}:`}</h2>
        <p>{ characterData.info['Ocupação']}</p>
        <img src={ characterData.images[0] } alt={ characterData.name } height="300"/>
        <h3>Sobre o Personagem:</h3>
        { characterData.about.map((info, index) => (
          <p key={ index }>{ info }</p>
        )) }
        <h3>Imagens do Personagem:</h3>
        { characterData.images.map((image, index) => (
          <img key={ index } src={ image } alt={ characterData.name } height="100"/>
        )) }
        <h3>Mais Informações do Personagem:</h3>
        { moreInfo.map((text, index) => (
          <p key={ index }>{`${text[0]}:${text[1]}`}</p>
        )) }
        <h3>Referências Bibliográficas:</h3>
        <p>{`Narutopedia: <${characterData.page}>.`}</p>
      </main>
    );
  }
}

CharactersDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default CharactersDetails;
