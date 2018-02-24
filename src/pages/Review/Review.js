import React from 'react';

import './Review.css';

class Review extends React.Component {
  state = {  }
  render() {
    return (
      <section id="Review">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-offset-1">
              <h1>SHARE YOUR FEELINGS</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Review;