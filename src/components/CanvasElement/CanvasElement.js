import React from 'react';

import './CanvasElement.css';

import logo from './calm-logo-white.png';

class CanvasElement extends React.Component {
  state = {  }

  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
      this.updateCanvas();
  }
  updateCanvas() {
    var imageObj = new Image();
    const that = this;
    imageObj.onload = function() {
      const canvas = that.refs.canvas;
      const {title, text, color} = that.props;
      const ctx = that.refs.canvas.getContext('2d');
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font="20px Georgia";
      ctx.fillText(title, canvas.width / 3, 50);
      ctx.font="20px Georgia";
      ctx.fillText(text, canvas.width / 3,100);
      ctx.drawImage(imageObj, 10, 0);
    };
    imageObj.src = logo; 
  }

  render() {
    return (
      <canvas ref="canvas" width={470} height={290}/>
    )
  }
}

export default CanvasElement;