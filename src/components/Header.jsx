import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Personagens da Série Naruto</h1>
        <Link to='/'>
          <h2>Lista de Personagens</h2>
        </Link>
      </header>
    );
  }
}

export default Header;