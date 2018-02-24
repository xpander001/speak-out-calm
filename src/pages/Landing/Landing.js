import React from "react";
import "./Landing.css";
import LandingCard from "../../components/LandingCard/LandingCard";

class Landing extends React.Component {
  state = {};
  render() {
    return (
      <section id="landing" className="landing">
        <div className="container">
          <LandingCard />
        </div>
      </section>
    );
  }
}

export default Landing;
