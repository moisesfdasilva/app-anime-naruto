import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header
        id="header-top-fixed"
        className="card-header has-background-warning-light is-justify-content-center"
      >
        <div>
          <h1 className="title is-2 is-spaced">Personagens do Anime Naruto</h1>
          <Link to='/'>
            <h2 className="subtitle is-3">Lista de Personagens</h2>
          </Link>
        </div>
        <img
          className="image is-96x96"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZlOtvmis-mrYARO7AkaM8QSZKHAH1vtxCy9kC8-k_p_4h-Dq9Op8UqAxMEZEreCXP6s&usqp=CAU"
          alt="logo"
        />
      </header>
    );
  }
}

export default Header;