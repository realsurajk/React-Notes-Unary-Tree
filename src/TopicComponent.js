// TopicContainer.js
import React from "react";
import { Topic } from "./Topic";
import Flashcard from "./Flashcard";
import { LeafCountProvider } from "./LeafCountContext";

const topics = [
  {
    title: "Topic 1",
    children: [
      { title: "Topic 1" },
      { title: "Topic 2" },
      { title: "Topic 3" },
      {
        title: "Subtopic",
        children: [
          { title: "Subtopic 1" },
          {
            title: "Subtopic",
            children: [
              { title: "Subtopic 1" }, 
              { title: "Subtopic 2" }],
          },
        ],
      },
    ],
  },
  // Add other topics similarly
  {
    title: "Topic 2",
    flashcardText: "This is a basic text flashcard for Rule 3",
  },
];

const renderTopics = (topics) => {
  return topics.map((topic, index) => (
    <Topic key={index} title={topic.title}>
      {topic.children && renderTopics(topic.children)}
      {topic.flashcardText && (
        <Flashcard title={topic.title} text={topic.flashcardText} />
      )}
    </Topic>
  ));
};

const TopicContainer = () => {
  return (
    <LeafCountProvider>
      <div className="topic-container top" style={{ width: "1000px" }}>
        {renderTopics(topics)}
      </div>
    </LeafCountProvider>
  );
};


export default TopicContainer;
