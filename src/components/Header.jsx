import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header
        id="header-top-fixed"
        class="card-header has-background-warning-light is-justify-content-center"
      >
        <div>
          <h1 class="title is-2 is-spaced">Personagens da Série Naruto</h1>
          <Link to='/'>
            <h2 class="subtitle is-3">Lista de Personagens</h2>
          </Link>
        </div>
        <img
          class="image is-96x96"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZlOtvmis-mrYARO7AkaM8QSZKHAH1vtxCy9kC8-k_p_4h-Dq9Op8UqAxMEZEreCXP6s&usqp=CAU"
          alt="logo"
        />
      </header>
    );
  }
}

export default Header;