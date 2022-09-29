import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CharactersCard from '../components/CharactersCard';
import Header from '../components/Header';
import { fetchWithThunk } from '../redux/action';

class Home extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWithThunk());
  }

  render() {
    const { data, loading } = this.props;
    if(loading) { return <h1>LOADING...</h1> }

    return (
      <main>
        <Header />
        { data.map((character) => (
          <Link key={ character.id } to={`/charactersdetails/${ character.name }`}>
            <CharactersCard 
              name={ character.name }
              image={ character.images[0] }
              about={ character.info['Ocupação'] }
            />
          </Link>
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

export default connect(mapStateToProps)(Home);
