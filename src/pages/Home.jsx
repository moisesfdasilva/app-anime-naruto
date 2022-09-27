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
    const { data } = this.state;
    console.log(data);
    return (
      <div className="pokedex">
        <h1> Characters </h1>
      </div>
    );
  }
}

export default Home;
