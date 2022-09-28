import React from 'react';

import Header from '../components/Header';

class NotFound extends React.Component {
  render() {
    const linkNotFound = 'https://nerdhits.com.br/wp-content/uploads/2022/03/naruto-pergaminho-dos-selos.jpg';
    return (
      <main>
        <Header />
        <img src={ linkNotFound } alt='linkNotFound' height="300"/>
        <h1> Página não encontrada! </h1>
      </main>
    );
  }
}

export default NotFound;
