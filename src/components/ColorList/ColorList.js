import React from 'react';

import ColorElement from '../ColorElement/ColorElement';

function ColorList({colors = [], onColorSelected, selectedColor}) {
  return <div className="ColorList">
  {
    colors.map((color) => (<ColorElement color={color} key={color} onColorSelected={onColorSelected} selectedColor={selectedColor} />))
  }
  </div>
}

export default ColorList;