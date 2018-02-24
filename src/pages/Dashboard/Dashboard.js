import React from 'react';
class Dashboard extends React.Component {
  state = {  }
  render() {
    return (
      <section id="dashboard">
        <h1>Dashboard</h1>
        <div className="container">
          <aside className="col-md-5">
            <p>Aside</p>
          </aside>
          <main className="col-md-7">
            <p>content</p>
          </main>
        </div>
      </section>
    );
  }
}

export default Dashboard;