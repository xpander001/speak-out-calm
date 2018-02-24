import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <ul className="footer__ul">
            <li className="footer__li">
              <a href="https://www.thecalmzone.net/about-calm/what-is-calm/">
                {" "}
                ABOUT CALM
              </a>
            </li>
            <li className="footer__li">
              <a href="https://www.thecalmzone.net/get-involved/donate/">
                {" "}
                DONATE{" "}
              </a>
            </li>
            <li className="footer__li">
              FOLLOW US:<a href="https://twitter.com/theCALMzone">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.facebook.com/theCALMzone">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
          </ul>
          <p className="footer__copyright">COPYRIGHT 2018</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
