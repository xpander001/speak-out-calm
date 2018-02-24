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
      ctx.textAlign="center";
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font="26px Verdana";
      ctx.fillText(title, canvas.width / 2, 120);
      ctx.font="18px Verdana";
      ctx.fillText(text, canvas.width / 2,180);
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