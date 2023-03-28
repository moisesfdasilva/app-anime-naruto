import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

class CharactersDetails extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { characterDetail } = this.props;
    // const { info } = characterDetail;
    // const moreInfo = Object.entries(info);
    return (
      <div>
        <Header />
        <main id="main-padding-top" className="card has-background-warning-light mt-4">
          <section className="card-content">
            <div className="content">
              <h2>{`Personagem - ${characterDetail.name}:`}</h2>
              <p>{ characterDetail.level}</p>
              <img
                id="image-detail-limit-1"
                src={ characterDetail.image1 }
                alt={ characterDetail.name }
              />
              <h3>Localização:</h3>
              <p>{ characterDetail.resident }</p>
              <h3>Principais Técnicas:</h3>
              <p>{ characterDetail.skills }</p>
              <h3>Sobre o Personagem:</h3>
              <p>{ characterDetail.about }</p>
              {/* { characterDetail.about.map((info, index) => (
                <p key={ index }>{ info }</p>
              )) } */}
              {/* <h3>Imagens do Personagem:</h3>
              { characterDetail.images.map((image, index) => (
                <div key={ index }>
                  <img
                    id="image-detail-limit-2"
                    src={ image }
                    alt={ characterDetail.name }
                  />
                </div>
              )) } */}
              {/* <h3>Mais Informações do Personagem:</h3>
              { moreInfo.map((text, index) => (
                <p key={ index }>{`${text[0]}:${text[1]}`}</p>
              )) } */}
              <h3>Referências Bibliográficas:</h3>
              <p>{`Wiki Naruto: <${characterDetail.page}>.`}</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { characterDetail } = state
  return {
    characterDetail: characterDetail.characterInfo,
  };
}

CharactersDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(CharactersDetails);
