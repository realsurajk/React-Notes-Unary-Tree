// FlashcardPopup.js
import React from "react";

const FlashcardPopup = ({ title, text, isVisible, onClose }) => {
  if (!isVisible) {
    return null; // Don't render anything if the popup is not visible
  }

  return (
    <div className="flashcard-popup">
      <div className="flashcard-header">{title}</div>
      <div className="flashcard-body">{text}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default FlashcardPopup;
