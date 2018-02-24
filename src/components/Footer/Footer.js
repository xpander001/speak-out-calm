import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <ul className="footer__ul">
            <li className="footer__li">ABOUT CALM</li>
            <li className="footer__li">DONATE</li>
            <li className="footer__li">
              FOLLOW US:{"  "}
              <i className="fab fa-twitter" />
              <i className="fab fa-facebook-f" />
            </li>
          </ul>
          <p className="footer__copyright">COPYRIGHT 2018</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
