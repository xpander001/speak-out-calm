import React from 'react';

import './TextCardList.css';

import TextCard from '../TextCard/TextCard';

function TextCardList({messages = [], selectedText, onTextSelected}) {
  return <div className="TextCardList">
  {
    messages.map((message) => (
      <div className="col-xs-6" key={message.text} >
        <TextCard title={message.title} text={message.text} tags={message.tags} selectedText={selectedText} onTextSelected={onTextSelected}/>
      </div>)
    )
  }
  </div>
}

export default TextCardList;