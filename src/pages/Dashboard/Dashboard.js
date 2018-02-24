import React from 'react';

import ColorList from '../../components/ColorList/ColorList';

import data from '../../data/data.json';

class Dashboard extends React.Component {
  
  state = {
    data,
    selectedColor: data.colors[0]
  }

  onColorSelected =(color) => {
    console.log(color);
    this.setState({selectedColor: color});
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
              <h2>Colors</h2>
              <ColorList
                colors={this.state.data.colors}
                onColorSelected={this.onColorSelected}
                selectedColor={this.state.selectedColor}
                />
            </aside>
            <main className="col-md-7">
              <p>content</p>
            </main>
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;