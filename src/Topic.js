import React, { useState } from "react";
import { useWidth, useWidthUpdate} from "./TopicWidthContext";
import Flashcard from "./Flashcard";
import FlashcardPopup from "./FlashcardPopup";
import { useLeafCount } from "./LeafCountContext";

export function Topic({ title, children }) {
  const [childrenVisible, setChildrenVisible] = useState(false);
  const { leafCount, increaseLeafCount, decreaseLeafCount } = useLeafCount();
  const TopicWidth = useWidth();
  const { increaseWidth, decreaseWidth } = useWidthUpdate();
  const [showFlashcard, setShowFlashcard] = useState(false);

  const handleClick = (e) => {
    const target = e.target;
    const topic = target.closest(".topic");
    const topTopic = document.querySelector(".top");
    // console.log("Top Topic Content:", topTopic.innerText);
    console.log("Top Topic Width:", topTopic.style.width);

    if (childrenVisible) {
      if (!topic) return;
      console.log("going in");
      topTopic.style.width = `${TopicWidth - 400}px`;
      decreaseWidth();
      topic
        .querySelectorAll(".topic-container > .topic")
        .forEach((el, index) => {
          if (index > 0 || index == 0) {
            // Skip the first element (Topic 1)
            el.classList.add("fade-out");
            el.addEventListener(
              "animationend",
              () => {
                setChildrenVisible(false);
                el.classList.remove("fade-out");
                // decreaseLeafCount();
              },
              { once: true }
            );
          }
        });
      for (let i = 0; i < React.Children.count(children); i++) {
        decreaseLeafCount();
      }
    } else {
      console.log("going out");
      topTopic.style.width = `${TopicWidth + 400}px`;
      increaseWidth();
      console.log("new width: ", TopicWidth);
      topTopic.addEventListener(
        "animationend",
        () => {
          setChildrenVisible(true);
          // increaseLeafCount();
        },
        { once: true }
      );
      for (let i = 0; i < React.Children.count(children); i++) {
        increaseLeafCount();
      }
      setChildrenVisible(true);
    }
  };

  const handleFlashcardClick = () => {
    setShowFlashcard(!showFlashcard); // Toggle the visibility of the flashcard
  };

  return (
    <div className="topic">
      <span className="topic-text" onClick={handleClick}>
        {title}
      </span>
      {childrenVisible && <div className="topic-container">{children}</div>}
      {!children && (
        <FlashcardPopup
          title={title}
          text="This is a basic text flashcard"
          isVisible={showFlashcard}
          onClose={handleFlashcardClick}
        />
      )}
      {console.log("Leaf Count:", leafCount)}
    </div>
  );
}
