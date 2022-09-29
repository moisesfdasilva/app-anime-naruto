import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CharactersCard from '../components/CharactersCard';
import Header from '../components/Header';
import { fetchWithThunk, actSelectCharacter } from '../redux/action';

class Home extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWithThunk());
  }

  goToCharactersDetails = (characterInfo) => {
    const { history, dispatch } = this.props;
    dispatch(actSelectCharacter(characterInfo));
    history.push(`/charactersdetails/${ characterInfo.name }`);
  };

  render() {
    const { data, loading } = this.props;
    if(loading) { return <h1>LOADING...</h1> }

    return (
      <main>
        <Header />
        { data.map((character) => (
          <CharactersCard
            key={ character.id }
            characterInfo={ character }
            name={ character.name }
            image={ character.images[0] }
            about={ character.info['Ocupação'] }
            goToCharactersDetails={ this.goToCharactersDetails }
          />
        )) }
      </main>
    );
  }
}

function mapStateToProps(state) {
  const { characterReducer } = state;
  return {
    data: characterReducer.data,
    loading: characterReducer.loading,
  };
}

Home.proptype = {
  history: PropTypes.string,
  dispatch: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(Home);
