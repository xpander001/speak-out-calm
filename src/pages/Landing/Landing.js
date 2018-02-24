import React from 'react';

import LandingCard from '../../components/LandingCard/LandingCard';


class Landing extends React.Component {
  state = {  }
  render() {
    return (
      <section id="landing">
        <div className="container">
          <LandingCard />
        </div>
      </section>
    );
  }
}

export default Landing;