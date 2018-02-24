import React from 'react';

import './TextCard.css';

function Tag({tagName}) {
  return <span className="TextCard__Tag">{tagName}</span>
}

function TextCard({title, text, tags = [], selectedText, onTextSelected}) {
  return (
  <div className={(selectedText === text ? 'TextCard TextCard--selected' : 'TextCard')}
        onClick={() => onTextSelected(title, text)}>
    <p className="TextCard__Title">{title}</p>
    <p className="TextCard__Text">{text}</p>
    <div>
      {
        tags.map((tag) => (<Tag tagName={tag} key={tag} />))
      }
    </div>
  </div>);
}

export default TextCard;