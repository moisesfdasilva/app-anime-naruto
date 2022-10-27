import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AlternateCharactersList extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main id="main-padding-top" className="image-background-1">
          <img
            id="image-detail-limit-1"
            src="https://wallpaperaccess.com/full/5569180.jpg"
            alt="akatsuki"
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default AlternateCharactersList;
