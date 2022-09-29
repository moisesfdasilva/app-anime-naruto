import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';

class CharactersDetails extends React.Component {
  render() {
    const { characterDetail } = this.props;
    const { info } = characterDetail;
    const moreInfo = Object.entries(info);
    return (
      <main>
        <Header />
        <h2>{`Personagem - ${characterDetail.name}:`}</h2>
        <p>{ characterDetail.info['Ocupação']}</p>
        <img src={ characterDetail.images[0] } alt={ characterDetail.name } height="300"/>
        <h3>Sobre o Personagem:</h3>
        { characterDetail.about.map((info, index) => (
          <p key={ index }>{ info }</p>
        )) }
        <h3>Imagens do Personagem:</h3>
        { characterDetail.images.map((image, index) => (
          <img key={ index } src={ image } alt={ characterDetail.name } height="100"/>
        )) }
        <h3>Mais Informações do Personagem:</h3>
        { moreInfo.map((text, index) => (
          <p key={ index }>{`${text[0]}:${text[1]}`}</p>
        )) }
        <h3>Referências Bibliográficas:</h3>
        <p>{`Narutopedia: <${characterDetail.page}>.`}</p>
      </main>
    );
  }
}

function mapStateToProps(state) {
  const { characterDetail } = state
  return {
    characterDetail: characterDetail.characterInfo,
  };
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

export default connect(mapStateToProps)(CharactersDetails);
