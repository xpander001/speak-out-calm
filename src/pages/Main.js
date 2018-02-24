import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import "./Main.css";
import Landing from "../pages/Landing/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";
import Review from "../pages/Review/Review";
import Footer from "../components/Footer/Footer";
import data from "../data/data.json";

class Main extends React.Component {
  state = {
    data,
    selectedColor: data.colors[0],
    selectedTitle: data.messages[0].title,
    selectedText: data.messages[0].text
  };

  onColorSelected = color => {
    this.setState({ selectedColor: color });
  };

  onTextSelected = (title, text) => {
    this.setState({
      selectedTitle: title,
      selectedText: text
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div id="main">
          <Route exact path="/" component={() => <Landing />} />
          <Route
            path="/dashboard"
            component={() => (
              <Dashboard
                onColorSelected={this.onColorSelected}
                onTextSelected={this.onTextSelected}
                data={this.state.data}
                selectedColor={this.state.selectedColor}
                selectedTitle={this.state.selectedTitle}
                selectedText={this.state.selectedText}
              />
            )}
          />
          <Route
            path="/review"
            component={() => (
              <Review
                selectedColor={this.state.selectedColor}
                selectedTitle={this.state.selectedTitle}
                selectedText={this.state.selectedText}
              />
            )}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
