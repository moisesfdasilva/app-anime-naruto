import React from 'react';
import PropTypes from 'prop-types';

class CharactersCard extends React.Component {
  render() {
    const { name, image, about, characterInfo, goToCharactersDetails } = this.props;
    return (
      <section>
        <h3>{ name }</h3>
        <img src={ image } alt={ name } height="100"/>
        <p>{ about }</p>
        <button
          type='button'
          onClick={ () => goToCharactersDetails(characterInfo) }
          >
          Detalhes do personagem
        </button>
      </section>
    );
  }
}

CharactersCard.proptype = {
  characterInfo: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
  about: PropTypes.string,
  goToCharactersDetails: PropTypes.func,
}.isRequired;

export default CharactersCard;
