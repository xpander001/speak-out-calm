import React from 'react';

import './CanvasElement.css';

class CanvasElement extends React.Component {
  state = {  }

  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
      this.updateCanvas();
  }
  updateCanvas() {
    const canvas = this.refs.canvas;
    const {title, text, color} = this.props;
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.font="20px Georgia";
    ctx.fillText(title,10,50);
    ctx.font="20px Georgia";
    ctx.fillText(text,10,100);
  }

  render() {
    return (
      <canvas ref="canvas" width={470} height={290}/>
    )
  }
}

export default CanvasElement;