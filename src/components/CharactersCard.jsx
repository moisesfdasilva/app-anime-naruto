import React from 'react';
import PropTypes from 'prop-types';

class CharactersCard extends React.Component {
  render() {
    const { name, image, about } = this.props;
    return (
      <section>
        <h3>{ name }</h3>
        <img src={ image } alt={ name } height="100"/>
        <p>{ about }</p>
      </section>
    );
  }
}

CharactersCard.proptype = {
  name: PropTypes.string,
  image: PropTypes.string,
  about: PropTypes.string,
}.isRequired;

export default CharactersCard;
