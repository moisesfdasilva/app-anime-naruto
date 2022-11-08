import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer has-background-warning-light">
        <div className="content has-text-centered">
          <h4>Série Naruto:</h4>
          <p>Criada por Masashi Kishimoto</p>
          <p>Produzida pelo Studio Pierrot e Aniplex</p>
          <Link to="/aternatecharacterslist">
            <img
              src="https://seeklogo.com/images/C/cloud-akatsuki-logo-17E3DF7FAC-seeklogo.com.png"
              alt="logo"
            />
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
