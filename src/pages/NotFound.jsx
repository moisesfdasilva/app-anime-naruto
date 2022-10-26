import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class NotFound extends React.Component {
  render() {
    const linkNotFound = 'https://nerdhits.com.br/wp-content/uploads/2022/03/naruto-pergaminho-dos-selos.jpg';
    return (
      <section>
        <Header />
        <div class="has-background-warning-light mt-4">
          <h1 class="subtitle is-3"> Página não encontrada! </h1>
          <img src={ linkNotFound } alt="linkNotFound"/>
        </div>
        <Footer />
      </section>
    );
  }
}

export default NotFound;
