import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class NotFound extends React.Component {
  render() {
    const linkNotFound = 'https://nerdhits.com.br/wp-content/uploads/2022/03/naruto-pergaminho-dos-selos.jpg';
    return (
      <div>
        <Header />
        <main id="main-padding-top" class="has-background-warning-light mt-4">
          <h1 class="subtitle is-3"> Página não encontrada! </h1>
          <img src={ linkNotFound } alt="linkNotFound"/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
