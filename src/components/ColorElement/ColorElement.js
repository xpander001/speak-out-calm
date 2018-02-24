import React from 'react';

import './ColorElement.css';

function ColorElement({color, onColorSelected, selectedColor}) {
  return <span
    // style={() => `background-color: ${color}`}
    style={
      {backgroundColor: color}
    }
    className={(selectedColor === color ? 'ColorElement ColorElement--selected' : 'ColorElement')}
    onClick={() => onColorSelected(color)}></span>
}

export default ColorElement;