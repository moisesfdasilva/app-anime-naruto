import React from 'react';
import PropTypes from 'prop-types';

class CharactersCard extends React.Component {
  render() {
    const { name, image, about, characterInfo, goToCharactersDetails } = this.props;
    return (
      <section class="card has-background-warning-light mt-4">
        <div class="card-content">
          <div class="content">
            <h3 class="subtitle is-3">{ name }</h3>
            <img
              id="char-card-image-height-limit"
              src={ image }
              alt={ name }
            />
            <p>{ about }</p>
            <button
              class="button is-warning"
              type="button"
              onClick={ () => goToCharactersDetails(characterInfo) }
              >
              Detalhes do personagem
            </button>
          </div>
        </div>
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
