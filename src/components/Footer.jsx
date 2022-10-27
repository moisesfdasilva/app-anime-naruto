import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer has-background-warning-light">
        <div class="content has-text-centered">
          <h4>Série Naruto:</h4>
          <p>Criada por Masashi Kishimoto</p>
          <p>Produzida pelo Studio Pierrot e Aniplex</p>
          <img
            src="https://seeklogo.com/images/C/cloud-akatsuki-logo-17E3DF7FAC-seeklogo.com.png"
            alt="logo"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
