import React from 'react';

import TextCardList from '../../components/TextCardList/TextCardList';
import ColorList from '../../components/ColorList/ColorList';
import CanvasElement from '../../components/CanvasElement/CanvasElement';

import data from '../../data/data.json';

class Dashboard extends React.Component {
  
  state = {
    data,
    selectedColor: data.colors[0],
    selectedTitle: data.messages[0].title,
    selectedText: data.messages[0].text,
  }

  onColorSelected =(color) => {
    this.setState({selectedColor: color});
  }
  
  onTextSelected = (title, text) => {
    this.setState({
      selectedTitle: title,
      selectedText: text
    });
  }

  render() {
    return (
      <section id="dashboard">
        <div className="container">
          <div className="row">
            <h1 className="col-xs-12">Dashboard</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <aside className="col-md-5">
              <div className="row">
                <h2>Choose your statement</h2>
                <TextCardList
                  messages={this.state.data.messages}
                  onTextSelected={this.onTextSelected}
                  selectedText={this.state.selectedText}
                  />
              </div>
              <div className="row">
                <h2>Colors</h2>
                <ColorList
                  colors={this.state.data.colors}
                  onColorSelected={this.onColorSelected}
                  selectedColor={this.state.selectedColor}
                  />
              </div>
            </aside>
            <main className="col-md-7">
              <CanvasElement title={this.state.selectedTitle} text={this.state.selectedText} color={this.state.selectedColor} />
            </main>
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;