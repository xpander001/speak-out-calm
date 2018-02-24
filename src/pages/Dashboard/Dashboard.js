import React from 'react';

import TextCardList from '../../components/TextCardList/TextCardList';
import ColorList from '../../components/ColorList/ColorList';
import CanvasElement from '../../components/CanvasElement/CanvasElement';

import "./Dashboard.css";

function Dashboard(props) {
  return (
    <section id="dashboard">
      <div className="fluid-container">
        <div className="row dashboard-row">
          <aside className="col-sm-5 dashboard-sidebar padding--md">
            <div className="row padding--md">
              <h2 className="text--white margin--vertical-xs">1. CHOOSE YOUR TEXT</h2>
              <TextCardList
                messages={props.data.messages}
                onTextSelected={props.onTextSelected}
                selectedText={props.selectedText}
                />
            </div>
            <div className="row padding--md">
              <h2 className="text--white margin--vertical-xs">2. CHOOSE YOUR COLOUR</h2>
              <ColorList
                colors={props.data.colors}
                onColorSelected={props.onColorSelected}
                selectedColor={props.selectedColor}
                />
            </div>
          </aside>
          <main className="col-sm-7 canvas-container">
            <CanvasElement title={props.selectedTitle} text={props.selectedText} color={props.selectedColor} />
          </main>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;