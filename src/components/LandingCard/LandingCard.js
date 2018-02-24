import React from "react";
import { Link } from "react-router-dom";
import "./LandingCard.css";
import Header from "../Header/Header";
class LandingCard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="landing-container background--boundless-blue col-md-8 col-md-offset-2 margin--vertical-xl text--white text--center padding--md gap--md">
          <h1 className="text--xl landing-container__title">
            Share Your Man Feelings
          </h1>
          <p className="landing-container__text">
            Humour can be used to mask the truth as well as get to the heart of
            it. Create your own postcard to share with friends and finally break
            the stigma against mental health especially among men.
          </p>
          <Link to="Dashboard" className="landing-container__button">
            {" "}
            Create Postcard
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingCard;
