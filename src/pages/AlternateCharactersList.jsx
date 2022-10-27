import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import getAlternateCharacters from '../services/getAlternateCharacters';

class AlternateCharactersList extends React.Component {
  state = {
    loading: true,
    dataList: [],
  }

  async componentDidMount() {
    const newData = await getAlternateCharacters();
    this.setState({
      loading: false,
      dataList: newData,
    });
  }

  render() {
    const { loading, dataList } = this.state;
    if(loading) { return <h1>LOADING...</h1> }
    return (
      <div>
        <Header />
        <main>
          <h1>ABC</h1>
          { dataList.map((character) => (
            <section key={ character['_id'] }>
              <p>{ character['fullName'] }</p>
            </section>
          )) }
        </main>
        <Footer />
      </div>
    );
  }
}

export default AlternateCharactersList;
