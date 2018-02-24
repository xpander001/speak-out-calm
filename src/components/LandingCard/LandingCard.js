import React from 'react';

class LandingCard extends React.Component {
  render() { 
    return (
      <div className="landing-container background--boundless-blue col-md-8 col-md-offset-2 margin--vertical-xl text--white text--center padding--md gap--md"> 
        <h1 className="text--xl landing-container__title">Share Your Man Feelings</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam illo sequi, perspiciatis rem asperiores quae voluptatum laudantium natus consequatur, qui in enim ducimus at. Voluptatibus, ipsum reiciendis? Animi, labore!</p>
        <p><a href="/dashboard" className="button">Create Postcard</a></p>
      </div>
    )
  }
}

export default LandingCard;