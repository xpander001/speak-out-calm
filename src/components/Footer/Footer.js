import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul className="footer__ul">
          <li className="footer__li">ABOUT CALM</li>
          <li className="footer__li">DONATE</li>
          <li className="footer__li">
            FOLLOW US
            <i className="fab fa-twitter" />
            <i className="fab fa-facebook-f" />
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
