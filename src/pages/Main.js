import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../pages/Landing/Landing';
import Dashboard from '../pages/Dashboard/Dashboard';
import Review from '../pages/Review/Review';

import data from '../data/data.json';

console.log(data);

class Main extends React.Component {
  state = {  }
  render() {
    return (
      <BrowserRouter>
          <div id="main">
            <Route exact path="/" component={Landing}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/review" component={Review}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default Main;