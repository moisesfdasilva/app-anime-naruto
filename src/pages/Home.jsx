import React from 'react';

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
          <section key={ character.id }>
            <h3>{ character.name }</h3>
            <img src={ character.images[0] } alt={ character.name } height="100"/>
            <p>{ character.about[0] }</p>
          </section>
        )) }
      </main>
    );
  }
}

export default Home;
