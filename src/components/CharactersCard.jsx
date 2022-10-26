import React from 'react';
import PropTypes from 'prop-types';

class CharactersCard extends React.Component {
  render() {
    const { name, image, about, characterInfo, goToCharactersDetails } = this.props;
    return (
      <section class='card'>
        <br />
        <h3 class='subtitle is-4'>{ name }</h3>
        <img
          id='image-height-limit'
          src={ image }
          alt={ name }
        />
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
