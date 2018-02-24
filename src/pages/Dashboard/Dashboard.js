import React from 'react';

import TextCardList from '../../components/TextCardList/TextCardList';
import ColorList from '../../components/ColorList/ColorList';
import CanvasElement from '../../components/CanvasElement/CanvasElement';

function Dahsboard(props) {
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
                messages={props.data.messages}
                onTextSelected={props.onTextSelected}
                selectedText={props.selectedText}
                />
            </div>
            <div className="row">
              <h2>Colors</h2>
              <ColorList
                colors={props.data.colors}
                onColorSelected={props.onColorSelected}
                selectedColor={props.selectedColor}
                />
            </div>
          </aside>
          <main className="col-md-7">
            <CanvasElement title={props.selectedTitle} text={props.selectedText} color={props.selectedColor} />
          </main>
        </div>
      </div>
    </section>
  );
}

export default Dahsboard;