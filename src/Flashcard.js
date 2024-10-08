import React from "react";
import './Flashcard.css';

function Flashcard(props) {
  return (props.trigger) ? (
    <div className="flashcard">
      <div className="flashcard-header">{props.title}</div>
      <div className="flashcard-body">{props.text}</div>
    </div>
  ): ""
};

export default Flashcard;
