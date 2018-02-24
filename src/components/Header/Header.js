import React from "react";
import logo from "./calm-logo-white.png";
import "./Header.css";
class Heading extends React.Component {
  state = {};
  render() {
    return (
      <header className="header">
        <img src={logo} className="header__image" />
        <ul className="header__ul">
          <li className="header__li">
            Social share:
            <i className="fab fa-twitter" />
            <i className="fab fa-facebook-f" />
          </li>
        </ul>
      </header>
    );
  }
}

export default Heading;
