// App.js
import React, { useState } from "react";
import { WidthProvider } from "./TopicWidthContext";
import TopicComponent from "./TopicComponent";
import Flashcard from "./Flashcard";
import "./App.css"; // Import the CSS file for styling

function App() {
  const [showFlashcard, setShowFlashcard] = useState(false);
  const [flashcardTitle, setFlashcardTitle] = useState("");
  const [flashcardText, setFlashcardText] = useState("");

  const handleFlashcardToggle = (title, text) => {
    setFlashcardTitle(title);
    setFlashcardText(text);
    setShowFlashcard(!showFlashcard);
  };

  return (
    <WidthProvider>
      <div className="App">
        <header className="App-header">
          <p className="title">Title</p>
          <TopicComponent onFlashcardToggle={handleFlashcardToggle} />
          {showFlashcard && (
            <Flashcard title={flashcardTitle} text={flashcardText} />
          )}
        </header>
        <main>
          <Flashcard trigger={false}>

          </Flashcard>
        </main>
      </div>
    </WidthProvider>
  );
}

export default App;
